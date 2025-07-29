interface ImageGalleryProps {
  images: string[]
  onImageClick: (index: number) => void
}

export function ImageGallery({ images, onImageClick }: ImageGalleryProps) {
  return (
    <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-4 gap-3 p-2 [column-fill:_balance]">
      {images.map((src, index) => (
        <div
          key={index}
          className="mb-3 w-full break-inside-avoid overflow-hidden cursor-pointer group"
          onClick={() => onImageClick(index)}
        >
          <img
            src={src || "/placeholder.svg"}
            alt={`Gallery image ${index + 1}`}
            className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-[1.25]"
          />
        </div>
      ))}
    </div>
  )
}
