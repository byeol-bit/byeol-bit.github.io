import { reactProjects } from '../data/projects'
import { ProjectPageLayout } from '../components/ProjectPageLayout'
import { ProjectList } from '../components/ProjectList'

const ReactProjectsPage = () => {
  return (
    <ProjectPageLayout
      title="React 프로젝트"
      subtitle="React로 개발한 프론트엔드 프로젝트들"
    >
      <ProjectList projects={reactProjects} />
    </ProjectPageLayout>
  )
}

export default ReactProjectsPage

