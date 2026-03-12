import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'

type GalleryState = {
  images: string[]
  index: number
}

type ImageGalleryContextValue = {
  open: (images: string[], index: number) => void
}

const ImageGalleryContext = createContext<ImageGalleryContextValue | null>(null)

export const ImageGalleryProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<GalleryState | null>(null)

  const open = useCallback((images: string[], index: number) => {
    if (!images || images.length === 0) return
    const safeIndex = index < 0 || index >= images.length ? 0 : index
    setState({ images, index: safeIndex })
    document.body.style.overflow = 'hidden'
  }, [])

  const close = useCallback(() => {
    setState(null)
    document.body.style.overflow = 'auto'
  }, [])

  const showPrev = useCallback(() => {
    setState(prev => {
      if (!prev || prev.images.length <= 1) return prev
      const nextIndex = (prev.index - 1 + prev.images.length) % prev.images.length
      return { ...prev, index: nextIndex }
    })
  }, [])

  const showNext = useCallback(() => {
    setState(prev => {
      if (!prev || prev.images.length <= 1) return prev
      const nextIndex = (prev.index + 1) % prev.images.length
      return { ...prev, index: nextIndex }
    })
  }, [])

  useEffect(() => {
    if (!state) return

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close()
      } else if (e.key === 'ArrowLeft') {
        showPrev()
      } else if (e.key === 'ArrowRight') {
        showNext()
      }
    }

    window.addEventListener('keydown', handleKey)
    return () => {
      window.removeEventListener('keydown', handleKey)
    }
  }, [state, close, showPrev, showNext])

  const currentSrc =
    state && state.images[state.index] ? state.images[state.index] : undefined

  return (
    <ImageGalleryContext.Provider value={{ open }}>
      {children}

      {state && currentSrc && (
        <div
          className="image-modal active"
          onClick={() => {
            close()
          }}
        >
          <button
            type="button"
            className="image-modal-nav prev"
            onClick={e => {
              e.stopPropagation()
              showPrev()
            }}
          >
            <FaChevronLeft />
          </button>
          <img
            src={currentSrc}
            alt="확대된 이미지"
            className="image-modal-content"
            onClick={e => e.stopPropagation()}
          />
          <button
            type="button"
            className="image-modal-nav next"
            onClick={e => {
              e.stopPropagation()
              showNext()
            }}
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </ImageGalleryContext.Provider>
  )
}

export const useImageGallery = () => {
  const ctx = useContext(ImageGalleryContext)
  if (!ctx) {
    throw new Error('useImageGallery는 ImageGalleryProvider 안에서만 사용할 수 있습니다.')
  }
  return ctx
}

