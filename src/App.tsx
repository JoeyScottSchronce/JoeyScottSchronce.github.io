import { BackgroundBlobs } from './components/BackgroundBlobs'
import { HomeSection } from './components/HomeSection'
import { ProjectsSection } from './components/ProjectsSection'
import { FooterSection } from './components/FooterSection'
import { SocialLinks } from './components/SocialLinks'

export default function App() {
  return (
    <div className="min-h-screen w-full">
      <BackgroundBlobs />
      <header className="sticky top-0 z-20 w-full border-b border-primary/25 bg-background/95 backdrop-blur-sm">
        <nav aria-label="Social links" className="mx-auto flex w-full max-w-2xl justify-center px-3 py-2 md:px-4 md:py-3">
          <SocialLinks />
        </nav>
      </header>
      <main className="w-full">
        <HomeSection />
        <ProjectsSection />
        <FooterSection />
      </main>
    </div>
  )
}
