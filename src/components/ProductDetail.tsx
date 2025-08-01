import { Minus, Plus, ShoppingCart, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import clsx from "clsx";
import { products } from "../data";
import { formatPrice } from "../utils/format";
import SuccessModal from "./SuccessModal";
import { useCart } from "../hooks/useCart";

interface Article {
    id: number
    title: string
    image: string
    date: string
    excerpt: string
    categoryId: number
}

export default function ProductDetail() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const productId = id ? parseInt(id) : null;
    const product = products.find(p => p.id === productId);
    const { cart, addToCart } = useCart();

    const [activeTab, setActiveTab] = useState("description");
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(product?.image || "");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const [addedProduct, setAddedProduct] = useState<typeof product | null>(null);

    // Update selectedImage when product changes
    useEffect(() => {
        if (product?.image) {
            setSelectedImage(product.image);
        }
        // Reset quantity when product changes
        setQuantity(1);
    }, [product?.image, product?.id]);

    const news: Article[] = [
        {
            id: 1,
            title: "Phát triển bền vững là gì? Các mục tiêu phát triển bền vững",
            image: "https://bizweb.dktcdn.net/100/487/020/articles/8-db826524-76aa-4d6c-a11c-7a0ac7ead6da.jpg?v=1685089847453",
            date: "26/05/2023",
            excerpt: "Động lực tăng trưởng kinh tế đã dẫn đến nhiều hệ lụy như suy thoái môi trường và chênh lệch xã hội. Do đó phát triển bền vững đã được đặt ra nhằm.",
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
    ];

    const thumbnails = product?.thumbnails || [];

    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollBy = (offset: number) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
        }
    };

    const handleQuantityChange = (delta: number) => {
        setQuantity((prev) => Math.max(0, prev + delta));
    };

    const openImageModal = () => setIsModalOpen(true);
    const closeImageModal = () => setIsModalOpen(false);

    // Replace the existing handleAddToCart function
    const handleAddToCart = (productToAdd: typeof product) => {
        if (productToAdd) {
            addToCart(productToAdd, quantity);
            console.log(`Added product ${productToAdd.id} with quantity ${quantity} to cart`);
            setAddedProduct(productToAdd);
            setIsSuccessModalOpen(true);
        }
    };

    // Helper function for adding product from list
    const handleAddProductToCart = (productId: number) => {
        const productToAdd = products.find(p => p.id === productId);
        if (productToAdd) {
            addToCart(productToAdd, 1); // Default quantity 1 for quick add
            console.log(`Added product ${productToAdd.id} with quantity 1 to cart`);
            setAddedProduct(productToAdd);
            setIsSuccessModalOpen(true);
        }
    };

    if (!product) {
        return (
            <div className="min-h-screen bg-[#eef6fc] p-4 flex items-center justify-center">
                <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
                    <h1 className="text-2xl font-semibold text-gray-900 mb-4">
                        Sản phẩm không tồn tại
                    </h1>
                    <p className="text-gray-600 mb-6">
                        Sản phẩm bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.
                    </p>
                    <button
                        onClick={() => window.history.back()}
                        className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded-lg"
                    >
                        Quay lại
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#eef6fc] p-4 py-8">
            <div className="max-w-7xl mx-auto font-semibold pb-10">
                <div className="flex flex-col lg:flex-row gap-6 items-stretch">
                    {/* LEFT: Image + Thumbnails */}
                    <div className="w-full flex flex-col gap-4 lg:flex-[2] max-w-full lg:max-w-[calc(100%*2/6)]">
                        <div
                            className="bg-white rounded-2xl p-4 shadow-sm h-full cursor-zoom-in"
                            onClick={openImageModal}
                        >
                            <img
                                src={selectedImage}
                                alt="Ảnh sản phẩm"
                                className="w-full h-auto object-contain rounded-xl"
                            />
                        </div>

                        {/* Thumbnails */}
                        <div className="bg-white rounded-2xl p-4 h-full relative overflow-hidden">
                            <button
                                onClick={() => scrollBy(-120)}
                                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full p-1 hover:bg-gray-100"
                            >
                                <ChevronLeft className="w-5 h-5 cursor-pointer" />
                            </button>
                            <div
                                ref={scrollRef}
                                className="flex gap-2 overflow-x-auto flex-nowrap scroll-smooth scrollbar-hide"
                            >
                                {thumbnails.map((src, i) => (
                                    <div
                                        key={i}
                                        onClick={() => setSelectedImage(src)}
                                        className={clsx(
                                            "min-w-[80px] h-20 rounded-lg overflow-hidden cursor-pointer shrink-0",
                                            selectedImage === src
                                                ? "border-2 border-blue-600"
                                                : "border border-gray-300"
                                        )}
                                    >
                                        <img
                                            src={src}
                                            alt={`Thumb ${i + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                            <button
                                onClick={() => scrollBy(120)}
                                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full p-1 hover:bg-gray-100"
                            >
                                <ChevronRight className="w-5 h-5 cursor-pointer" />
                            </button>
                        </div>
                    </div>

                    {/* CENTER: Info */}
                    <div className="w-full flex flex-col lg:flex-[2.5]">
                        <div className="bg-white rounded-2xl p-6 shadow-sm h-full flex flex-col justify-between">
                            <div className="space-y-6">
                                <h1 className="text-2xl lg:text-2xl font-semibold text-gray-900">
                                    {product.name}
                                </h1>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <span className="text-gray-600 font-semibold">Tình trạng:</span>
                                        <span className="text-blue-500">Còn hàng</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-gray-600 font-semibold">Mã sản phẩm:</span>
                                        <span className="text-blue-500">{product.id}</span>
                                    </div>
                                </div>
                                <div className="space-y-2 bg-[#eef6fc] p-2 rounded-lg">
                                    <div className="flex items-baseline gap-3">
                                        <span className="text-3xl font-semibold text-blue-900">
                                            {formatPrice(product.currentPrice)}
                                        </span>
                                        {product.originalPrice && (
                                            <span className="text-gray-400 line-through font-semibold">
                                                {formatPrice(product.originalPrice)}
                                            </span>
                                        )}
                                    </div>
                                    {product.originalPrice && (
                                        <div className="flex items-center gap-2">
                                            <span className="text-gray-600 font-semibold">Tiết kiệm:</span>
                                            <span className="text-red-500 font-semibold">
                                                {formatPrice(product.originalPrice - product.currentPrice)}
                                            </span>
                                        </div>
                                    )}
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-gray-700 font-semibold mb-2">Số lượng:</label>
                                        <div className="flex items-center">
                                            <button
                                                className="cursor-pointer h-10 w-10 rounded-l-lg bg-blue-900 text-white hover:bg-blue-800 flex items-center justify-center"
                                                onClick={() => handleQuantityChange(-1)}
                                            >
                                                <Minus className="h-4 w-4" />
                                            </button>
                                            <div className="h-10 w-16 border-t border-b border-gray-300 flex items-center justify-center bg-white">
                                                <span className="font-medium">{quantity}</span>
                                            </div>
                                            <button
                                                className="cursor-pointer h-10 w-10 rounded-r-lg bg-blue-900 text-white hover:bg-blue-800 flex items-center justify-center"
                                                onClick={() => handleQuantityChange(1)}
                                            >
                                                <Plus className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="w-full border-2 border-blue-900 rounded-lg hover:border-yellow-500 transition-colors duration-400 cursor-pointer">
                                        <button
                                            className="w-full h-12 flex items-stretch overflow-hidden bg-blue-900 hover:bg-yellow-500 transition-colors duration-200 cursor-pointer rounded-sm"
                                            onClick={() => handleAddToCart(product)}
                                        >
                                            <div className="bg-white flex items-center justify-center px-4 py-2 m-0.5 rounded-l-sm">
                                                <ShoppingCart className="w-6 h-6 text-blue-900" />
                                            </div>
                                            <div className="flex-1 flex flex-col items-center justify-center py-3 px-6 text-white rounded-lg">
                                                <span className="text-lg font-bold tracking-wide">THÊM VÀO GIỎ</span>
                                                <span className="text-sm opacity-90">Giao hàng tận nơi miễn phí</span>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Support */}
                    <div className="w-full flex flex-col lg:flex-[1.5]">
                        <div className="bg-white rounded-2xl p-6 shadow-sm h-full flex flex-col text-center space-y-4">
                            <div>
                                <h3 className="font-bold text-gray-900 text-sm leading-tight">
                                    CHÚNG TÔI LUÔN SẴN SÀNG <br /> ĐỂ GIÚP ĐỠ BẠN
                                </h3>
                                <div className="flex justify-center mt-4">
                                    <img
                                        src="https://bizweb.dktcdn.net/100/425/892/themes/819335/assets/evo_product_support.jpg?1678155331448"
                                        alt="Customer support"
                                        className="object-contain w-40 h-40"
                                    />
                                </div>
                                <div className="space-y-2 mt-4">
                                    <p className="text-sm text-gray-600">Để được hỗ trợ tốt nhất. Hãy gọi</p>
                                    <div className="text-3xl font-semibold text-blue-900 hover:text-yellow-500 transition-colors duration-400 cursor-pointer">
                                        1900 6750
                                    </div>
                                    <p className="text-sm text-gray-600">Hoặc</p>
                                    <p className="font-medium text-gray-900">Chat hỗ trợ trực tuyến</p>
                                </div>
                            </div>
                            <button className="w-full bg-blue-900 hover:bg-yellow-500 text-white font-medium rounded-lg h-11 transition-colors duration-400 cursor-pointer">
                                Chat với chúng tôi
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 font-semibold pb-10">
                <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
                    <div className="flex mb-6">
                        <button
                            className={`cursor-pointer px-6 py-3 text-lg font-semibold rounded-t-lg transition-colors duration-200 ${activeTab === "description" ? "bg-[#2A4365] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                            onClick={() => setActiveTab("description")}
                        >
                            MÔ TẢ SẢN PHẨM
                        </button>
                        <button
                            className={`cursor-pointer px-6 py-3 text-lg font-semibold rounded-t-lg transition-colors duration-200 ${activeTab === "guide" ? "bg-[#2A4365] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                            onClick={() => setActiveTab("guide")}
                        >
                            HƯỚNG DẪN MUA HÀNG
                        </button>
                    </div>
                    <div className="prose max-w-none text-gray-700 border-1 p-2 rounded-sm">
                        {activeTab === "description" ? (
                            <div className="space-y-4">
                                <p className="font-semibold text-sm">
                                    {product?.description || "Thông tin mô tả sản phẩm đang được cập nhật..."}
                                </p>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <p className="font-semibold text-sm"><span className="font-bold">Bước 1:</span> Truy cập website và lựa chọn sản phẩm cần mua</p>
                                <p className="font-semibold text-sm"><span className="font-bold">Bước 2:</span> Click vào sản phẩm muốn mua, màn hình hiển thị ra pop up với các lựa chọn sau</p>
                                <p className="font-semibold text-sm">Nếu bạn muốn tiếp tục mua hàng: Bấm vào phần tiếp tục mua hàng để lựa chọn thêm sản phẩm vào giỏ hàng</p>
                                <p className="font-semibold text-sm">Nếu bạn muốn xem giỏ hàng để cập nhật sản phẩm: Bấm vào xem giỏ hàng</p>
                                <p className="font-semibold text-sm">Nếu bạn muốn đặt hàng và thanh toán cho sản phẩm này vui lòng bấm vào: Đặt hàng và thanh toán</p>
                                <p className="font-semibold text-sm"><span className="font-bold">Bước 3:</span> Lựa chọn thông tin tài khoản thanh toán</p>
                                <p className="font-semibold text-sm">Nếu bạn đã có tài khoản vui lòng nhập thông tin tên đăng nhập là email và mật khẩu mua được đã có tài khoản trên hệ thống</p>
                                <p className="font-semibold text-sm">Nếu bạn chưa có tài khoản và muốn đăng ký tài khoản vui lòng điền các thông tin cá nhân để tiếp tục đăng ký tài khoản. Khi có tài khoản bạn sẽ dễ dàng theo dõi đơn hàng của mình</p>
                                <p className="font-semibold text-sm">Nếu bạn muốn mua hàng mà không cần tài khoản vui lòng nhấp chuột vào mục đặt hàng không cần tài khoản</p>
                                <p className="font-semibold text-sm"><span className="font-bold">Bước 4:</span> Điền các thông tin của bạn để nhận đơn hàng, lựa chọn hình thức thanh toán và vận chuyển cho đơn hàng của mình</p>
                                <p className="font-semibold text-sm"><span className="font-bold">Bước 5:</span> Xem lại thông tin đặt hàng, điền chú thích và gửi đơn hàng</p>
                                <p className="font-semibold text-sm">Sau khi nhận được đơn hàng bạn gọi chúng tôi sẽ liên hệ bằng cách gọi điện lại để xác nhận lại đơn hàng và địa chỉ của bạn.</p>
                                <p className="font-semibold text-sm">Trân trọng cảm ơn.</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className="lg:col-span-1 bg-white rounded-lg shadow-sm">
                    <div className="rounded-t-lg py-4 px-6">
                        <h2 className="text-2xl font-semibold text-[#003366]">Tin tức mới nhất</h2>
                    </div>
                    <div className="p-6 space-y-8">
                        {news.slice(0, 4).map((item, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <img
                                    src={item.image || "/placeholder.svg"}
                                    alt={item.title}
                                    className="w-30 h-20 rounded-md object-cover flex-shrink-0"
                                />
                                <div>
                                    <h3 className="text-[#003366] font-semibold hover:text-yellow-500 cursor-pointer line-clamp-2">{item.title}</h3>
                                </div>
                            </div>
                        ))}
                        <div className="pt-8">
                            <button className="w-full border border-blue-800 text-blue-800 hover:border-yellow-500 hover:bg-yellow-500 hover:text-white bg-transparent py-2 px-4 rounded-xl transition-colors cursor-pointer">
                                Xem tất cả
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto py-2 px-6 rounded-2xl bg-white mb-10">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8">
                        Sản phẩm liên quan
                    </h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-6">
                    {products.slice(0, 5).map((product) => (
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
            </div>

            <div className="max-w-7xl mx-auto py-2 px-6 rounded-2xl bg-white mb-10">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8">
                        Sản phẩm đã xem
                    </h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-6">
                    {products.slice(0, 4).map((product) => (
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
            </div>

            {/* Update the SuccessModal usage to pass cartItemCount */}
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
                onContinueShopping={() => {
                    setIsSuccessModalOpen(false);
                }}
                onCheckout={() => {
                    setIsSuccessModalOpen(false);
                    // Navigate to checkout page
                    console.log("Go to checkout");
                }}
            />

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex items-center justify-center">
                    <div className="relative max-w-4xl w-full px-4">
                        <button
                            onClick={closeImageModal}
                            className="absolute top-2 right-2 text-white hover:text-red-400 bg-black bg-opacity-50 rounded-full p-2"
                        >
                            <X size={28} />
                        </button>
                        <img
                            src={selectedImage}
                            alt="Zoomed"
                            className="w-full max-h-[80vh] object-contain rounded-lg"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}