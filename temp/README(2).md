# ankideck-backend

HTTP services for the Ankiugen product (generate + export APIs). Go module: **`github.com/JoeyScottSchronce/ankideck-backend`**.

1. **Generate** — requires `GEMINI_API_KEY`, `POST /v1/generate`.
2. **Export** — builds `.apkg` via **[text-only-apkgwriter](https://github.com/JoeyScottSchronce/text-only-apkgwriter)**; `POST /v1/export`.
3. **Auth** (optional) — **Production:** set **`GOOGLE_CLOUD_PROJECT`** or **`GCP_PROJECT`** and **`ANKIDECK_JWT_SECRET`** (≥32 characters) to use **Firestore** for users. **Local dev:** if Firestore auth is not enabled, set **`JWT_SECRET`** for the same routes with an **in-memory** store (not durable). Includes register, login, profile, search history, password reset, and email verification — see [docs/api.md](docs/api.md).

All support **browser CORS** (`CORS_ALLOWED_ORIGINS`). Full contract: [docs/api.md](docs/api.md).

**API errors:** JSON responses use a stable **`code`** and a **sanitized `error` string**. Upstream (Gemini) and internal failures are **logged on the server** with full detail; they are **not** echoed to clients (no API keys, raw provider text, or paths in JSON).

## Environment

**Local secrets:** Use Vault path `secret/ankideck/backend/local` and run **`./scripts/run-with-vault.sh`** (or `source scripts/vault-env.sh secret/ankideck/backend/local` then `go run .`). Policies and import tooling live in the **ankideck-ops** repo (`vault/`). See the web app repo [`docs/vault.md`](https://github.com/JoeyScottSchronce/ankideck/blob/main/docs/vault.md) for Vault setup.

### Generate (`go run .`)

| Variable | Required | Default |
|----------|----------|---------|
| `GEMINI_API_KEY` | yes | — |
| `GEMINI_MODEL` | no | `gemini-3.1-flash-lite-preview` |
| `LISTEN_ADDR` | no | If unset: `:${PORT}` when `PORT` is set (e.g. **Cloud Run**), else `:8080` |
| `CORS_ALLOWED_ORIGINS` | no | Local Vite origins (see [internal/cors/cors.go](internal/cors/cors.go)); set to your deployed SPA origin in production |
| `JWT_SECRET` | no | Only when **Firestore auth is not** enabled: enables auth API with an **in-memory** user store (dev). Use a long random secret |

### Auth — Firestore (production)

When **`GOOGLE_CLOUD_PROJECT`** or **`GCP_PROJECT`** and **`ANKIDECK_JWT_SECRET`** (≥32 characters) are set, the server registers Firestore-backed auth instead of the in-memory path above.

| Variable | Required | Notes |
|----------|----------|--------|
| `GOOGLE_CLOUD_PROJECT` or `GCP_PROJECT` | yes | GCP project ID |
| `ANKIDECK_JWT_SECRET` | yes | ≥32 characters; JWT signing |
| `ANKIDECK_FIRESTORE_DATABASE_ID` | no | Non-default Firestore database; omit for `(default)` |

Uses Application Default Credentials for Firestore (e.g. Cloud Run service account).

### Transactional email (SendGrid, optional)

Password-reset and email-verification messages are sent via **SendGrid** when both **`SENDGRID_API_KEY`** and **`SENDGRID_FROM_EMAIL`** are set. Omit them to disable sending (auth APIs still work; links are simply not emailed).

| Variable | Required | Notes |
|----------|----------|--------|
| `SENDGRID_API_KEY` | for email | SendGrid API key |
| `SENDGRID_FROM_EMAIL` | for email | Verified sender address in SendGrid |
| `ANKIDECK_APP_BASE_URL` | for links | Public site URL **without** trailing slash; used in reset/verify links (e.g. `https://ankiugen.com`) |

### Stripe billing (optional)

When **all** of the following are set, the server also registers `POST /v1/billing/checkout-session`, `POST /v1/billing/one-hour-checkout-session`, `POST /v1/billing/cancel-subscription`, and `POST /v1/stripe/webhook` (requires auth API to be enabled):

| Variable | Required | Notes |
|----------|----------|--------|
| `STRIPE_SECRET_KEY` | yes | Stripe secret API key (`sk_live_...` or `sk_test_...`) |
| `STRIPE_WEBHOOK_SECRET` | yes | Webhook signing secret (Dashboard endpoint or `stripe listen` output) |
| `STRIPE_PRICE_ID` | yes | Recurring **Price** id (`price_...`) for your subscription product |
| `STRIPE_SUCCESS_URL` | yes | Absolute URL after successful Checkout; append **`?billing=success`** so the web app can refresh the user profile |
| `STRIPE_CANCEL_URL` | yes | Absolute URL if the user abandons Checkout |
| `STRIPE_ONE_HOUR_PRICE_ID` | no | One-time **Price** id for the one-hour pass; if unset, `POST /v1/billing/one-hour-checkout-session` returns **503** with JSON code **`one_hour_not_configured`** |

**Local webhooks:** install the [Stripe CLI](https://stripe.com/docs/stripe-cli), run `stripe listen --forward-to localhost:8080/v1/stripe/webhook`, and set `STRIPE_WEBHOOK_SECRET` to the signing secret the CLI prints.

### Stripe on Cloud Run (production)

Cloud Build / `git push` **does not** read your local `.env`. Put sensitive values in **Secret Manager** and attach them to each regional Cloud Run service.

1. **Create or rotate Stripe secrets** (grants the default runtime service account accessor on each secret):

   ```bash
   export GCP_PROJECT_ID=your-project-id
   export STRIPE_SECRET_KEY=sk_live_...
   export STRIPE_WEBHOOK_SECRET=whsec_...
   ./scripts/gcp-secret-stripe.sh
   ```

2. **Attach secrets + plain env vars** in every deploy region (defaults match [cloudbuild.deploy.yaml](cloudbuild.deploy.yaml) `us-east1`, `us-west2`, `europe-west1`, `asia-northeast1`):

   ```bash
   set -a && source .env && set +a   # or export STRIPE_PRICE_ID, URLs, etc. by hand
   export GCP_PROJECT_ID=your-project-id
   ./scripts/gcp-run-attach-stripe.sh
   ```

   Override **`CLOUD_RUN_SERVICE`** or **`DEPLOY_REGIONS`** if your service name or regions differ. If URLs contain characters that break `gcloud --update-env-vars`, use **`gcloud run services update --env-vars-file=...`** for those keys instead.

3. **Cloud Build deploy:** To keep Stripe secrets on every image deploy, add comma-separated mappings to the trigger substitution **`_UPDATE_SECRETS`** (see comments in [cloudbuild.deploy.yaml](cloudbuild.deploy.yaml)). Secrets must exist in Secret Manager first.

**Multi-region parity:** The same Cloud Run **service name** in `us-east1`, `us-west2`, `europe-west1`, and `asia-northeast1` is still **one service per region**. [cloudbuild.deploy.yaml](cloudbuild.deploy.yaml) only runs `gcloud run deploy` with **`--update-secrets`** from **`_UPDATE_SECRETS`** (default: Gemini). It does **not** copy plain env vars (`CORS_ALLOWED_ORIGINS`, `GOOGLE_CLOUD_PROJECT`, …) or other secrets from another region. Container vs “source” deploy does not change which runtime env vars the app needs—only what your pipeline or manual `gcloud` commands set **per region**. To align non-primary regions with a fully configured region (defaults: copy **from** `us-east1` **to** `us-west2`, `europe-west1`, and `asia-northeast1`):

```bash
export GCP_PROJECT_ID=your-project-id
./scripts/gcp-run-sync-env-from-region.sh
```

### Stripe live webhook (Dashboard)

In Stripe **Live** mode: **Developers → Webhooks → Add endpoint**. Point the URL at your public API, e.g. **`https://api.example.com/v1/stripe/webhook`**. Enable at least:

- `checkout.session.completed`
- `customer.subscription.updated`
- `customer.subscription.deleted`

Use that endpoint’s **signing secret** (`whsec_...`) as **`STRIPE_WEBHOOK_SECRET`** in production (not the Stripe CLI test secret).

After deploy, smoke-test billing with [scripts/cloud-run-stripe-smoke.sh](scripts/cloud-run-stripe-smoke.sh) (`CLOUD_RUN_URL` and `JWT_TOKEN`).

### Export (`go run ./cmd/export`)

| Variable | Required | Default |
|----------|----------|---------|
| `EXPORT_LISTEN_ADDR` | no | `:8742` |
| `CORS_ALLOWED_ORIGINS` | no | same as generate |

**Secrets:** keep `GEMINI_API_KEY` out of git and out of the image. Supply it at **runtime** on Cloud Run (or local `-e`), e.g. from GitHub Actions, Secret Manager, or your CD pipeline—not baked into `docker build`.

## Run locally

```bash
export GEMINI_API_KEY=your_key
go run .
```

Second terminal:

```bash
go run ./cmd/export
```

## Module dependency

`go.mod` requires **[text-only-apkgwriter](https://github.com/JoeyScottSchronce/text-only-apkgwriter)** from the public module proxy (no `replace`).

## Docker (generate + export on one port)

From **this repository root**, the image builds the **main** binary, which serves **`POST /v1/generate`** and **`POST /v1/export`** on the same listen address (default `:8080`).

```bash
docker build -t ankideck-api .
docker run --rm -e GEMINI_API_KEY=your_key -e CORS_ALLOWED_ORIGINS=http://localhost:5173 -p 8080:8080 ankideck-api
```

The image runs as a non-root user and listens on the address derived from `LISTEN_ADDR`, then `PORT`, then `:8080`.

**Optional second process:** `go run ./cmd/export` (or a separate container built from a multi-stage image that only runs `export-api`) still works for split deployments; point the SPA’s export base URL at that host/port.

## Google Cloud Build / Cloud Run

Defaults use **`us-east1`** for **Artifact Registry** (Docker repo host; one regional registry, image pulled into every deploy region). **[cloudbuild.deploy.yaml](cloudbuild.deploy.yaml)** deploys **`ankideck-api`** to **`us-east1`**, **`us-west2`**, **`europe-west1`**, and **`asia-northeast1`** (Tokyo) by default (**`_DEPLOY_REGIONS`**). Change that comma-separated list in the file or in the trigger substitutions to add or remove regions later.

**Recommended CI path:** a **global** Cloud Build trigger (**1st gen** GitHub: `--repo-owner` / `--repo-name` via [scripts/gcp-trigger-github-1st-gen-deploy.sh](scripts/gcp-trigger-github-1st-gen-deploy.sh)). Optional **2nd gen** (regional Developer Connect) scripts: [scripts/gcp-github-connection.sh](scripts/gcp-github-connection.sh) and [scripts/gcp-finish-cloud-build-trigger.sh](scripts/gcp-finish-cloud-build-trigger.sh).

### `ankiugenNewRegion` — deploy one additional region from your shell

**`ankiugenNewRegion`** (spelling: **anki**-ugen, not “anliugen”) is the name of both a **script in this repo** and an optional **shell function** in your profile. Bare `ankiugenNewRegion` in the terminal only works after you define the function in **`~/.bashrc`** (or **`~/.bash_profile`**) and **`source`** it—or if **`scripts/`** is on your **`PATH`**. It is **not** magically available just because your current directory is the repo root.

**From the repo (works without editing `~/.bashrc`):**

```bash
export GCP_PROJECT_ID=your-project-id
export PATH="$HOME/google-cloud-sdk/bin:$PATH"   # if gcloud is not on PATH
./scripts/ankiugenNewRegion asia-northeast1
```

That runs [scripts/gcp-run-deploy-new-region.sh](scripts/gcp-run-deploy-new-region.sh), which deploys **`ankideck-api`** using the **same container image** as **`SOURCE_REGION`** (default **`us-east1`**), runs **`gcloud run deploy`** with **`--update-secrets`** aligned to [cloudbuild.deploy.yaml](cloudbuild.deploy.yaml) (override with **`UPDATE_SECRETS`** if your pipeline mounts more secrets at deploy time), then by default runs [scripts/gcp-run-sync-env-from-region.sh](scripts/gcp-run-sync-env-from-region.sh) so **plain env vars** and **Secret Manager env references** match the source region. It does **not** copy CPU/memory/concurrency/ingress/service account from the source revision—compare in the console if you rely on non-defaults.

You can also call the underlying script directly:

```bash
export GCP_PROJECT_ID=your-project-id
./scripts/gcp-run-deploy-new-region.sh asia-northeast1
```

**Optional env:** `SERVICE_NAME`, `SOURCE_REGION`, `UPDATE_SECRETS`, or `SYNC_ENV=0` to skip the sync step.

**Shell profile shortcut** (run **`ankiugenNewRegion`** from any directory; adjust **`ANKIUGEN_BACKEND_ROOT`** if your clone path differs):

```bash
ankiugenNewRegion() {
  local root="${ANKIUGEN_BACKEND_ROOT:-$HOME/Desktop/ankideck-backend}"
  [[ -n "${1:-}" ]] || { echo "usage: ankiugenNewRegion <region>" >&2; return 1; }
  ( cd "$root" && ./scripts/ankiugenNewRegion "$1" )
}
```

With **`GCP_PROJECT_ID`** exported (e.g. in the same profile), run **`ankiugenNewRegion asia-northeast1`**. You still need to add the region to **`_DEPLOY_REGIONS`** / the build trigger for future pushes; optionally re-run [scripts/gcp-run-attach-stripe.sh](scripts/gcp-run-attach-stripe.sh) and [scripts/gcp-external-https-lb-cloud-run.sh](scripts/gcp-external-https-lb-cloud-run.sh) as for any new region.

### 1. Install `gcloud` (Ubuntu LTS)

- **With sudo (apt):** run [scripts/install-gcloud-ubuntu-apt.sh](scripts/install-gcloud-ubuntu-apt.sh).
- **Without sudo:** run [scripts/install-gcloud-user-tarball.sh](scripts/install-gcloud-user-tarball.sh), then add  
  `export PATH="${HOME}/google-cloud-sdk/bin:${PATH}"` to your shell profile.

Verify: `gcloud version`.

### 2. Authenticate and pick a project

```bash
gcloud init
```

Enable **billing** on the project you select (Cloud Run / Build / Artifact Registry require it).

### 3. Enable APIs and Artifact Registry

Set your project and region, then run the bootstrap script (creates a Docker repo if missing):

```bash
export GCP_PROJECT_ID=your-project-id
export GCP_REGION=us-east1          # optional; Artifact Registry location
export AR_REPO=ankideck                # optional
./scripts/gcp-bootstrap.sh
```

### 4. IAM for Cloud Build (push + deploy)

```bash
export GCP_PROJECT_ID=your-project-id
./scripts/gcp-iam-cloud-build.sh
```

### 4b. Cloud Run runtime and Secret Manager

If you attach secrets to the service with **`gcloud run services update ... --set-secrets=...`**, the **runtime** service account must be able to read those secrets. By default Cloud Run uses the project’s default Compute Engine service account: **`{PROJECT_NUMBER}-compute@developer.gserviceaccount.com`**. Without **`roles/secretmanager.secretAccessor`**, new revisions fail with **permission denied on secret**.

**Project-wide (simplest):** run once per project (allows that service account to read any secret in the project):

```bash
export GCP_PROJECT_ID=your-project-id
./scripts/gcp-iam-cloud-run-runtime-secrets.sh
```

**Manual equivalent** (default runtime service account):

```bash
PROJECT_NUMBER="$(gcloud projects describe "$GCP_PROJECT_ID" --format='value(projectNumber)')"
RUNTIME_SA="${PROJECT_NUMBER}-compute@developer.gserviceaccount.com"
gcloud projects add-iam-policy-binding "$GCP_PROJECT_ID" \
  --member="serviceAccount:${RUNTIME_SA}" \
  --role="roles/secretmanager.secretAccessor"
```

If the service uses a **custom** runtime service account, set `RUNTIME_SA` to the email shown under Cloud Run → your service → **Security**.

**Tighter scope:** grant **`secretAccessor`** per secret with `gcloud secrets add-iam-policy-binding SECRET_ID ...` instead of project-wide. [scripts/gcp-secret-gemini.sh](scripts/gcp-secret-gemini.sh) already does this for **`GEMINI_API_KEY`**; if you also run the project-wide script above, the extra binding is redundant but harmless.

### 5. Connect GitHub and create a trigger

Run [scripts/gcp-iam-cloud-build.sh](scripts/gcp-iam-cloud-build.sh) first (it grants the Cloud Build **P4SA** `roles/secretmanager.admin` for 2nd-gen OAuth flows, plus the default Cloud Build SA roles for push/deploy).

**Recommended (global, 1st gen):** ensure the repo is linked under **Cloud Build → Repositories → 1st gen** (connect GitHub if needed), then:

```bash
export GCP_PROJECT_ID=your-project-id
export GCP_REGION=us-east1          # must match Artifact Registry in §3
export AR_REPO=ankideck             # optional
./scripts/gcp-trigger-github-1st-gen-deploy.sh
```

This creates trigger **`ankiugen-JoeyScottSchronce-ankideck-api`** in **`global`** using [cloudbuild.deploy.yaml](cloudbuild.deploy.yaml). Override **`TRIGGER_NAME`**, **`GITHUB_REPO_OWNER`**, **`GITHUB_REPO_NAME`**, **`DEPLOY_REGIONS`**, or **`SERVICE_NAME`** if needed. If that trigger name already exists, the script exits without changes.

To replace an older trigger, delete it first (Console or `gcloud builds triggers delete TRIGGER_ID --region=global` after `gcloud builds triggers list --region=global`). Renaming via CLI is unreliable.

If you **add a deploy region** after the trigger already exists, update the trigger’s **`_DEPLOY_REGIONS`** substitution in **Cloud Build → Triggers** (or delete and recreate the trigger); the script does not patch existing triggers. Then run a build (e.g. push to `main`). Sync plain env vars with [scripts/gcp-run-sync-env-from-region.sh](scripts/gcp-run-sync-env-from-region.sh) and re-run [scripts/gcp-run-attach-stripe.sh](scripts/gcp-run-attach-stripe.sh) if needed. If you use [scripts/gcp-external-https-lb-cloud-run.sh](scripts/gcp-external-https-lb-cloud-run.sh), run it again after the new regional service exists so the load balancer gets a Tokyo NEG.

**Console alternative:** [Cloud Build → Triggers](https://console.cloud.google.com/cloud-build/triggers) → **Create trigger** → GitHub (1st gen) → repository [JoeyScottSchronce/ankideck-backend](https://github.com/JoeyScottSchronce/ankideck-backend), branch `^main$`, config **`/cloudbuild.deploy.yaml`**, region **global**. Set substitutions:

| Substitution | Value |
|--------------|--------|
| `_IMAGE` | `$GCP_REGION-docker.pkg.dev/$GCP_PROJECT_ID/$AR_REPO/ankideck-api` (no tag) |
| `_DEPLOY_REGIONS` | e.g. `us-east1,us-west2,europe-west1,asia-northeast1` |
| `_SERVICE_NAME` | `ankideck-api` |
| `_UPDATE_SECRETS` | Optional; default in **`cloudbuild.deploy.yaml`** is `GEMINI_API_KEY=GEMINI_API_KEY:latest` |

Leave the trigger’s **service account** unset in the console so Cloud Build uses the project default (recommended). Do **not** paste **`PROJECT_NUMBER@cloudbuild.gserviceaccount.com`** if manual runs fail with `INVALID_ARGUMENT` for `build.service_account`; the IAM bindings in §4 still apply to that default identity. Avoid the Compute Engine default SA on the trigger unless you must (it is often over-privileged).

**Optional 2nd gen (regional):** [scripts/gcp-github-connection.sh](scripts/gcp-github-connection.sh) then [scripts/gcp-finish-cloud-build-trigger.sh](scripts/gcp-finish-cloud-build-trigger.sh) — creates a **regional** connection and a trigger for [cloudbuild.yaml](cloudbuild.yaml) (build/push only) unless you edit the script.

- **`cloudbuild.yaml`** — build and push the image only.
- **`cloudbuild.deploy.yaml`** — build, push, and **`gcloud run deploy`** to every region in **`_DEPLOY_REGIONS`**, with **`--update-secrets`** from **`_UPDATE_SECRETS`** (default **`GEMINI_API_KEY=GEMINI_API_KEY:latest`**) so new regions receive the Gemini secret and the process does not exit before listening on **`PORT`**. Add more mappings to **`_UPDATE_SECRETS`** (comma-separated) if other secrets are required at startup.

### 6. Gemini API key (Secret Manager)

Do **not** put `GEMINI_API_KEY` in the image. Store it in Secret Manager and wire it to Cloud Run:

```bash
export GCP_PROJECT_ID=your-project-id
export GEMINI_API_KEY=your_key
./scripts/gcp-secret-gemini.sh
```

Then attach the secret to **each** regional service (same **`_DEPLOY_REGIONS`** as deploy):

```bash
for r in us-east1 us-west2 europe-west1 asia-northeast1; do
  gcloud run services update ankideck-api \
    --region="$r" \
    --set-secrets=GEMINI_API_KEY=GEMINI_API_KEY:latest
done
```

Set **CORS** (plain env var, not a secret) the same way:

```bash
for r in us-east1 us-west2 europe-west1 asia-northeast1; do
  gcloud run services update ankideck-api \
    --region="$r" \
    --set-env-vars=CORS_ALLOWED_ORIGINS=https://your-frontend.example
done
```

For **`https://ankiugen.com`** as the SPA (and optional `www`), set for example:

```bash
for r in us-east1 us-west2 europe-west1 asia-northeast1; do
  gcloud run services update ankideck-api \
    --region="$r" \
    --set-env-vars=CORS_ALLOWED_ORIGINS=https://ankiugen.com,https://www.ankiugen.com
done
```

### Single hostname (`api.ankiugen.com`) with multi-region Cloud Run

The SPA uses one API base (e.g. **`https://api.ankiugen.com`**) for generate, export, and auth. Deploying to multiple regions yields a different **`*.run.app`** URL per region unless you add **one** front door.

**Recommended:** an **global external Application Load Balancer (HTTPS)** with **serverless Network Endpoint Groups** (one NEG per region) attached to the same Cloud Run service name in each region. Order of operations: deploy all regional services → create NEGs → backend service → URL map → HTTPS proxy → forwarding rule → Google-managed certificate for **`api.ankiugen.com`**.

**Automated (after multi-region deploy):** run [scripts/gcp-external-https-lb-cloud-run.sh](scripts/gcp-external-https-lb-cloud-run.sh):

```bash
export GCP_PROJECT_ID=your-project-id
export API_DOMAIN=api.ankiugen.com
# optional: CLOUD_RUN_SERVICE, LB_RESOURCE_PREFIX, DEPLOY_REGIONS (comma-separated)
./scripts/gcp-external-https-lb-cloud-run.sh
```

The script prints the **global IPv4** to use for an **A** record. Then check certificate status with the `gcloud` line it prints. Full background and multi-NEG behavior: [Set up global load balancing for Cloud Run](https://cloud.google.com/load-balancing/docs/https/setting-up-https-serverless).

Point DNS for **`api.ankiugen.com`** at the load balancer. If **Cloudflare** proxies that hostname, ensure certificate provisioning still succeeds (often **DNS-only** for the `api` record during setup, or follow Google’s hostname mapping for managed certs).

**Cloud Run “Manage custom domains”** maps a hostname to **one** regional service; it is **not** a substitute for multi-region routing. Alternatives to the Google LB include **Cloudflare Load Balancing** to multiple regional origins.

### Custom domain for the API (single-region or post-LB)

If you use **only one** Cloud Run region, you can map **`api.ankiugen.com`** in **Cloud Run** → service → **Manage custom domains**, then add the **CNAME** / **TXT** records in **Cloudflare** as Google shows.

With **multi-region + load balancer**, attach **`api.ankiugen.com`** to the **HTTPS load balancer** instead (see above). Point the SPA’s **`VITE_ANKIDECK_*`** variables at **`https://api.ankiugen.com`** (no trailing slash).

Cloud Run sets **`PORT`** automatically; the server already honors it.

### 7. Smoke test

After deploy, open the Cloud Run URL or run:

```bash
./scripts/smoke-cloud-run.sh https://YOUR-SERVICE-URL
```

Then exercise `POST /v1/generate` and `POST /v1/export` per [docs/api.md](docs/api.md).

### Optional: local Docker

To build/run the image on Ubuntu without Cloud Build, install [Docker Engine](https://docs.docker.com/engine/install/ubuntu/) and use the **Docker** section above.

### Optional: export-only second service

The default image serves **both** generate and export. To run export on another host, use `go run ./cmd/export` or a dedicated image; point the SPA’s export base URL accordingly