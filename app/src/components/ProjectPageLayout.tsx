import type { ReactNode } from 'react'

type ProjectPageLayoutProps = {
  title: string
  subtitle: string
  children: ReactNode
}

export const ProjectPageLayout = ({
  title,
  subtitle,
  children,
}: ProjectPageLayoutProps) => {
  return (
    <main className="container">
      <div className="top-nav fade-in-up">
        <div>
          <a href="/" className="back-link">
            ← 뒤로가기
          </a>
        </div>
        <div className="top-nav-right">
          <button type="button">
            <img src="/public/fa-moon.png" alt="다크모드" />
          </button>
          <a href="#">사용 가이드</a>
        </div>
      </div>

      <header className="header-area fade-in-up">
        <h1 className="portfolio-title">{title}</h1>
        <p className="portfolio-subtitle">{subtitle}</p>
      </header>

      {children}

      <footer>
        <p>@2026 01.14 Portfolio. All rights reserved.</p>
        <p>깃허브 링크</p>
      </footer>
    </main>
  )
}

