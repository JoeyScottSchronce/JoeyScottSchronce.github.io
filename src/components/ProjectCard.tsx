import type { Project } from '../data/projects'
import { ProjectImageCarousel } from './ProjectImageCarousel'

export function ProjectCard({ title, images, description, actions }: Project) {
  return (
    <div className="w-full">
      <div className="mx-4 my-4 flex max-w-[95%] flex-col items-center justify-center gap-4 rounded-[15px] p-1">
        <h3 className="m-0 text-center text-xl text-foreground md:text-2xl lg:text-[1.7rem]">
          {title}
        </h3>
        <div className="flex w-full flex-col items-center gap-4 p-4 lg:flex-row lg:items-start lg:justify-between lg:gap-6">
          <ProjectImageCarousel images={images} />
          <div className="flex w-full min-w-0 flex-col items-center justify-start gap-4 text-center lg:items-end lg:text-left">
            <p className="m-2 w-full max-w-full text-base leading-relaxed text-foreground md:text-lg lg:max-w-[95%] lg:self-end">
              {description}
            </p>
            <div className="flex w-full flex-row flex-wrap justify-center gap-3 lg:mt-2">
              {actions.map((action) => (
                <a
                  key={action.href}
                  href={action.href}
                  className="my-2 inline-flex cursor-pointer items-center justify-center rounded-[15px] border-2 border-primary bg-background px-4 py-1 text-center text-sm text-primary no-underline transition hover:scale-[1.06] md:my-4 md:text-base lg:text-lg"
                >
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
