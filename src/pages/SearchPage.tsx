import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { products } from '../data';
import { formatPrice } from '../utils/format';
import { useCart } from '../hooks/useCart';
import SuccessModal from '../components/SuccessModal';
import type { Product } from '../types';

const SearchPage = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const { cart, addToCart } = useCart();
    const [searchResults, setSearchResults] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const [addedProduct, setAddedProduct] = useState<Product | null>(null);

    const query = searchParams.get('q') || '';

    useEffect(() => {
        const searchProducts = () => {
            setIsLoading(true);
            
            if (!query.trim()) {
                setSearchResults([]);
                setIsLoading(false);
                return;
            }

            // Tìm kiếm sản phẩm theo tên
            const filteredProducts = products.filter(product =>
                product.name.toLowerCase().includes(query.toLowerCase())
            );

            setSearchResults(filteredProducts);
            setIsLoading(false);
        };

        searchProducts();
    }, [query]);

    const handleAddProductToCart = (productId: number) => {
        const product = products.find(p => p.id === productId);
        if (product) {
            addToCart(product, 1);
            setAddedProduct(product);
            setIsSuccessModalOpen(true);
        }
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-[#eef6fc] p-4 py-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-center py-20">
                        <div className="text-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900 mx-auto mb-4"></div>
                            <p className="text-gray-600">Đang tìm kiếm...</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#eef6fc] p-4 py-8">
            <div className="max-w-7xl mx-auto py-2 px-6 rounded-2xl bg-white mb-10">
                <div className="mt-6 mb-10">
                    <p className="text-lg font-semibold text-gray-900">
                        Có {searchResults.length} kết quả tìm kiếm phù hợp
                    </p>
                </div>

                {searchResults.length === 0 ? (
                    <div className="text-center py-20">
                        <div className="text-6xl mb-4">🔍</div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">
                            Không tìm thấy sản phẩm nào
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Hãy thử tìm kiếm với từ khóa khác hoặc xem tất cả sản phẩm của chúng tôi
                        </p>
                        <button
                            onClick={() => navigate('/products')}
                            className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-yellow-500 transition-colors cursor-pointer"
                        >
                            Xem tất cả sản phẩm
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 mb-6">
                        {searchResults.map((product) => (
                            <div
                                key={product.id}
                                className="relative group rounded-2xl bg-white transition-all duration-300 overflow-hidden hover:bg-[#ebf9ff] cursor-pointer"
                                onClick={() => navigate(`/product/${product.id}`)}
                            >
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
                                <div className="p-4 pt-2">
                                    <h3 className="text-gray-800 text-sm font-medium min-h-[40px] leading-relaxed mb-3 text-center transition-colors duration-200 group-hover:text-yellow-500 cursor-pointer line-clamp-2">
                                        {product.name}
                                    </h3>
                                    <div className="text-center mb-2 lg:mb-4">
                                        {product.originalPrice ? (
                                            <div className="space-y-1 lg:flex lg:justify-center lg:items-center lg:gap-2 lg:space-y-0">
                                                <div className="text-blue-900 font-bold text-sm lg:text-lg">
                                                    {formatPrice(product.currentPrice)}
                                                </div>
                                                <div className="text-gray-400 text-xs lg:text-sm line-through font-medium">
                                                    {formatPrice(product.originalPrice)}
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="text-blue-900 font-bold text-sm lg:text-lg">
                                                {formatPrice(product.currentPrice)}
                                            </div>
                                        )}
                                    </div>
                                    <div className="opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-2 transition-all duration-300">
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleAddProductToCart(product.id);
                                            }}
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
                )}
            </div>

            <SuccessModal
                isOpen={isSuccessModalOpen}
                setIsOpen={setIsSuccessModalOpen}
                product={addedProduct ? { 
                    id: addedProduct.id, 
                    name: addedProduct.name, 
                    image: addedProduct.image, 
                    currentPrice: addedProduct.currentPrice 
                } : null}
                cartItemCount={cart.totalItems}
            />
        </div>
    );
};

export default SearchPage;
