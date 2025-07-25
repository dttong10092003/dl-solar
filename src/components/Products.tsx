import { useState } from "react"
import { useSearchParams, useNavigate } from "react-router-dom"
import { Plus, Minus, ArrowUpDown } from "lucide-react"
import type { PriceRange, Product } from "../types"
import { categories, subcategories, products } from "../data"

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

  const parsePrice = (price: string): number =>
    Number(price.replace(/[^0-9]/g, "")) || 0

  const applyPriceFilter = (product: Product) => {
    if (!selectedPrices.length) return true
    const price = parsePrice(product.currentPrice)
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
        return [...products].sort((_a, b) => b.name.localeCompare(b.name))
      case "Giá thấp đến cao":
        return [...products].sort((a, b) => parsePrice(a.currentPrice) - parsePrice(b.currentPrice))
      case "Giá cao xuống thấp":
        return [...products].sort((a, b) => parsePrice(b.currentPrice) - parsePrice(a.currentPrice))
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
    <div className="min-h-screen bg-blue-50 p-4 lg:p-8">
      <div className="max-w-7xl mx-auto mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Image 1 - Solar Panel Installation */}
          <div className="group overflow-hidden rounded-2xl shadow-lg cursor-pointer">
            <img
              src="https://bizweb.dktcdn.net/100/487/020/themes/911678/assets/banner_three_1.jpg?1735875826317"
              alt="Solar engineers consultation and planning"
              className="w-full h-64 object-cover transition-all duration-300 group-hover:brightness-110 group-hover:scale-105"
            />
            <div className="transition-all duration-300"></div>
          </div>

          {/* Image 2 - Engineers Consultation */}
          <div className="group overflow-hidden rounded-2xl shadow-lg cursor-pointer">
            <img
              src="https://bizweb.dktcdn.net/100/487/020/themes/911678/assets/banner_three_2.jpg?1735875826317"
              alt="Solar engineers consultation and planning"
              className="w-full h-64 object-cover transition-all duration-300 group-hover:brightness-110 group-hover:scale-105"
            />
            <div className="transition-all duration-300"></div>
          </div>

          {/* Image 3 - Solar Farm Inspection */}
          <div className="group overflow-hidden rounded-2xl shadow-lg cursor-pointer">
            <img
              src="https://bizweb.dktcdn.net/100/487/020/themes/911678/assets/banner_three_3.jpg?1735875826317"
              alt="Solar engineers consultation and planning"
              className="w-full h-64 object-cover transition-all duration-300 group-hover:brightness-110 group-hover:scale-105"
            />
            <div className="transition-all duration-300"></div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
        <aside className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Danh mục sản phẩm</h3>
            <ul className="space-y-3">
              {displayedCategories.map((category) => (
                <li key={category.id}>
                  <div className="flex justify-between items-center text-base">
                    <span
                      onClick={() => navigate(`/products?category=${category.id}`)}
                      className={`cursor-pointer transition ${
                        selectedCategory && Number(selectedCategory) === category.id
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
                    <ul className="ml-4 mt-2 space-y-1 text-sm">
                      {displayedSubcategories(category.id).map((sub) => (
                        <li
                          key={sub.id}
                          onClick={() => navigate(`/products?category=${category.id}&subcategory=${sub.id}`)}
                          className={`cursor-pointer ${
                            selectedSubcategory && Number(selectedSubcategory) === sub.id
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

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-4 border-b border-dashed border-blue-200 pb-4">
              Bộ lọc sản phẩm
            </h3>
            <div className="mt-4">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Chọn mức giá</h4>
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
                className="mt-2 text-sm text-red-600 hover:text-red-800 cursor-pointer"
              >
                Bỏ chọn tất cả
              </button>
            </div>
          </div>
        </aside>

        <main>
          <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-gray-700 text-base font-semibold flex items-center gap-1">
                <ArrowUpDown className="w-4 h-4" /> Xếp theo:
              </span>
              <div className="flex flex-wrap gap-2">
                {["Tên A-Z", "Tên Z-A", "Hàng mới", "Giá thấp đến cao", "Giá cao xuống thấp"].map((label) => (
                  <button
                    key={label}
                    onClick={() => setSortOption(label)}
                    className={`px-4 py-2 border rounded-md text-sm font-semibold transition-colors cursor-pointer ${
                      sortOption === label
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
              <div className="bg-[#fff3cd] text-[#856404] p-4 rounded-md font-semibold">
                Không có sản phẩm nào trong danh mục này.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="relative group rounded-2xl bg-white transition-all duration-300 overflow-hidden hover:bg-[#ebf9ff] cursor-pointer"
                  >
                    <div className="relative p-4 pb-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain mx-auto rounded-2xl"
                      />
                      {product.discount && (
                        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full shadow">
                          -{product.discount}%
                        </span>
                      )}
                    </div>
                    <div className="p-4 pt-2">
                      <h3 className="text-gray-800 text-sm font-semibold min-h-[40px] leading-relaxed mb-3 text-center group-hover:text-yellow-500 line-clamp-2">
                        {product.name}
                      </h3>
                      <div className="text-center mb-4">
                        {product.originalPrice ? (
                          <div className="flex justify-center items-center gap-2 text-blue-900 font-bold text-lg">
                            <span>{product.currentPrice}</span>
                            <span className="text-gray-400 text-sm line-through font-medium">
                              {product.originalPrice}
                            </span>
                          </div>
                        ) : (
                          <div className="text-blue-900 font-bold text-lg">{product.currentPrice}</div>
                        )}
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-2 transition-all duration-300">
                        <button
                          onClick={() => alert(`Thêm sản phẩm ${product.id} vào giỏ!`)}
                          className="w-full bg-white border-2 border-blue-900 text-blue-900 font-medium py-2 rounded-full flex items-center justify-center gap-2 hover:border-yellow-500 hover:bg-yellow-500 hover:text-white"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
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
                          Thêm vào giỏ
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}