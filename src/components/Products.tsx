import { useState } from "react"
import { useSearchParams, useNavigate } from "react-router-dom"
import { Plus, Minus, ArrowUpDown, ChevronLeft, ChevronRight, X, Filter } from "lucide-react"
import type { PriceRange, Product } from "../types"
import { categories, subcategories, products } from "../data"
import { formatPrice } from "../utils/format"

export default function ProductListingPage() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const selectedCategory = searchParams.get("category")
  const selectedSubcategory = searchParams.get("subcategory")

  const priceRanges: PriceRange[] = [
    { label: "Dưới 100.000đ", min: 0, max: 100000 },
    { label: "Từ 100.000đ - 200.000đ", min: 100000, max: 200000 },
    { label: "Từ 200.000đ - 300.000đ", min: 200000, max: 300000 },
    { label: "Từ 300.000đ - 500.000đ", min: 300000, max: 500000 },
    { label: "Từ 500.000đ - 1 triệu", min: 500000, max: 1000000 },
    { label: "Từ 1 triệu - 2 triệu", min: 1000000, max: 2000000 },
    { label: "Từ 2 triệu - 5 triệu", min: 2000000, max: 5000000 },
    { label: "Từ 5 triệu - 10 triệu", min: 5000000, max: 10000000 },
    { label: "Trên 10 triệu", min: 10000000, max: Infinity },
  ]

  const [expandedCategories, setExpandedCategories] = useState<number[]>(selectedCategory ? [Number(selectedCategory)] : [])
  const [selectedPrices, setSelectedPrices] = useState<string[]>([])
  const [sortOption, setSortOption] = useState<string>("")
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false)

  const bannerImages = [
    "https://bizweb.dktcdn.net/100/487/020/themes/911678/assets/banner_three_1.jpg?1735875826317",
    "https://bizweb.dktcdn.net/100/487/020/themes/911678/assets/banner_three_2.jpg?1735875826317", 
    "https://bizweb.dktcdn.net/100/487/020/themes/911678/assets/banner_three_3.jpg?1735875826317"
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerImages.length) % bannerImages.length)
  }

  const toggleCategory = (categoryId: number) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryId) ? prev.filter((id) => id !== categoryId) : [...prev, categoryId]
    )
  }

  const togglePriceRange = (label: string) => {
    setSelectedPrices((prev) =>
      prev.includes(label) ? prev.filter((p) => p !== label) : [...prev, label]
    )
  }

  const resetPrices = () => setSelectedPrices([])

  const applyPriceFilter = (product: Product) => {
    if (!selectedPrices.length) return true
    const price = product.currentPrice
    return selectedPrices.some((label) => {
      const range = priceRanges.find((r) => r.label === label)
      return range && price >= range.min && price <= range.max
    })
  }

  const applyCategoryFilter = (product: Product) => {
    if (!selectedCategory) return true
    return product.categoryId === Number(selectedCategory)
  }

  const applySubcategoryFilter = (product: Product) => {
    if (!selectedSubcategory) return true
    return product.subcategoryId === Number(selectedSubcategory)
  }

  const sortProducts = (products: Product[]) => {
    switch (sortOption) {
      case "Tên A-Z":
        return [...products].sort((a, b) => a.name.localeCompare(b.name))
      case "Tên Z-A":
        return [...products].sort((a, b) => b.name.localeCompare(a.name))
      case "Giá thấp đến cao":
        return [...products].sort((a, b) => a.currentPrice - b.currentPrice)
      case "Giá cao xuống thấp":
        return [...products].sort((a, b) => b.currentPrice - a.currentPrice)
      default:
        return products
    }
  }

  const filteredProducts = sortProducts(
    products.filter((product) =>
      applyCategoryFilter(product) &&
      applySubcategoryFilter(product) &&
      applyPriceFilter(product)
    )
  )

  // Filter categories based on URL
  const displayedCategories = selectedCategory
    ? categories.filter((category) => category.id === Number(selectedCategory))
    : categories

  // Filter subcategories based on URL
  const displayedSubcategories = (categoryId: number) =>
    subcategories.filter((sub) => sub.categoryId === categoryId)

  return (
    <div className="min-h-screen bg-blue-50 p-2 sm:p-4 lg:p-8">
      {/* Banner Slider */}
      <div className="max-w-7xl mx-auto mb-6 lg:mb-12">
        <div className="relative overflow-hidden rounded-xl lg:rounded-2xl shadow-lg">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {bannerImages.map((image, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <img
                  src={image}
                  alt={`Solar banner ${index + 1}`}
                  className="w-full h-40 sm:h-48 lg:h-64 object-cover"
                />
              </div>
            ))}
          </div>
          
          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 lg:left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-1 lg:p-2 rounded shadow-lg transition-all"
          >
            <ChevronLeft className="w-4 h-4 lg:w-6 lg:h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 lg:right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-1 lg:p-2 rounded shadow-lg transition-all"
          >
            <ChevronRight className="w-4 h-4 lg:w-6 lg:h-6" />
          </button>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        {/* Filter Button */}
        <div className="mb-4 lg:mb-6">
          <button
            onClick={() => setIsFilterModalOpen(true)}
            className="bg-white rounded-xl shadow-sm p-3 lg:p-4 flex items-center gap-2 text-blue-900 font-semibold hover:bg-blue-50 transition-colors"
          >
            <Filter className="w-4 h-4 lg:w-5 lg:h-5" />
            <span>Bộ lọc & Danh mục</span>
          </button>
        </div>

        {/* Products Section */}
        <div className="bg-white rounded-xl shadow-sm p-3 lg:p-6 space-y-4 lg:space-y-6">
          <div className="flex flex-wrap items-center gap-2 lg:gap-3">
            <span className="text-gray-700 text-sm lg:text-base font-semibold flex items-center gap-1">
              <ArrowUpDown className="w-3 h-3 lg:w-4 lg:h-4" /> Xếp theo:
            </span>
            <div className="flex flex-wrap gap-1 lg:gap-2">
              {["Tên A-Z", "Tên Z-A", "Hàng mới", "Giá thấp đến cao", "Giá cao xuống thấp"].map((label) => (
                <button
                  key={label}
                  onClick={() => setSortOption(label)}
                  className={`px-2 lg:px-4 py-1 lg:py-2 border rounded-md text-xs lg:text-sm font-semibold transition-colors cursor-pointer ${sortOption === label
                    ? "bg-blue-100 border-blue-500 text-blue-700"
                    : "border-blue-300 text-blue-700 hover:bg-blue-50"
                    }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="bg-[#fff3cd] text-[#856404] p-3 lg:p-4 rounded-md font-semibold text-sm lg:text-base">
              Không có sản phẩm nào trong danh mục này.
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3 lg:gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => navigate(`/product/${product.id}`)}
                  className="relative group rounded-xl lg:rounded-2xl bg-white transition-all duration-300 overflow-hidden hover:bg-[#ebf9ff] cursor-pointer shadow-sm"
                >
                  <div className="relative p-2 lg:p-4 pb-1">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-16 sm:h-20 md:h-24 lg:h-32 xl:h-full object-contain mx-auto rounded-xl lg:rounded-2xl"
                    />
                    {product.discount && (
                      <span className="absolute top-1 lg:top-3 left-1 lg:left-3 bg-red-500 text-white text-xs font-semibold px-1 lg:px-2 py-0.5 lg:py-1 rounded-full shadow">
                        -{product.discount}%
                      </span>
                    )}
                  </div>
                  <div className="p-2 lg:p-4 pt-0 lg:pt-2">
                    <h3 className="text-gray-800 text-xs sm:text-sm lg:text-sm font-semibold min-h-[24px] sm:min-h-[28px] lg:min-h-[40px] leading-tight mb-1 lg:mb-3 text-center group-hover:text-yellow-500 line-clamp-2">
                      {product.name}
                    </h3>
                    <div className="text-center mb-1 lg:mb-4">
                      {product.originalPrice ? (
                        <div className="space-y-0.5">
                          <div className="text-blue-900 font-bold text-xs sm:text-sm lg:text-base">
                            {formatPrice(product.currentPrice)}
                          </div>
                          <div className="text-gray-400 text-xs lg:text-sm line-through font-medium">
                            {formatPrice(product.originalPrice)}
                          </div>
                        </div>
                      ) : (
                        <div className="text-blue-900 font-bold text-xs sm:text-sm lg:text-base">
                          {formatPrice(product.currentPrice)}
                        </div>
                      )}
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-2 transition-all duration-300">
                      <button
                        onClick={() => alert(`Thêm sản phẩm ${product.id} vào giỏ!`)}
                        className="w-full bg-white border-2 border-blue-900 text-blue-900 font-medium py-1 lg:py-2 rounded-full flex items-center justify-center gap-1 lg:gap-2 hover:border-yellow-500 hover:bg-yellow-500 hover:text-white text-xs lg:text-sm"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3 lg:h-4 lg:w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.35 2.7a1 1 0 00.9 1.5H19M16 21a1 1 0 100-2 1 1 0 000 2zm-8 0a1 1 0 100-2 1 1 0 000 2z"
                          />
                        </svg>
                        <span className="hidden sm:inline lg:inline">Thêm vào giỏ</span>
                        <span className="sm:hidden lg:hidden">Mua</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Filter Modal */}
        {isFilterModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-4 p-4">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-md max-h-[90vh] overflow-hidden">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="text-lg font-semibold text-blue-900">Bộ lọc & Danh mục</h3>
                <button
                  onClick={() => setIsFilterModalOpen(false)}
                  className="p-1 hover:bg-gray-100 rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-4 overflow-y-auto max-h-[calc(90vh-120px)]">
                {/* Categories Section */}
                <div className="mb-6">
                  <h4 className="text-base font-semibold text-blue-900 mb-3">Danh mục sản phẩm</h4>
                  <ul className="space-y-2">
                    {displayedCategories.map((category) => (
                      <li key={category.id}>
                        <div className="flex justify-between items-center text-sm">
                          <span
                            onClick={() => {
                              navigate(`/products?category=${category.id}`)
                              setIsFilterModalOpen(false)
                            }}
                            className={`cursor-pointer transition ${selectedCategory && Number(selectedCategory) === category.id
                              ? "text-blue-700 font-semibold"
                              : "text-gray-700 hover:text-blue-700"
                              }`}
                          >
                            {category.name}
                          </span>
                          {displayedSubcategories(category.id).length > 0 && (
                            <span
                              onClick={() => toggleCategory(category.id)}
                              className="cursor-pointer"
                            >
                              {expandedCategories.includes(category.id) ? (
                                <Minus className="w-4 h-4 text-gray-500" />
                              ) : (
                                <Plus className="w-4 h-4 text-gray-500" />
                              )}
                            </span>
                          )}
                        </div>
                        {expandedCategories.includes(category.id) && displayedSubcategories(category.id).length > 0 && (
                          <ul className="ml-3 mt-2 space-y-1 text-xs">
                            {displayedSubcategories(category.id).map((sub) => (
                              <li
                                key={sub.id}
                                onClick={() => {
                                  navigate(`/products?category=${category.id}&subcategory=${sub.id}`)
                                  setIsFilterModalOpen(false)
                                }}
                                className={`cursor-pointer ${selectedSubcategory && Number(selectedSubcategory) === sub.id
                                  ? "text-blue-700 font-semibold"
                                  : "text-gray-600 hover:text-yellow-500"
                                  }`}
                              >
                                {sub.name}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price Filter Section */}
                <div>
                  <h4 className="text-base font-semibold text-blue-900 mb-3 border-b border-dashed border-blue-200 pb-2">
                    Chọn mức giá
                  </h4>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {priceRanges.map((range, index) => (
                      <label key={index} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedPrices.includes(range.label)}
                          onChange={() => togglePriceRange(range.label)}
                          className="form-checkbox h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500 cursor-pointer"
                        />
                        <span className="text-gray-700 text-sm font-semibold">{range.label}</span>
                      </label>
                    ))}
                  </div>
                  <button
                    onClick={resetPrices}
                    className="mt-3 text-sm text-red-600 hover:text-red-800 cursor-pointer"
                  >
                    Bỏ chọn tất cả
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}