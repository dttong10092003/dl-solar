import { useState } from "react"
import { Plus, Minus, ArrowUpDown } from "lucide-react"
import type { PriceRange, Category, Subcategory, Product } from "../types"

export default function ProductListingPage() {
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

  const categories: Category[] = [
    { id: 1, name: "Đèn cao cấp" },
    { id: 2, name: "Đèn pha" },
    { id: 3, name: "Đèn đường" },
    { id: 4, name: "Trụ sân vườn" },
    { id: 5, name: "Quạt" },
    { id: 6, name: "Phụ kiện" },
    { id: 7, name: "Bộ lưu điện" },
    { id: 8, name: "Đèn ốp trần" },
  ]

  const subcategories: Subcategory[] = [
    { id: 1, categoryId: 1, name: "Đèn pha cao cấp" },
    { id: 2, categoryId: 1, name: "Đèn đường cao cấp" },
    { id: 3, categoryId: 2, name: "Đèn pha ngoài trời" },
    { id: 4, categoryId: 2, name: "Đèn pha trong nhà" },
    { id: 5, categoryId: 3, name: "Đèn liền thể" },
    { id: 6, categoryId: 3, name: "Đèn tấm pin rời" },
    { id: 7, categoryId: 3, name: "Đèn bộ lưu điện rời" },
    { id: 8, categoryId: 3, name: "Đèn chiếc lá" },
    { id: 9, categoryId: 4, name: "Đèn trụ sân vườn tròn" },
    { id: 10, categoryId: 4, name: "Đèn trụ sân vườn vuông" },
    { id: 11, categoryId: 4, name: "Đèn trụ sân vườn nấm" },
    { id: 12, categoryId: 5, name: "Quạt cao cấp" },
    { id: 13, categoryId: 6, name: "Dây nối" },
    { id: 14, categoryId: 6, name: "Pin lưu trữ" },
    { id: 15, categoryId: 6, name: "Trụ & phụ kiện lắp đặt" },
    { id: 16, categoryId: 6, name: "Cần đèn chiếu sáng" },
    { id: 17, categoryId: 6, name: "Khác" },
    { id: 18, categoryId: 7, name: "Bộ lưu điện" },
    { id: 19, categoryId: 7, name: "Máy phát điện" },
    { id: 20, categoryId: 8, name: "Đèn ốp trần cao cấp" },
  ]

  const products: Product[] = [
    {
      id: 1,
      name: "Đèn đường NLMT 30W cao cấp",
      image: "https://bizweb.dktcdn.net/thumb/large/100/487/020/products/csd02-sl-rf-rad-30w-2-1.jpg?v=1685007656980",
      currentPrice: "4.070.000₫",
      originalPrice: "4.200.000₫",
      discount: 3,
      categoryId: 1,
      subcategoryId: 2,
    },
    {
      id: 2,
      name: "Đèn đường NLMT 100W",
      image: "https://bizweb.dktcdn.net/thumb/large/100/487/020/products/csd02-sl-70w-1-1.jpg?v=1685007515690",
      currentPrice: "25.322.000₫",
      originalPrice: null,
      discount: null,
      categoryId: 1,
      subcategoryId: 2,
    },
    {
      id: 3,
      name: "Trụ đèn sân vườn hiện đại",
      image: "https://bizweb.dktcdn.net/thumb/large/100/487/020/products/cp02-sl-rf-70w-882e2964-7300-4c1c-bfe3-b8ce4a0bae5d.jpg?v=1685007159840",
      currentPrice: "5.500.000₫",
      originalPrice: "6.000.000₫",
      discount: 8,
      categoryId: 4,
      subcategoryId: 9,
    },
    {
      id: 4,
      name: "Quạt NLMT mini",
      image: "https://bizweb.dktcdn.net/thumb/large/100/487/020/products/z3615445059775-9c41899060e9be5e87d455ee61b4b504.jpg?v=1685085759660",
      currentPrice: "1.200.000₫",
      originalPrice: "1.400.000₫",
      discount: 14,
      categoryId: 5,
      subcategoryId: 12,
    },
    {
      id: 5,
      name: "Bộ lưu điện 1000W",
      image: "https://bizweb.dktcdn.net/thumb/large/100/487/020/products/ld01-sl-160wh.png?v=1685008156257",
      currentPrice: "7.800.000₫",
      originalPrice: null,
      discount: null,
      categoryId: 7,
      subcategoryId: 18,
    },
    {
      id: 6,
      name: "Phụ kiện đèn đường",
      image: "https://bizweb.dktcdn.net/thumb/large/100/487/020/products/ld01-sl-160wh.png?v=1685008156257",
      currentPrice: "600.000₫",
      originalPrice: "750.000₫",
      discount: 20,
      categoryId: 6,
      subcategoryId: 15,
    },
    {
      id: 7,
      name: "Đèn pha ngoài trời 50W",
      image: "https://bizweb.dktcdn.net/thumb/large/100/487/020/products/rd-dsv2204-1.jpg?v=1685008012903",
      currentPrice: "2.100.000₫",
      originalPrice: "2.500.000₫",
      discount: 16,
      categoryId: 2,
      subcategoryId: 3,
    },
    {
      id: 8,
      name: "Đèn pha trong nhà 30W",
      image: "https://bizweb.dktcdn.net/thumb/large/100/487/020/products/csd02-sl-70w-1.jpg?v=1685007549850",
      currentPrice: "1.200.000₫",
      originalPrice: null,
      discount: null,
      categoryId: 2,
      subcategoryId: 4,
    },
    {
      id: 9,
      name: "Đèn liền thể 60W",
      image: "https://bizweb.dktcdn.net/thumb/large/100/487/020/products/csd02-sl-70w-1-1.jpg?v=1685007515690",
      currentPrice: "3.900.000₫",
      originalPrice: "4.500.000₫",
      discount: 13,
      categoryId: 3,
      subcategoryId: 5,
    },
    {
      id: 10,
      name: "Đèn chiếc lá 80W",
      image: "https://bizweb.dktcdn.net/thumb/large/100/487/020/products/csd02-sl-70w-1.jpg?v=1685007549850",
      currentPrice: "6.000.000₫",
      originalPrice: "6.800.000₫",
      discount: 12,
      categoryId: 3,
      subcategoryId: 8,
    },
    {
      id: 11,
      name: "Trụ sân vườn nấm",
      image: "https://bizweb.dktcdn.net/thumb/large/100/487/020/products/csd02-sl-70w-1-1.jpg?v=1685007515690",
      currentPrice: "3.200.000₫",
      originalPrice: "3.700.000₫",
      discount: 14,
      categoryId: 4,
      subcategoryId: 11,
    },
    {
      id: 12,
      name: "Pin lưu trữ 12V 100Ah",
      image: "https://bizweb.dktcdn.net/thumb/large/100/487/020/products/csd02-sl-70w-1-1.jpg?v=1685007515690",
      currentPrice: "4.500.000₫",
      originalPrice: null,
      discount: null,
      categoryId: 6,
      subcategoryId: 14,
    },
    {
      id: 13,
      name: "Cần đèn chiếu sáng hợp kim",
      image: "https://bizweb.dktcdn.net/thumb/large/100/487/020/products/remote-srne-cu-all5-cho-den-nang-luong-mat-troi-sokoyo-h1.jpg?v=1685086223887",
      currentPrice: "950.000₫",
      originalPrice: "1.100.000₫",
      discount: 14,
      categoryId: 6,
      subcategoryId: 16,
    },
    {
      id: 14,
      name: "Máy phát điện 5kW",
      image: "https://bizweb.dktcdn.net/thumb/large/100/487/020/products/can-den-chu-l-cho-dia-bay-ufo-nang-luong-mat-troi.jpg?v=1685086276963",
      currentPrice: "9.000.000₫",
      originalPrice: "10.000.000₫",
      discount: 10,
      categoryId: 7,
      subcategoryId: 19,
    },
    {
      id: 15,
      name: "Đèn ốp trần LED cao cấp",
      image: "https://bizweb.dktcdn.net/thumb/large/100/487/020/products/can-den-chu-l-cho-dia-bay-ufo-nang-luong-mat-troi.jpg?v=1685086276963",
      currentPrice: "1.000.000₫",
      originalPrice: "1.250.000₫",
      discount: 20,
      categoryId: 8,
      subcategoryId: 20,
    },
    {
      id: 16,
      name: "Dây nối điện chống cháy",
      image: "https://bizweb.dktcdn.net/thumb/large/100/487/020/products/can-den-cao-ap-don-nang-luong-mat-troi-cd10-60-h1.jpg?v=1685086301773",
      currentPrice: "300.000₫",
      originalPrice: "350.000₫",
      discount: 14,
      categoryId: 6,
      subcategoryId: 13,
    },
  ]

  const [expandedCategories, setExpandedCategories] = useState<number[]>([])
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

  const sortProducts = (products: Product[]) => {
    switch (sortOption) {
      case "Tên A-Z":
        return [...products].sort((a, b) => a.name.localeCompare(b.name))
      case "Tên Z-A":
        return [...products].sort((a, b) => b.name.localeCompare(a.name))
      case "Giá thấp đến cao":
        return [...products].sort((a, b) => parsePrice(a.currentPrice) - parsePrice(b.currentPrice))
      case "Giá cao xuống thấp":
        return [...products].sort((a, b) => parsePrice(b.currentPrice) - parsePrice(a.currentPrice))
      default:
        return products
    }
  }

  const filteredProducts = sortProducts(products.filter(applyPriceFilter))

  return (
    <div className="min-h-screen bg-blue-50 p-4 lg:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
        <aside className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Danh mục sản phẩm</h3>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.id}>
                  <div
                    onClick={() => toggleCategory(category.id)}
                    className="flex justify-between items-center text-gray-700 text-base cursor-pointer hover:text-blue-700 transition"
                  >
                    <span className="font-semibold">{category.name}</span>
                    {expandedCategories.includes(category.id) ? (
                      <Minus className="w-4 h-4 text-gray-500" />
                    ) : (
                      <Plus className="w-4 h-4 text-gray-500" />
                    )}
                  </div>
                  {expandedCategories.includes(category.id) && (
                    <ul className="ml-4 mt-2 space-y-1 text-sm text-gray-600">
                      {subcategories
                        .filter((sub) => sub.categoryId === category.id)
                        .map((sub) => (
                          <li key={sub.id}>{sub.name}</li>
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
                  <div key={product.id} className="relative group rounded-2xl bg-white transition-all duration-300 overflow-hidden hover:bg-[#ebf9ff] cursor-pointer">
                    <div className="relative p-4 pb-0">
                      <img src={product.image} alt={product.name} className="w-full h-full object-contain mx-auto rounded-2xl" />
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
                            <span className="text-gray-400 text-sm line-through font-medium">{product.originalPrice}</span>
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
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.35 2.7a1 1 0 00.9 1.5H19M16 21a1 1 0 100-2 1 1 0 000 2zm-8 0a1 1 0 100-2 1 1 0 000 2z" />
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