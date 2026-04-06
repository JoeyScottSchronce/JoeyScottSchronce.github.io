# Ankiugen

**Vite + React + TypeScript** SPA that generates text flashcards via a **generate** API (Gemini) and downloads **`.apkg`** via **export** (same backend binary; `.apkg` via [text-only-apkgwriter](https://github.com/JoeyScottSchronce/text-only-apkgwriter)).

**Backend (separate repo):** [JoeyScottSchronce/ankideck-backend](https://github.com/JoeyScottSchronce/ankideck-backend) — the default server exposes **`POST /v1/generate`** and **`POST /v1/export`** on one port (e.g. Docker / Cloud Run).

## Configuration

**Local secrets:** Prefer **HashiCorp Vault** — see [`docs/vault.md`](docs/vault.md) (`npm run dev:vault`, `npm run build:vault`, `./run.sh`). Import from existing `.env` files with **ankideck-ops** `vault/import_from_env_files.py`.

Build-time environment variables (Vite):

| Variable | Meaning |
|----------|---------|
| `VITE_ANKIDECK_GENERATE_URL` | Base URL of generate service (no trailing slash), e.g. `http://127.0.0.1:8080` or your Cloud Run URL |
| `VITE_ANKIDECK_EXPORT_URL` | Base URL for export (often same origin as generate), e.g. `http://127.0.0.1:8080` or a dedicated export service URL |
| `VITE_ANKIDECK_API_URL` | Base URL for auth and profile (`/v1/auth/*`, `/v1/me`). Often the **same** as generate when using one Cloud Run service (e.g. `/api/generate` in local dev). |
| `VITE_BASE_PATH` | Public path for assets (default `/`). Production on **https://ankiugen.com** uses **`/`**. Only set a non-root path if you self-host the app under a subpath. |
| `VITE_PUBLIC_SITE_URL` | Public site origin **without** trailing slash (e.g. `https://ankiugen.com`). Used for **canonical URL**, **Open Graph / Twitter** tags in `index.html`, and **robots.txt** / **sitemap.xml** (generated in **`prebuild`**). Defaults to **`https://ankiugen.com`** if unset. |

**Security:** Never put API keys, tokens, or other secrets in `VITE_*` — Vite inlines them into the published JavaScript. Keep provider keys on the backend. The app shows **generic** messages for most network and API failures; use **server logs** for detail, and the browser console in **development** only (`import.meta.env.DEV`) when debugging.

**Local development:** [`.env.development`](.env.development) uses Vite proxies (`/api/generate`, `/api/export`) so the browser stays same-origin. By default **both** proxies target **`http://127.0.0.1:8080`** (unified API). Set **`ANKIDECK_DEV_EXPORT_TARGET=http://127.0.0.1:8742`** only if you run export as `go run ./cmd/export` separately. Restart `npm run dev` after env changes.

**Use production API from local dev (no prod CORS change):** Copy [`.env.development.local.example`](.env.development.local.example) to **`.env.development.local`** (gitignored), set **`ANKIDECK_DEV_GENERATE_TARGET`** and **`ANKIDECK_DEV_EXPORT_TARGET`** to the same **HTTPS** Cloud Run base (**no** trailing slash). Leave **`VITE_*`** as `/api/...` from `.env.development` so requests go to `localhost:5173` and Vite forwards to prod. Restart **`npm run dev`**. In DevTools → Network, calls should hit `/api/...` on the dev server, not `*.run.app` directly from the browser.

**Production:** set `VITE_ANKIDECK_*`, `VITE_PUBLIC_SITE_URL` (optional; defaults to ankiugen.com), and `VITE_BASE_PATH` if needed in your build environment before `npm run build`. **`npm run prebuild`** runs automatically and writes **`public/robots.txt`** and **`public/sitemap.xml`** from `VITE_PUBLIC_SITE_URL`.

### Backend email (API server)

Set on the backend (e.g. Cloud Run), not in Vite. Omit SendGrid vars to disable transactional email.

| Variable | Meaning |
|----------|---------|
| `SENDGRID_API_KEY` | SendGrid API key |
| `SENDGRID_FROM_EMAIL` | Verified sender address in SendGrid |
| `ANKIDECK_APP_BASE_URL` | Public site URL **without** trailing slash (e.g. `https://ankiugen.com`); must match where users open password-reset and email-verification links |

### Cloudflare Workers & Pages (production)

Production site: **`https://ankiugen.com`**, deployed from this repo via **Cloudflare** (linked GitHub integration).

This app is **static assets only** (Vite build + [`wrangler.jsonc`](wrangler.jsonc)). **Worker runtime Variables** in the dashboard do not apply—Vite inlines config at **build time**. Set these under the project’s **Build** / **environment variables** for **Production** (exact label varies by dashboard version):

| Variable | Example |
|----------|---------|
| `VITE_ANKIDECK_GENERATE_URL` | `https://api.ankiugen.com` (or your `*.run.app` URL until the API custom domain exists) |
| `VITE_ANKIDECK_EXPORT_URL` | Same as generate if you use one Cloud Run service |
| `VITE_ANKIDECK_API_URL` | Same as generate for unified backend |
| `VITE_BASE_PATH` | `/` (root on the custom domain) |
| `VITE_PUBLIC_SITE_URL` | `https://ankiugen.com` (optional; same default if omitted) |

After changing variables, **redeploy** so the bundle picks them up.

**CLI (optional):** `npm run cf:version`; one-time auth with `npm run cf:login` (`wrangler login`). The build uses [`@cloudflare/vite-plugin`](https://developers.cloudflare.com/workers/vite-plugin/) and `npm run deploy` (`npm run build && wrangler deploy`).

**Backend CORS:** the browser sends **`Origin: https://ankiugen.com`** (and optionally **`https://www.ankiugen.com`**). Set **`CORS_ALLOWED_ORIGINS`** on Cloud Run accordingly (see [ankideck-backend README](https://github.com/JoeyScottSchronce/ankideck-backend/blob/main/README.md)). Recent backend images also include `ankiugen.com` in default allowed origins when the env var is unset.

**Android (Trusted Web Activity):** the repo includes a PWA manifest and a template `assetlinks.json` for [Bubblewrap](https://github.com/GoogleChromeLabs/bubblewrap). After the site is live on **ankiugen.com**, run `npm run twa:init` locally, update Digital Asset Links with your signing certificate SHA-256, redeploy, then `npm run twa:build`. See [`docs/android-twa.md`](docs/android-twa.md).

### Docker

From the repository root (see [`Dockerfile`](Dockerfile)):

```bash
docker build -t ankideck-web \
  --build-arg VITE_ANKIDECK_GENERATE_URL=https://your-api.example.com \
  --build-arg VITE_ANKIDECK_EXPORT_URL=https://your-api.example.com \
  --build-arg VITE_ANKIDECK_API_URL=https://your-api.example.com \
  --build-arg VITE_BASE_PATH=/ \
  .
docker run --rm -p 8080:80 ankideck-web
```

`VITE_BASE_PATH` defaults to `/` in the image (nginx serves the app at `/`). Pass a subpath only if you reverse-proxy this container under that path.

**API contract:** [ankideck-backend docs/api.md](https://github.com/JoeyScottSchronce/ankideck-backend/blob/main/docs/api.md).

## Quick start

Run the backend locally or point env vars at your deployed URLs (e.g. Cloud Run), then:

```bash
npm install
npm run dev
```

Open the URL Vite prints (e.g. `http://localhost:5173`).

**Production:** set `VITE_ANKIDECK_GENERATE_URL`, `VITE_ANKIDECK_EXPORT_URL`, and `VITE_ANKIDECK_API_URL` (or reuse the generate URL for the unified API) in the build environment, then:

```bash
npm run build
```

## Git

```bash
git remote add origin git@github.com:JoeyScottSchronce/ankideck.git
git push -u origin main
```

(Adjust remote URL if yours differs.)
.