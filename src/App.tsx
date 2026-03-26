import { BackgroundBlobs } from './components/BackgroundBlobs'
import { Nav } from './components/Nav'
import { HomeSection } from './components/HomeSection'
import { AboutSection } from './components/AboutSection'
import { CertificatesSection } from './components/CertificatesSection'
import { ProjectsSection } from './components/ProjectsSection'
import { FooterSection } from './components/FooterSection'

export default function App() {
  return (
    <>
      <BackgroundBlobs />
      <Nav />
      <main>
        <HomeSection />
        <AboutSection />
        <CertificatesSection />
        <ProjectsSection />
        <FooterSection />
      </main>
    </>
  )
}
