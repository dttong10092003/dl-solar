import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Calendar, Search, User } from "lucide-react"
import { categories, news } from '../data/newsData'

export default function NewsDetail() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [searchInput, setSearchInput] = useState("")

    const article = news.find(item => item.id === Number(id))

    const handleSearch = () => {
        // Navigate to news page with search query
        navigate(`/news?search=${encodeURIComponent(searchInput)}`)
    }

    const handleSearchKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch()
        }
    }

    if (!article) {
        return (
            <div className="min-h-screen bg-[#eef6fc] flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Không tìm thấy bài viết</h1>
                    <button
                        onClick={() => navigate('/news')}
                        className="bg-[#003366] text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors"
                    >
                        Quay lại trang tin tức
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-[#eef6fc]">
            <div className="container mx-auto py-8">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Main content */}
                    <div className="w-full md:w-2/3">
                        <div className="bg-white rounded-2xl p-6">
                            {/* Article header */}
                            <h1 className="text-2xl md:text-3xl font-bold text-[#003366] mb-4 leading-tight">
                                {article.title}
                            </h1>

                            {/* Article meta */}
                            <div className="flex flex-wrap items-center gap-4 mb-6 text-gray-600">
                                <div className="flex items-center gap-2">
                                    <Calendar size={18} />
                                    <span>Thứ Sáu, {article.date}</span>
                                </div>
                                {article.author && (
                                    <div className="flex items-center gap-2">
                                        <User size={18} />
                                        <span>{article.author}</span>
                                    </div>
                                )}
                            </div>

                            {/* Article image */}
                            <div className="mb-6">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-64 md:h-96 object-cover rounded-lg"
                                />
                            </div>

                            {/* Article content */}
                            <div
                                className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: article.content || article.excerpt }}
                            />

                            {/* Share buttons or related content can go here */}
                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <p className="text-gray-600">
                                    Bài viết thuộc danh mục: <span className="font-semibold text-[#003366]">
                                        {categories.find(cat => cat.id === article.categoryId)?.name}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar - same as News page */}
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
                                            onClick={() => navigate(`/news?category=${category.id}`)}
                                            className="text-gray-700 hover:text-[#003366] cursor-pointer"
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
                                {news.filter(item => item.id !== article.id).slice(0, 4).map((newsItem) => (
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
                                        <p className="text-[#003366] font-semibold hover:text-yellow-500 transition-colors line-clamp-2 text-sm">
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
