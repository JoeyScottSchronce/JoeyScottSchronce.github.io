import { home } from '../data/home'

/** First line when forcing a two-line layout; must match start of `home.designingLine` / `home.tagline`. */
const DESIGNING_LINE_1 = 'Designing, creating, and delivering' as const

export function HomeSection() {
  const designingLine2 = home.designingLine.startsWith(`${DESIGNING_LINE_1} `)
    ? home.designingLine.slice(DESIGNING_LINE_1.length + 1)
    : ''

  const designingLineSplit =
    designingLine2 === '' ? (
      home.designingLine
    ) : (
      <>
        <span className="block">{DESIGNING_LINE_1}</span>
        <span className="block">{designingLine2}</span>
      </>
    )

  return (
    <section id="Home" className="py-12">
      <p className="m-0 hidden w-full max-w-[960px] px-4 pb-2 pt-3 text-center text-2xl font-semibold leading-tight sm:mx-auto sm:block sm:bg-gradient-to-r sm:from-secondary sm:to-primary sm:bg-clip-text sm:pb-4 sm:pt-2 sm:text-3xl sm:text-transparent md:text-4xl lg:text-[2.2rem]">
        {designingLineSplit}
      </p>

      <div className="mx-auto flex w-full max-w-[960px] flex-col px-4 py-2">
        <div className="mt-0 w-full max-sm:grid max-sm:grid-cols-[auto_minmax(0,1fr)] max-sm:items-start max-sm:gap-3 sm:mt-8 sm:flow-root">
          <img
            className="aspect-square w-[min(30vw,280px)] min-w-[4.5rem] max-w-[280px] shrink-0 rounded-[15px] object-cover max-sm:col-start-1 max-sm:row-start-1 sm:float-left sm:mb-4 sm:mr-6 md:mr-8"
            src={home.profileSrc}
            alt={home.profileAlt}
          />
          <div className="flex min-h-0 min-w-0 flex-col gap-2 py-0.5 max-sm:col-start-2 max-sm:row-start-1 sm:contents">
            <h1 className="m-0 w-full bg-gradient-to-r from-secondary to-primary bg-clip-text text-center text-2xl font-semibold leading-tight text-transparent sm:bg-none sm:text-left sm:text-3xl sm:text-white md:text-4xl xl:text-[2.5rem]">
              {home.name}
            </h1>
            <div className="flex min-h-0 flex-1 flex-col items-center justify-start px-1 pt-1 sm:hidden">
              <p className="w-full text-center text-sm font-semibold leading-snug text-white">
                {designingLineSplit}
              </p>
            </div>
          </div>
          <p className="m-0 max-sm:col-span-2 max-sm:mt-12 max-sm:row-start-2 text-center font-sans text-base leading-relaxed text-foreground sm:mt-0 sm:text-left md:text-lg lg:text-xl">
            {home.bio}
          </p>
        </div>
      </div>
    </section>
  )
}
