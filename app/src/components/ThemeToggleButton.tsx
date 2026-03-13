import { useCallback, useEffect, useState } from 'react'

export const ThemeToggleButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.localStorage.getItem('theme') === 'dark'
  })

  useEffect(() => {
    if (typeof window === 'undefined') return

    if (isDarkMode) {
      document.documentElement.classList.add('theme-dark')
      window.localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('theme-dark')
      window.localStorage.setItem('theme', 'light')
    }
  }, [isDarkMode])

  const toggleTheme = useCallback(() => {
    setIsDarkMode(prev => !prev)
  }, [])

  return (
    <button type="button" onClick={toggleTheme}>
      <img src="/fa-moon.png" alt="다크모드" />
    </button>
  )
}

