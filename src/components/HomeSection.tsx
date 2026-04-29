import { home } from '../data/home'

/** First line when forcing a two-line layout; must match start of `home.designingLine` / `home.tagline`. */
const DESIGNING_LINE_1 = 'Designing, creating, & delivering' as const

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
      <p className="m-0 mx-auto w-full max-w-[960px] bg-gradient-to-r from-secondary to-primary bg-clip-text px-4 pb-4 pt-2 text-center text-xl font-semibold leading-tight text-transparent sm:text-3xl md:text-4xl lg:text-[2.2rem]">
        {designingLineSplit}
      </p>

      <div className="mx-auto flex w-full max-w-[960px] flex-col px-4 py-2">
        <div className="mt-0 flow-root w-full sm:mt-8">
          <img
            className="float-left mb-3 mr-3 aspect-square w-[min(33vw,280px)] min-w-[4.5rem] max-w-[280px] shrink-0 rounded-[15px] object-cover sm:mb-4 sm:mr-6 md:mr-8"
            src={home.profileSrc}
            alt={home.profileAlt}
          />
          <div className="flex min-h-0 min-w-0 flex-col gap-2 py-0.5">
            <h1 className="m-0 w-full text-center text-xl font-semibold leading-tight text-white sm:text-3xl md:text-4xl xl:text-[2.5rem]">
              {home.name}
            </h1>
          </div>
          <p className="m-0 text-center font-sans text-base leading-relaxed text-foreground sm:mt-0 md:text-lg lg:text-xl">
            {home.bio}
          </p>
        </div>
      </div>
    </section>
  )
}
