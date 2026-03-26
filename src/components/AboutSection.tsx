import { about } from '../data/about'

export function AboutSection() {
  return (
    <section id="About">
      <div>
        <div className="about-container">
          <h2>{about.name}</h2>
          <div className="about-main-sub">
            <img className="profile" src={about.profileSrc} alt={about.profileAlt} />
            <h6 className="main-p">{about.bio}</h6>
          </div>
        </div>
      </div>
    </section>
  )
}
