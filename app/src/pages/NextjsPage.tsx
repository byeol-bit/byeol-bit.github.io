import { nextjsProjects } from '../data/projects'
import { ProjectPageLayout } from '../components/ProjectPageLayout'
import { ProjectList } from '../components/ProjectList'

const NextjsPage = () => {
  return (
    <ProjectPageLayout
      title="Next.js 프로젝트"
      subtitle="Next.js로 개발한 풀스택 웹 애플리케이션"
    >
      <ProjectList projects={nextjsProjects} />
    </ProjectPageLayout>
  )
}

export default NextjsPage

