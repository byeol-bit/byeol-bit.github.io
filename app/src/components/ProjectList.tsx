import { useImageGallery } from './ImageGalleryProvider'
import type { Project } from '../data/projects'

type ProjectListProps = {
  projects: Project[]
  enableGallery?: boolean
}

export const ProjectList = ({ projects, enableGallery = true }: ProjectListProps) => {
  const { open } = useImageGallery()

  return (
    <div className="projects-container fade-in-up">
      {projects.map(project => {
        const imageSources = project.images.map(img => img.src)

        return (
          <div key={project.id} className="project-card">
            <div className="project-header">
              <h2 className="project-title">{project.title}</h2>
              {project.badges.map(badge => (
                <span key={badge} className="project-badge">
                  {badge}
                </span>
              ))}
            </div>

            <p className="project-description">
              {project.descriptionLines.map((line, index) => (
                <span key={index}>
                  {line}
                  {index < project.descriptionLines.length - 1 && <br />}
                </span>
              ))}
            </p>

            <div className="project-images">
              {project.images.map((img, index) => (
                <img
                  key={img.src}
                  className="project-image"
                  src={img.src}
                  alt={img.alt}
                  onClick={
                    enableGallery && imageSources.length > 0
                      ? () => open(imageSources, index)
                      : undefined
                  }
                />
              ))}
            </div>

            <div className="project-tech">
              {project.techTags.map(tag => (
                <span key={tag} className="tech-tag">
                  {tag}
                </span>
              ))}
            </div>

            <div className="project-links">
              {project.links.map(link => {
                const className =
                  link.type === 'primary' ? 'project-link-on' : 'project-link'

                if (link.href) {
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noreferrer' : undefined}
                      className={className}
                    >
                      {link.label}
                    </a>
                  )
                }

                return (
                  <a key={link.label} href="#" className={className}>
                    {link.label}
                  </a>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

