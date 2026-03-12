import { dotnetProjects } from '../data/projects'
import { ProjectPageLayout } from '../components/ProjectPageLayout'
import { ProjectList } from '../components/ProjectList'

const DotnetPage = () => {
  return (
    <ProjectPageLayout
      title="C# 프로젝트"
      subtitle=".NET 기반으로 개발한 프로젝트들"
    >
      <ProjectList projects={dotnetProjects} />
    </ProjectPageLayout>
  )
}

export default DotnetPage

