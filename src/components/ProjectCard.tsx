import type { Project } from '../data/projects'

export function ProjectCard({ title, imageSrc, imageAlt, description, actions }: Project) {
  return (
    <div>
      <div className="card-container">
        <h3 className="card-title">{title}</h3>
        <div className="card-content-container">
          <div className="card-image">
            <img src={imageSrc} alt={imageAlt} />
          </div>
          <div>
            <div className="card-content">
              <h6 className="card-description">{description}</h6>
            </div>
            <div className="card-button-container">
              {actions.map((action) => (
                <a key={action.href} className="card-button" href={action.href}>
                  {action.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
