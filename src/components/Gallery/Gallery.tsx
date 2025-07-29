import { useState } from "react"
import { ImageGallery } from "./ImageGallery"
import { ImageLightbox } from "./GalleryLightbox"

export default function GalleryPage() {
    const images = [
        "https://bizweb.dktcdn.net/100/485/689/files/dien.jpg?v=1684918895400",
        "https://bizweb.dktcdn.net/100/485/689/files/gia-tam-pin-mat-troi-e1620119521.jpg?v=1684918896245",
        "https://bizweb.dktcdn.net/100/485/689/files/den-nang-luong-mat-troi-nhap-kha.jpg?v=1684918897171",
        "https://bizweb.dktcdn.net/100/485/689/files/pin-qc-1.jpg?v=1684918897856",
        "https://bizweb.dktcdn.net/100/485/689/files/untitled.jpg?v=1684918901599",
        "https://bizweb.dktcdn.net/100/485/689/files/tam-pin-nang-luong-mat-troi-la-p.jpg?v=1684918899954",
        "https://bizweb.dktcdn.net/100/485/689/files/nang-luong-mat-troi-la-gi-cach-t.jpg?v=1684918900840",
        "https://bizweb.dktcdn.net/100/485/689/files/58ea5d753ef12cefb43f3943c32cc133.jpg?v=1684918898931",
        "https://bizweb.dktcdn.net/100/485/689/files/den-nang-luong-mat-troi-nhap-kha-c173c71a-c4bd-45c1-b433-f79372ba6846.jpg?v=1684919284570",
        "https://bizweb.dktcdn.net/100/485/689/files/dien-3083ba92-4a6a-4355-808e-5cd079082784.jpg?v=1684919282523",
        "https://bizweb.dktcdn.net/100/485/689/files/gia-tam-pin-mat-troi-e1620119521-055ec012-d174-4e06-91a2-500f084238f4.jpg?v=1684919283356",
        "https://bizweb.dktcdn.net/100/485/689/files/gia-tam-pin-mat-troi-e1620119521-055ec012-d174-4e06-91a2-500f084238f4.jpg?v=1684919283356s",
        "https://bizweb.dktcdn.net/100/485/689/files/nang-luong-mat-troi-1-e161257610.jpg?v=1684918902198",
        "https://bizweb.dktcdn.net/100/485/689/files/nang-luong-mat-troi-la-gi-cach-t-a198addc-fc34-402a-a053-266c3278b11b.jpg?v=1684919286697",
        "https://bizweb.dktcdn.net/100/485/689/files/nang-luong-mat-troi-1-e161257610-9df12eb3-5fa5-4497-b3d2-2ecadc976b1a.jpg?v=1684919287356",
        "https://bizweb.dktcdn.net/100/485/689/files/tam-pin-nang-luong-mat-troi-la-p-d2ff8837-c465-4322-8cbe-e48e982821c8.jpg?v=1684919286040",
    ]

    const [isLightboxOpen, setIsLightboxOpen] = useState(false)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const openLightbox = (index: number) => {
        setCurrentImageIndex(index)
        setIsLightboxOpen(true)
    }

    const closeLightbox = () => {
        setIsLightboxOpen(false)
    }

    return (
        <div className="bg-[#ebf9ff]">
            <div className="max-w-7xl mx-auto py-8">
                <ImageGallery images={images} onImageClick={openLightbox} />
                <ImageLightbox images={images} isOpen={isLightboxOpen} onClose={closeLightbox} initialIndex={currentImageIndex} />
            </div>
        </div>
    )
}
