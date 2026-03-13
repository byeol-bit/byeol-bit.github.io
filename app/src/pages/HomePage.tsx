import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  dotnetProjects,
  electronProjects,
  nextjsProjects,
  reactProjects,
} from '../data/projects'

const HomePage = () => {
  const navigate = useNavigate()

  const openKakao = useCallback(() => {
    window.open('https://open.kakao.com/o/sshmMrbi', '_blank')
  }, [])

  const openGithub = useCallback(() => {
    window.open('https://github.com/byeol-bit', '_blank')
  }, [])

  return (
    <main className="container">
      <div className="top-nav fade-in-up">
        <div />
        <div className="top-nav-right">
          <button type="button">
            <img src="/fa-moon.png" alt="다크모드" />
          </button>
          <a
            href="https://github.com/byeol-bit/byeol-bit.github.io.git"
            target="_blank"
            rel="noreferrer"
          >
            사용 가이드
          </a>
        </div>
      </div>

      <header className="header-area fade-in-up">
        <a href="/">
          <h1 className="portfolio-title">포트폴리오</h1>
        </a>
        <p className="portfolio-subtitle">
          정체되지 않고 나아가고싶은 개발자의 포트폴리오입니다.
        </p>
      </header>

      <div className="main-area fade-in-up">
        <div className="main-area-left profile-section">
          <div className="main-area-left-image">
            <img
              className="profile-image"
              src="/one-hundred-percent-attached-charactor.png"
              alt="내 캐릭터"
            />
          </div>
          <h2 className="profile-name">박상선</h2>
          <p className="profile-age">1994.05.02</p>

          <div className="action-buttons">
            <button
              type="button"
              style={{ backgroundColor: '#fff170' }}
              onClick={openKakao}
            >
              <img
                src="/fa-openchat.png"
                alt="오픈채팅"
                width={20}
                height={20}
              />
              1:1채팅
            </button>
            <button type="button" onClick={openGithub}>
              <img
                src="/fa-github.png"
                alt="깃허브"
                width={20}
                height={20}
              />
              byeol-bit
            </button>
          </div>

          <div className="profile-divider" />

          <div className="profile-education">
            <h3 className="profile-section-title">학력</h3>
            <div className="education-item">
              <p className="education-school">한국교원대부설고등학교</p>
            </div>
            <div className="education-item">
              <p className="education-school">
                금오공과대학교
                <span style={{ fontSize: 11, color: '#4e5968' }}>
                  (컴퓨터소프트웨어공학과)
                </span>
              </p>
            </div>
          </div>

          <div className="profile-divider" />

          <div className="profile-about">
            <h3 className="profile-section-title">소개</h3>
            <div className="about-text">
              <p className="about-highlight">
                <strong>사소한 것을 그냥 지나치지 않습니다.</strong>
              </p>
              <ul className="about-list">
                <li>
                  <strong>
                    &apos;우리 이거 적용해 볼까요?&apos;, &apos;이렇게 하면 유저 경험이
                    더 좋아지지 않을까요?&apos;
                  </strong>{' '}
                  와 같은 말을 나누며{' '}
                  <strong>제품을 성장시키는 것이 즐겁습니다.</strong>
                </li>
                <li>
                  더 나은 유저 경험을 위해{' '}
                  <strong>필요하다면 기획, 디자인에도 적극적으로 의견을 제안</strong>
                  합니다.
                </li>
              </ul>
            </div>
          </div>

          <div className="profile-divider" />

          <div className="profile-certificates">
            <h3 className="profile-section-title">자격증</h3>
            <div className="certificate-item">
              <img
                src="/fa-hrdk.png"
                alt="정보처리기사"
                className="certificate-icon"
              />
              <span className="certificate-name">정보처리기사</span>
            </div>
            <div className="certificate-item">
              <img
                src="/fa-sqld.png"
                alt="SQLD"
                className="certificate-icon"
              />
              <span className="certificate-name">SQLD</span>
            </div>
          </div>
        </div>

        <div className="main-area-right">
          <div className="main-area-right-top">
            <h3 className="career-title">경력</h3>
            <div className="career-chart-container">
              <div className="career-y-axis">
                <div className="y-axis-label">5년</div>
                <div className="y-axis-label">4년</div>
                <div className="y-axis-label">3년</div>
                <div className="y-axis-label">2년</div>
                <div className="y-axis-label">1년</div>
                <div className="y-axis-label">0년</div>
              </div>
              <div className="career-chart">
                <div className="career-grid-lines">
                  <div className="grid-line" />
                  <div className="grid-line" />
                  <div className="grid-line" />
                  <div className="grid-line" />
                  <div className="grid-line" />
                  <div className="grid-line" />
                </div>
                <div className="career-bar-item">
                  <div className="career-bar-wrapper">
                    <div
                      className="career-bar"
                      style={{ height: '33.3%' }}
                      data-value="1.5"
                    >
                      <span className="career-value">1.5년</span>
                    </div>
                  </div>
                  <div className="career-label">(주)보이</div>
                </div>
                <div className="career-bar-item">
                  <div className="career-bar-wrapper">
                    <div
                      className="career-bar"
                      style={{ height: '100%' }}
                      data-value="4.5"
                    >
                      <span className="career-value">4.5년</span>
                    </div>
                  </div>
                  <div className="career-label">(주)이투엠쓰리</div>
                </div>
              </div>
            </div>
          </div>

          <div className="main-area-right-bottom">
            <div className="stats-grid">
              <div className="stats-title">
                <img src="/fa-project.png" alt="프로젝트 아이콘" />
                프로젝트
              </div>

              <div
                className="stats-grid-dotnet stats-item"
                onClick={() => navigate('/dotnet')}
              >
                <div className="stats-header">
                  C#
                  <i />
                </div>
                <div className="stats-content">{dotnetProjects.length}</div>
              </div>

              <div
                className="stats-grid-electron stats-item"
                onClick={() => navigate('/electron')}
              >
                <div className="stats-header">
                  Electron
                  <i />
                </div>
                <div className="stats-content">{electronProjects.length}</div>
              </div>

              <div
                className="stats-grid-react stats-item"
                onClick={() => navigate('/react-projects')}
              >
                <div className="stats-header">
                  React
                  <i />
                </div>
                <div className="stats-content">{reactProjects.length}</div>
              </div>

              <div
                className="stats-grid-nextjs stats-item"
                onClick={() => navigate('/nextjs')}
              >
                <div className="stats-header">
                  NextJS
                  <i />
                </div>
                <div className="stats-content">{nextjsProjects.length}</div>
              </div>

              <div className="stats-title">
                <img src="/fa-education.png" alt="교육" />
                교육
              </div>

              <div className="stats-grid-commits stats-item">
                <div className="stats-header">
                  프로래머스 - 데브코스 풀스택 과정 수료중
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <p>@2026 03.13에 마지막으로 업데이트되었습니다.</p>
        <a href="https://github.com/byeol-bit" target="_blank" rel="noreferrer">
          <i>byeol-bit</i>
        </a>
      </footer>
    </main>
  )
}

export default HomePage

