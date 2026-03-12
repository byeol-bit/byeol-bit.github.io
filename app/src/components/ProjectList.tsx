import { useState } from 'react'
import { useImageGallery } from './ImageGalleryProvider'
import type { Project } from '../data/projects'

type ProjectListProps = {
  projects: Project[]
  enableGallery?: boolean
}

export const ProjectList = ({ projects, enableGallery = true }: ProjectListProps) => {
  const { open } = useImageGallery()

  const [activeRetrospective, setActiveRetrospective] = useState<{
    title: string
    lines: string[]
  } | null>(null)

  return (
    <>
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
                  if (link.type === 'retrospect' && project.retrospectiveLines) {
                    return (
                      <button
                        key={link.label}
                        type="button"
                        className="project-link-retro"
                        onClick={() =>
                          setActiveRetrospective({
                            title: project.title,
                            lines: project.retrospectiveLines ?? [],
                          })
                        }
                      >
                        {link.label}
                      </button>
                    )
                  }

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

      {activeRetrospective && (
        <div
          className="retrospective-modal-backdrop"
          onClick={() => setActiveRetrospective(null)}
        >
          <div
            className="retrospective-modal"
            onClick={event => event.stopPropagation()}
          >
            <h3 className="retrospective-modal-title">
              {activeRetrospective.title} 회고
            </h3>
            <div className="retrospective-modal-content">
              {activeRetrospective.lines.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
            <button
              type="button"
              className="retrospective-modal-close"
              onClick={() => setActiveRetrospective(null)}
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </>
  )
}

