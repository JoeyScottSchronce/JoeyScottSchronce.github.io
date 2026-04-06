import { home } from '../data/home'

export function HomeSection() {
  return (
    <section id="Home" className="py-12">
      <p className="m-0 hidden w-full max-w-[960px] px-4 pb-2 pt-3 text-center text-2xl font-semibold leading-tight sm:mx-auto sm:block sm:bg-gradient-to-r sm:from-secondary sm:to-primary sm:bg-clip-text sm:pb-4 sm:pt-2 sm:text-3xl sm:text-transparent md:text-4xl lg:text-[2.2rem]">
        {home.designingLine}
      </p>

      <div className="mx-auto flex w-full max-w-[960px] flex-col px-4 py-2">
        <div className="mt-0 grid w-full grid-cols-[auto_minmax(0,1fr)] items-stretch gap-3 sm:mt-8 sm:gap-6 md:gap-8">
          <img
            className="aspect-square w-[min(30vw,280px)] min-w-[4.5rem] max-w-[280px] rounded-[15px] object-cover"
            src={home.profileSrc}
            alt={home.profileAlt}
          />
          <div className="flex h-full min-h-0 min-w-0 flex-col gap-2 py-0.5 sm:gap-4">
            <div className="flex min-h-0 flex-none flex-col items-center px-1 sm:items-start">
              <h1 className="m-0 w-full bg-gradient-to-r from-secondary to-primary bg-clip-text text-center text-2xl font-semibold leading-tight text-transparent sm:bg-none sm:text-left sm:text-3xl sm:text-white md:text-4xl xl:text-[2.5rem]">
                {home.name}
              </h1>
            </div>
            <div className="flex min-h-0 flex-1 flex-col items-center justify-start px-1 pt-1 sm:hidden">
              <p className="w-full text-center text-sm font-semibold leading-snug text-white">
                {home.tagline}
              </p>
            </div>
            <div className="hidden min-h-0 w-full sm:block">
              <p className="text-left text-sm leading-relaxed text-foreground md:text-base lg:text-lg">
                {home.bio}
              </p>
            </div>
          </div>
        </div>
        <p className="mt-12 w-full max-w-full text-center text-sm leading-relaxed text-foreground md:mt-16 md:text-base sm:hidden">
          {home.bio}
        </p>
      </div>
    </section>
  )
}
