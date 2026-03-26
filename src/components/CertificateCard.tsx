type CertificateCardProps = {
  href: string
  imageSrc: string
  imageAlt: string
}

export function CertificateCard({ href, imageSrc, imageAlt }: CertificateCardProps) {
  return (
    <div className="certificate">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <img src={imageSrc} alt={imageAlt} />
      </a>
    </div>
  )
}
