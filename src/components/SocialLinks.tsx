import { socialLinks } from '../data/socialLinks'

export function SocialLinks() {
  return (
    <div className="social-media-links">
      {socialLinks.map(({ href, iconSrc, alt, ariaLabel }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          aria-label={ariaLabel}
        >
          <img src={iconSrc} className="social-icon" alt={alt} />
        </a>
      ))}
    </div>
  )
}
