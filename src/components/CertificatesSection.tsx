import { certificates } from '../data/certificates'
import { CertificateCard } from './CertificateCard'

export function CertificatesSection() {
  return (
    <section id="Certificates">
      <div className="certificates">
        <h1>Certificates</h1>
        <div className="certificates-sub-container">
          {certificates.map((c) => (
            <CertificateCard key={c.href} href={c.href} imageSrc={c.imageSrc} imageAlt={c.imageAlt} />
          ))}
        </div>
      </div>
    </section>
  )
}
