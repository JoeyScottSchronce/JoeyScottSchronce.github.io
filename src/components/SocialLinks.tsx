import { socialLinks } from '../data/socialLinks'

export function SocialLinks() {
  return (
    <div className="flex w-full flex-row flex-wrap items-center justify-evenly gap-2 md:gap-3">
      {socialLinks.map(({ href, iconSrc, alt, ariaLabel }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="m-0.5 flex items-center justify-center rounded-[10px] bg-foreground p-0.5 transition hover:scale-110 md:m-2 md:p-2"
          aria-label={ariaLabel}
        >
          <img src={iconSrc} className="size-8 rounded-[10px] md:size-10" alt={alt} />
        </a>
      ))}
    </div>
  )
}
