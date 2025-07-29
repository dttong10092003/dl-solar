import { useState, useEffect, useCallback } from "react"
import { ArrowLeft, ArrowRight, X, ZoomIn, ZoomOut, RotateCcw, Share2, Download, RefreshCcw, Grid } from "lucide-react"

interface ImageLightboxProps {
  images: string[]
  isOpen: boolean
  onClose: () => void
  initialIndex: number
}

export function ImageLightbox({ images, isOpen, onClose, initialIndex }: ImageLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [zoomLevel, setZoomLevel] = useState(1)
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    setCurrentIndex(initialIndex)
    setZoomLevel(1) // Reset zoom when image changes
    setRotation(0) // Reset rotation when image changes
  }, [initialIndex, isOpen])

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }, [images.length])

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }, [images.length])

  const handleThumbnailClick = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.1, 3))
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.1, 0.5))
  const handleRotate = () => setRotation((prev) => (prev + 90) % 360)
  const handleRefresh = () => {
    setZoomLevel(1)
    setRotation(0)
  }
  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = images[currentIndex]
    link.download = `image-${currentIndex + 1}.png` // Or extract filename from URL
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex flex-col max-w-full max-h-full p-0 bg-black bg-opacity-95 border-none rounded-none z-50">
      {/* Top Toolbar */}
      <div className="absolute top-0 left-0 right-0 bg-black bg-opacity-70 text-white p-2 flex items-center justify-between z-10">
        <span className="text-sm md:text-base">{`${currentIndex + 1}/${images.length}`}</span>
        <div className="flex gap-2">
          <button className="p-2 text-white hover:bg-gray-700 rounded" onClick={handleRefresh}>
            <RefreshCcw className="h-5 w-5" />
          </button>
          <button className="p-2 text-white hover:bg-gray-700 rounded" onClick={handleRotate}>
            <RotateCcw className="h-5 w-5" />
          </button>
          <button className="p-2 text-white hover:bg-gray-700 rounded">
            <Share2 className="h-5 w-5" />
          </button>
          <button className="p-2 text-white hover:bg-gray-700 rounded" onClick={handleZoomIn}>
            <ZoomIn className="h-5 w-5" />
          </button>
          <button className="p-2 text-white hover:bg-gray-700 rounded" onClick={handleZoomOut}>
            <ZoomOut className="h-5 w-5" />
          </button>
          <button className="p-2 text-white hover:bg-gray-700 rounded" onClick={handleDownload}>
            <Download className="h-5 w-5" />
          </button>
          <button className="p-2 text-white hover:bg-gray-700 rounded" onClick={onClose}>
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Main Image Area */}
      <div className="flex-1 flex items-center justify-center relative p-4 mt-12 mb-24">
        <button
          className="absolute left-2 top-1/2 -translate-y-1/2 text-white hover:bg-gray-700 z-10 p-2 rounded"
          onClick={handlePrev}
        >
          <ArrowLeft className="h-8 w-8" />
        </button>
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src={images[currentIndex] || "/placeholder.svg"}
            alt={`Full size image ${currentIndex + 1}`}
            className="max-w-full max-h-full object-contain"
            style={{
              transform: `scale(${zoomLevel}) rotate(${rotation}deg)`,
              transition: "transform 0.2s ease-out",
            }}
          />
        </div>
        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 text-white hover:bg-gray-700 z-10 p-2 rounded"
          onClick={handleNext}
        >
          <ArrowRight className="h-8 w-8" />
        </button>
        <div className="absolute bottom-4 text-white text-sm">Thư viện ảnh</div>
      </div>

      {/* Bottom Thumbnail Strip */}
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-2 flex items-center justify-between z-10">
        <div className="flex-1 overflow-x-auto flex gap-2 py-1 px-2 scrollbar-hide">
          {images.map((src, index) => (
            <div
              key={index}
              className={`relative flex-shrink-0 w-20 h-14 rounded-md overflow-hidden cursor-pointer border-2 ${
                index === currentIndex ? "border-blue-500" : "border-transparent"
              }`}
              onClick={() => handleThumbnailClick(index)}
            >
              <img 
                src={src || "/placeholder.svg"} 
                alt={`Thumbnail ${index + 1}`} 
                className="w-full h-full object-cover" 
              />
            </div>
          ))}
        </div>
        <button className="p-2 text-white hover:bg-gray-700 ml-2 rounded">
          <Grid className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
