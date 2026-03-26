import { navItems } from '../data/nav'

export function Nav() {
  return (
    <nav className="nav-container">
      <div className="nav-items-container">
        {navItems.map(({ href, label }) => (
          <a key={href} className="nav-items" href={href}>
            {label}
          </a>
        ))}
      </div>
    </nav>
  )
}
