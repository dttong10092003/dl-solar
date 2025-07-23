import { ShoppingCart } from "lucide-react";
import { useState } from "react";

export default function SolarProductsCatalog() {
    const [activeCategory, setActiveCategory] = useState(1);

    const categories = [
        { id: 1, name: "Đèn cao cấp" },
        { id: 2, name: "Trụ sân vườn" },
        { id: 3, name: "Quạt" },
        { id: 4, name: "Phụ kiện" },
        { id: 5, name: "Bộ lưu điện" },
    ];

    const products = [
        {
            id: 1,
            name: "Đèn đường năng lượng mặt trời 30WĐèn đường năng lượng mặt trời 30WĐèn đường năng lượng mặt trời 30W",
            image:
                "https://bizweb.dktcdn.net/thumb/large/100/487/020/products/csd02-sl-70w-1.jpg?v=1685007549850",
            currentPrice: "4.070.000₫",
            originalPrice: "4.200.000₫",
            discount: 3,
            categoryId: 1,
        },
        {
            id: 2,
            name: "Đèn đường năng lượng mặt trời 100W",
            image:
                "https://bizweb.dktcdn.net/thumb/large/100/487/020/products/csd02-sl-70w-1.jpg?v=1685007549850",
            currentPrice: "25.322.000₫",
            originalPrice: null,
            discount: null,
            categoryId: 1,
        },
        {
            id: 3,
            name: "Trụ đèn sân vườn hiện đại",
            image:
                "https://bizweb.dktcdn.net/thumb/large/100/487/020/products/04-c149d567-8812-4416-ab40-231f70e2523e.jpg?v=1685007952180",
            currentPrice: "5.500.000₫",
            originalPrice: "6.000.000₫",
            discount: 8,
            categoryId: 2,
        },
        {
            id: 4,
            name: "Quạt năng lượng mặt trời mini",
            image: "https://bizweb.dktcdn.net/thumb/large/100/487/020/products/04-c149d567-8812-4416-ab40-231f70e2523e.jpg?v=1685007952180",
            currentPrice: "1.200.000₫",
            originalPrice: "1.400.000₫",
            discount: 14,
            categoryId: 3,
        },
        {
            id: 5,
            name: "Bộ lưu điện 1000W",
            image:
                "https://bizweb.dktcdn.net/thumb/large/100/487/020/products/04-c149d567-8812-4416-ab40-231f70e2523e.jpg?v=1685007952180",
            currentPrice: "7.800.000₫",
            originalPrice: null,
            discount: null,
            categoryId: 5,
        },
        {
            id: 6,
            name: "Phụ kiện đèn đường",
            image:
                "https://bizweb.dktcdn.net/thumb/large/100/487/020/products/04-c149d567-8812-4416-ab40-231f70e2523e.jpg?v=1685007952180",
            currentPrice: "600.000₫",
            originalPrice: "750.000₫",
            discount: 20,
            categoryId: 4,
        },
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
                                                <span>{product.currentPrice}</span>
                                                <span className="text-gray-400 text-sm line-through">
                                                    {product.originalPrice}
                                                </span>
                                            </div>
                                        ) : (
                                            <div className="text-blue-900 font-bold text-lg">
                                                {product.currentPrice}
                                            </div>
                                        )}
                                    </div>


                                    {/* Hover-only button */}
                                    <div className="opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-2 transition-all duration-300">
                                        <button
                                            onClick={() => handleAddToCart(product.id)}
                                            className="w-full bg-white border-2 border-blue-900 text-blue-900 font-medium py-2 rounded-full flex items-center justify-center gap-2 hover:border-yellow-500 hover:bg-yellow-500 hover:text-white transition-all cursor-pointer"
                                        >
                                            <ShoppingCart size={16} />
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
