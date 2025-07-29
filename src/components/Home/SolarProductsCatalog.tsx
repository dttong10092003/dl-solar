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
        <div className="w-full min-h-screen bg-[#ebf9ff] py-6 px-6 md:px-28">
            <div className="w-full min-h-screen bg-white py-2 px-6 rounded-2xl">
                {/* Main Title */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8">
                        Sản phẩm của chúng tôi
                    </h1>

                    {/* Category Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`cursor-pointer px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${activeCategory === category.id
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-6">
                        {filteredProducts.map((product) => (
                            <div
                                key={product.id}
                                className="relative group rounded-2xl bg-white transition-all duration-300 overflow-hidden hover:bg-[#ebf9ff] cursor-pointer"
                            >
                                {/* Image */}
                                <div className="relative p-4 pb-0">
                                    <img
                                        src={product.image || "/placeholder.svg"}
                                        alt={product.name}
                                        className="w-full h-full object-contain mx-auto transition-transform duration-300 rounded-2xl"
                                    />
                                    {product.discount && (
                                        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full shadow">
                                            -{product.discount}%
                                        </span>
                                    )}
                                </div>

                                {/* Info */}
                                <div className="p-4 pt-2">
                                    <h3 className="text-gray-800 text-sm font-medium min-h-[40px] leading-relaxed mb-3 text-center transition-colors duration-200 group-hover:text-yellow-500 cursor-pointer line-clamp-2">
                                        {product.name}
                                    </h3>
                                    <div className="text-center mb-4">
                                        {product.originalPrice ? (
                                            <div className="flex justify-between items-center text-blue-900 font-bold text-lg gap-2">
                                                <span>{formatPrice(product.currentPrice)}</span>
                                                <span className="text-gray-400 text-sm line-through">
                                                    {formatPrice(product.originalPrice)}
                                                </span>
                                            </div>
                                        ) : (
                                            <div className="text-blue-900 font-bold text-lg">
                                                {formatPrice(product.currentPrice)}
                                            </div>
                                        )}
                                    </div>


                                    {/* Hover-only button */}
                                    <div className="opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-2 transition-all duration-300">
                                        <button
                                            onClick={() => handleAddToCart(product.id)}
                                            className="w-full bg-white border-2 border-blue-900 text-blue-900 font-medium py-2 rounded-full flex items-center justify-center gap-2 hover:border-yellow-500 hover:bg-yellow-500 hover:text-white transition-all cursor-pointer"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.35 2.7a1 1 0 00.9 1.5H19M16 21a1 1 0 100-2 1 1 0 000 2zm-8 0a1 1 0 100-2 1 1 0 000 2z" />
                                            </svg>
                                            Thêm vào giỏ
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* View All */}
                    <div className="text-center">
                        <button className="cursor-pointer bg-white text-blue-900 border-2 border-blue-900 px-8 py-3 rounded-full font-medium hover:border-yellow-500 hover:bg-yellow-500 hover:text-white transition-all duration-300">
                            Xem tất cả
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
