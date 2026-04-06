import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'

export function ProjectsSection() {
  return (
    <section id="Projects" className="py-12">
      <div className="mt-4 flex w-full flex-col items-center justify-center text-foreground">
        <h1 className="mb-2 w-full text-center text-3xl font-bold underline md:text-4xl lg:text-5xl">
          Projects
        </h1>

        <div className="mx-0 flex max-w-screen flex-col justify-evenly gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
