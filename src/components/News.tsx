import { useState, useEffect } from "react"
import { useSearchParams, useNavigate } from "react-router-dom"
import { Calendar, Search, ChevronLeft, ChevronRight } from "lucide-react"
import type { Article } from '../types'
import { categories, news } from '../data/newsData'

export default function Home() {
    const [searchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate()
    const selectedCategoryFromUrl = searchParams.get("category")
    const [searchQuery, setSearchQuery] = useState("")
    const [searchInput, setSearchInput] = useState("") // New state for input value
    const [selectedCategory, setSelectedCategory] = useState<number | null>(
        selectedCategoryFromUrl ? Number(selectedCategoryFromUrl) : null
    )
    const [currentPage, setCurrentPage] = useState(1)
    const articlesPerPage = 6

    const ArticleCard = ({ article }: { article: Article }) => (
        <div
            className="flex gap-4 mb-8 group cursor-pointer hover:bg-gray-50 p-4 rounded-lg transition-colors"
            onClick={() => navigate(`/news/${article.id}`)}
        >
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

    // Handle search when button is clicked
    const handleSearch = () => {
        setSearchQuery(searchInput)
        setCurrentPage(1) // Reset to first page when searching
    }

    // Handle Enter key press in search input
    const handleSearchKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch()
        }
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
                                    value={searchInput}
                                    onChange={(e) => setSearchInput(e.target.value)}
                                    onKeyPress={handleSearchKeyPress}
                                />
                                <button
                                    onClick={handleSearch}
                                    className="absolute right-0 top-0 h-full px-3 bg-yellow-500 rounded-r-lg flex items-center justify-center hover:bg-yellow-600 transition-colors cursor-pointer"
                                >
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
                                    <div
                                        key={newsItem.id}
                                        className="flex gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
                                        onClick={() => navigate(`/news/${newsItem.id}`)}
                                    >
                                        <div className="w-30 h-20 relative rounded-md overflow-hidden flex-shrink-0">
                                            <img
                                                src={newsItem.image || "/placeholder.svg"}
                                                alt={newsItem.title}
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                        <p className="text-[#003366] font-semibold hover:text-yellow-500 transition-colors cursor-pointer line-clamp-2">
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