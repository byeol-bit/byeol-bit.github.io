import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DotnetPage from './pages/DotnetPage'
import ElectronPage from './pages/ElectronPage'
import NextjsPage from './pages/NextjsPage'
import ReactProjectsPage from './pages/ReactProjectsPage'
import { ImageGalleryProvider } from './components/ImageGalleryProvider'

function App() {
  return (
    <ImageGalleryProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dotnet" element={<DotnetPage />} />
        <Route path="/electron" element={<ElectronPage />} />
        <Route path="/nextjs" element={<NextjsPage />} />
        <Route path="/react-projects" element={<ReactProjectsPage />} />
      </Routes>
    </ImageGalleryProvider>
  )
}

export default App
