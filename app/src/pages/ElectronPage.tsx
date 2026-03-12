import { electronProjects } from '../data/projects'
import { ProjectPageLayout } from '../components/ProjectPageLayout'
import { ProjectList } from '../components/ProjectList'

const ElectronPage = () => {
  return (
    <ProjectPageLayout
      title="Electron 프로젝트"
      subtitle="크로스 플랫폼 데스크톱 애플리케이션"
    >
      <ProjectList projects={electronProjects} />
    </ProjectPageLayout>
  )
}

export default ElectronPage

