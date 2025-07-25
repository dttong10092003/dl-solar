import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { Calendar, Search, ChevronLeft, ChevronRight } from "lucide-react"

interface Category {
    id: number
    name: string
}

interface Article {
    id: number
    title: string
    image: string
    date: string
    excerpt: string
    categoryId: number
}

export default function Home() {
    const [searchParams, setSearchParams] = useSearchParams()
    const selectedCategoryFromUrl = searchParams.get("category")
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedCategory, setSelectedCategory] = useState<number | null>(
        selectedCategoryFromUrl ? Number(selectedCategoryFromUrl) : null
    )
    const [currentPage, setCurrentPage] = useState(1)
    const articlesPerPage = 6

    const categories: Category[] = [
        { id: 1, name: "Tin tức điện mặt trời" },
        { id: 2, name: "Kiến thức hữu ích" },
    ]

    const news: Article[] = [
        {
            id: 1,
            title: "Phát triển bền vững là gì? Các mục tiêu phát triển bền vững",
            image: "https://bizweb.dktcdn.net/100/487/020/articles/8-db826524-76aa-4d6c-a11c-7a0ac7ead6da.jpg?v=1685089847453",
            date: "26/05/2023",
            excerpt: "Động lực tăng trưởng kinh tế đã dẫn đến nhiều hệ lụy như suy thoái môi trường và chênh lệch xã hội. Do đó phát triển bền vững đã được đặt ra nhằm. Động lực tăng trưởng kinh tế đã dẫn đến nhiều hệ lụy như suy thoái môi trường và chênh lệch xã hội. Do đó phát triển bền vững đã được đặt ra nhằm",
            categoryId: 1,
        },
        {
            id: 2,
            title: "Tín chỉ carbon là gì? Thị trường tín chỉ carbon ở Việt Nam",
            image: "https://bizweb.dktcdn.net/100/487/020/articles/7-a520a37f-a7eb-4f92-9a4b-2407d7d16c31.jpg?v=1685089803273",
            date: "26/05/2023",
            excerpt: "Tín chỉ carbon là một đơn vị đo lường được sử dụng để giới hạn lượng khí thải carbon mà một doanh nghiệp được thải ra môi trường. Thuật ngữ này được...",
            categoryId: 1,
        },
        {
            id: 3,
            title: "Tiêu dùng xanh là gì? Tầm quan trọng của tiêu dùng xanh",
            image: "https://bizweb.dktcdn.net/100/487/020/articles/6-fd633771-8dc4-471e-859b-a9418616e82c.jpg?v=1685089720007",
            date: "26/05/2023",
            excerpt: "Thế giới đang phải đối mặt với tình trạng ô nhiễm môi trường và biến đổi khí hậu ngày càng. Vì vậy để đảm bảo mục tiêu phát triển bền vững, mỗi quốc gia...",
            categoryId: 1,
        },
        {
            id: 4,
            title: "Tiếp địa hệ thống pin mặt trời: Nguy cơ xảy ra khi lắp đặt sai cách",
            image: "https://bizweb.dktcdn.net/100/487/020/articles/5-06880260-8eed-4413-a564-d3ddf69e8923.jpg?v=1685089650643",
            date: "26/05/2023",
            excerpt: "Nối đất hay tiếp địa hệ thống pin mặt trời là một trong những yêu cầu bắt buộc khi lắp đặt điện mặt trời. Việc lắp đặt tiếp địa cho hệ thống điện mặt trời...",
            categoryId: 1,
        },
        {
            id: 5,
            title: "El Nino là gì? El Nino tác động đến thời tiết tại Việt Nam như thế nào?",
            image: "https://bizweb.dktcdn.net/100/487/020/articles/4-deeb2267-a43c-4edd-9345-d152e1fb8b1d.jpg?v=1685089461490",
            date: "26/05/2023",
            excerpt: "Trong thời gian gần đây, El Nino là cụm từ được bắt gặp rất nhiều trên tivi, báo chí và những kênh mạng xã hội khác. El Nino xuất hiện khiến nhiệt độ trái đất...",
            categoryId: 2,
        },
        {
            id: 6,
            title: "Điện gió và năng lượng gió: Những kiến thức cần biết",
            image: "https://bizweb.dktcdn.net/100/487/020/articles/3-0112ae10-3239-4e98-a669-fa5b8a7d7b40.jpg?v=1685089405597",
            date: "26/05/2023",
            excerpt: "Năng lượng gió là một nguồn năng lượng sạch và bền vững. Việc sử dụng năng lượng gió để tạo ra điện đã được con người biết đến và ứng dụng từ xa...",
            categoryId: 2,
        },
        {
            id: 7,
            title: "Biệt thự song lập có những lợi thế gì? Có nên đầu tư không?",
            image: "https://bizweb.dktcdn.net/100/487/020/articles/7.jpg?v=1685087738607",
            date: "26/05/2023",
            excerpt: "Biệt thự song lập là cụm từ xuất hiện phổ biến trên thị trường bất động sản hiện nay. Với nhu cầu sống cao cấp, muốn sở hữu nhiều tiện nghi, đồng thời tối...",
            categoryId: 2,
        },
        {
            id: 8,
            title: "Cách dùng điều hòa tiết kiệm điện hiệu quả, không hại máy",
            image: "https://bizweb.dktcdn.net/100/487/020/articles/8.jpg?v=1685087928170",
            date: "26/05/2023",
            excerpt: "Hướng dẫn cách dùng điều hòa tiết kiệm điện nhất Trái đất nóng lên, nhiệt độ tăng cao và mùa hè kéo dài là những nguyên nhân khiến nhu cầu sử dụng...",
            categoryId: 2,
        },
    ]

    const ArticleCard = ({ article }: { article: Article }) => (
        <div className="flex gap-4 mb-8 group cursor-pointer">
            <div className="flex-shrink-0">
                <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-24 h-20 md:w-64 md:h-48 object-cover rounded-lg"
                />
            </div>
            <div className="flex-1 min-w-0">
                <h3 className="text-blue-900 font-semibold text-sm md:text-lg leading-tight mb-2 group-hover:text-yellow-500 transition-colors duration-300 line-clamp-2">
                    {article.title}
                </h3>
                <div className="flex items-center gap-2 text-blue-900 text-base font-semibold mb-2">
                    <Calendar size={20} />
                    <span>{article.date}</span>
                </div>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed line-clamp-3">{article.excerpt}</p>
            </div>
        </div>
    )

    useEffect(() => {
        const categoryFromUrl = searchParams.get("category")
        setSelectedCategory(categoryFromUrl ? Number(categoryFromUrl) : null)
    }, [searchParams])

    // Filter articles based on search query and selected category
    const filteredArticles = news.filter((article) => {
        const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesCategory = selectedCategory ? article.categoryId === selectedCategory : true
        return matchesSearch && matchesCategory
    })

    // Handle category selection with URL update
    const handleCategorySelect = (categoryId: number | null) => {
        setSelectedCategory(categoryId)
        setSearchParams(categoryId ? { category: categoryId.toString() } : {})
        setCurrentPage(1) // Reset to first page when category changes
    }

    const totalPages = Math.ceil(filteredArticles.length / articlesPerPage)
    const paginatedArticles = filteredArticles.slice(
        (currentPage - 1) * articlesPerPage,
        currentPage * articlesPerPage
    )

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
        window.scrollTo({ top: 0, behavior: "smooth" })
    }
    return (
        <div className="min-h-screen bg-[#eef6fc]">
            <div className="container mx-auto py-8">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Main content */}
                    <div className="w-full md:w-2/3">
                        <div className="bg-white rounded-2xl p-4">
                            {filteredArticles.length === 0 ? (
                                <div className="text-gray-600 text-center p-4">
                                    Không tìm thấy bài viết nào phù hợp.
                                </div>
                            ) : (
                                paginatedArticles.map((article) => (
                                    <ArticleCard key={article.id} article={article} />
                                ))
                            )}
                            {totalPages > 1 && (
                                <div className="flex justify-center mt-4 space-x-2 font-semibold">
                                    {currentPage > 1 && (
                                        <button
                                            onClick={() => handlePageChange(currentPage - 1)}
                                            className="cursor-pointer px-3 py-1 rounded-lg border bg-white hover:bg-gray-100 flex items-center"
                                        >
                                            <ChevronLeft size={12} />
                                        </button>
                                    )}

                                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                        <button
                                            key={page}
                                            onClick={() => handlePageChange(page)}
                                            className={`cursor-pointer px-3 py-1 rounded-lg border ${page === currentPage
                                                ? "bg-blue-900 text-white border-blue-900"
                                                : "bg-white hover:bg-gray-100"
                                                }`}
                                        >
                                            {page}
                                        </button>
                                    ))}

                                    {currentPage < totalPages && (
                                        <button
                                            onClick={() => handlePageChange(currentPage + 1)}
                                            className="cursor-pointer px-3 py-1 rounded-lg border bg-white hover:bg-gray-100 flex items-center"
                                        >
                                            <ChevronRight size={12} />
                                        </button>
                                    )}
                                </div>
                            )}

                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="w-full md:w-1/3">
                        {/* Search */}
                        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                            <h2 className="text-2xl font-bold text-[#003366] mb-4">Tìm kiếm tin tức</h2>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Nhập tên tin tức..."
                                    className="w-full border border-gray-300 rounded-lg py-2 px-4 pr-10"
                                    value={searchQuery}
                                    onChange={(e) => {
                                        setSearchQuery(e.target.value)
                                        setCurrentPage(1) // Reset to first page on search
                                    }}
                                />
                                <button className="absolute right-0 top-0 h-full px-3 bg-yellow-500 rounded-r-lg flex items-center justify-center">
                                    <Search className="h-5 w-5 text-white" />
                                </button>
                            </div>
                        </div>

                        {/* Categories */}
                        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                            <h2 className="text-2xl font-bold text-[#003366] mb-4">Danh mục tin tức</h2>
                            <ul>
                                {categories.map((category) => (
                                    <li key={category.id} className="mb-2">
                                        <button
                                            onClick={() => handleCategorySelect(category.id)}
                                            className={`text-gray-700 hover:text-[#003366] cursor-pointer ${selectedCategory === category.id ? "text-[#003366] font-semibold" : ""
                                                }`}
                                        >
                                            {category.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Featured News */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h2 className="text-2xl font-semibold text-[#003366] mb-4">Tin tức nổi bật</h2>
                            <div className="space-y-4">
                                {news.slice(0, 4).map((newsItem) => (
                                    <div key={newsItem.id} className="flex gap-3">
                                        <div className="w-30 h-20 relative rounded-md overflow-hidden flex-shrink-0">
                                            <img
                                                src={newsItem.image || "/placeholder.svg"}
                                                alt={newsItem.title}
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                        <p className="text-[#003366] font-semibold hover:text-yellow-500 cursor-pointer line-clamp-2">
                                            {newsItem.title}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}