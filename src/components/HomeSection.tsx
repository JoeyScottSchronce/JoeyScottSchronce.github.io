import { SocialLinks } from './SocialLinks'

export function HomeSection() {
  return (
    <section id="Home">
      <div className="container">
        <div className="sub-container">
          <div className="first-sub">
            <h1 className="intro1">Welcome to my Portfolio!</h1>
          </div>
          <div className="second-sub">
            <div className="intro2">
              As a Software Engineer, my expertise is in building reliable and efficient backend systems, APIs,
              and innovative software solutions.
            </div>
          </div>
        </div>

        <div>
          <SocialLinks />
        </div>
      </div>
    </section>
  )
}
