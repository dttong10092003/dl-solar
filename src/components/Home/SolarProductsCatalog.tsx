import { useState } from "react";
import { products } from "../../data"
import { formatPrice } from "../../utils/format";

export default function SolarProductsCatalog() {
    const [activeCategory, setActiveCategory] = useState(1);

    const categories = [
        { id: 1, name: "Đèn cao cấp" },
        { id: 2, name: "Trụ sân vườn" },
        { id: 3, name: "Quạt" },
        { id: 4, name: "Phụ kiện" },
        { id: 5, name: "Bộ lưu điện" },
    ];


    const handleAddToCart = (productId: number) => {
        console.log(`Added product ${productId} to cart`);
    };

    const filteredProducts = products.filter(
        (product) => product.categoryId === activeCategory
    );

    return (
        <div className="w-full min-h-screen bg-[#ebf9ff] py-4 lg:py-6 px-4 lg:px-6 xl:px-28">
            <div className="w-full min-h-screen bg-white py-4 lg:py-2 px-4 lg:px-6 rounded-xl lg:rounded-2xl">
                {/* Main Title */}
                <div className="text-center mb-8 lg:mb-12">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-900 mb-6 lg:mb-8">
                        Sản phẩm của chúng tôi
                    </h1>

                    {/* Category Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-2 lg:gap-4 mb-8 lg:mb-12">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`cursor-pointer px-3 lg:px-6 py-2 lg:py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 text-sm lg:text-base ${activeCategory === category.id
                                    ? "bg-yellow-400 text-white shadow-lg hover:bg-yellow-500"
                                    : "bg-white text-blue-900 border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50 hover:shadow-md"
                                    }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Products Grid */}
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-3 lg:gap-6 mb-6">
                        {filteredProducts.map((product) => (
                            <div
                                key={product.id}
                                className="relative group rounded-xl lg:rounded-2xl bg-white transition-all duration-300 overflow-hidden hover:bg-[#ebf9ff] cursor-pointer"
                            >
                                {/* Image */}
                                <div className="relative p-2 lg:p-4 pb-0">
                                    <img
                                        src={product.image || "/placeholder.svg"}
                                        alt={product.name}
                                        className="w-full h-24 sm:h-32 lg:h-full object-contain mx-auto transition-transform duration-300 rounded-xl lg:rounded-2xl"
                                    />
                                    {product.discount && (
                                        <span className="absolute top-1 lg:top-3 left-1 lg:left-3 bg-red-500 text-white text-xs font-semibold px-1 lg:px-2 py-0.5 lg:py-1 rounded-full shadow">
                                            -{product.discount}%
                                        </span>
                                    )}
                                </div>

                                {/* Info */}
                                <div className="p-2 lg:p-4 pt-1 lg:pt-2">
                                    <h3 className="text-gray-800 text-xs lg:text-sm font-medium min-h-[32px] lg:min-h-[40px] leading-relaxed mb-2 lg:mb-3 text-center transition-colors duration-200 group-hover:text-yellow-500 cursor-pointer line-clamp-2">
                                        {product.name}
                                    </h3>
                                    <div className="text-center mb-2 lg:mb-4">
                                        {product.originalPrice ? (
                                            <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center text-blue-900 font-bold text-sm lg:text-lg gap-1 lg:gap-2">
                                                <span className="text-sm lg:text-base">{formatPrice(product.currentPrice)}</span>
                                                <span className="text-gray-400 text-xs lg:text-sm line-through">
                                                    {formatPrice(product.originalPrice)}
                                                </span>
                                            </div>
                                        ) : (
                                            <div className="text-blue-900 font-bold text-sm lg:text-lg">
                                                {formatPrice(product.currentPrice)}
                                            </div>
                                        )}
                                    </div>


                                    {/* Hover-only button */}
                                    <div className="opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-2 transition-all duration-300">
                                        <button
                                            onClick={() => handleAddToCart(product.id)}
                                            className="w-full bg-white border-2 border-blue-900 text-blue-900 font-medium py-1 lg:py-2 rounded-full flex items-center justify-center gap-1 lg:gap-2 hover:border-yellow-500 hover:bg-yellow-500 hover:text-white transition-all cursor-pointer text-xs lg:text-sm"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-3 w-3 lg:h-4 lg:w-4"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.35 2.7a1 1 0 00.9 1.5H19M16 21a1 1 0 100-2 1 1 0 000 2zm-8 0a1 1 0 100-2 1 1 0 000 2z" />
                                            </svg>
                                            <span className="hidden lg:inline">Thêm vào giỏ</span>
                                            <span className="lg:hidden">Mua</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* View All */}
                    <div className="text-center">
                        <button className="cursor-pointer bg-white text-blue-900 border-2 border-blue-900 px-6 lg:px-8 py-2 lg:py-3 rounded-full font-medium hover:border-yellow-500 hover:bg-yellow-500 hover:text-white transition-all duration-300 text-sm lg:text-base">
                            Xem tất cả
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
