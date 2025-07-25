import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import type { Category, Subcategory } from '../../types'
import {
    Search,
    Phone,
    Mail,
    Clock,
    User,
    ShoppingCart,
    ChevronDown,
} from "lucide-react";

export default function Header() {
    const navigate = useNavigate();

    const newsCategories: { id: number; name: string }[] = [
        { id: 1, name: "Tin tức điện mặt trời" },
        { id: 2, name: "Kiến thức hữu ích" },
    ]
    const navRoutes = {
        "Trang chủ": "/",
        "Giới thiệu": "/about",
        "Sản phẩm": "/products",
        "Tin tức": "/news",
        "Câu hỏi thường gặp": "/faq",
        "Thư viện ảnh": "/gallery",
        "Liên hệ": "/contact",
        "Đặt lịch khảo sát": "/booking",
    };

    const texts = [
        'Dola Solar xin chào!',
        'Cùng nhau chung tay vì môi trường!',
        'Hãy sử dụng năng lượng sạch!',
    ];

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

    const [index, setIndex] = useState(0);
    const [showProductMenu, setShowProductMenu] = useState(false);
    const [showNewsMenu, setShowNewsMenu] = useState(false);

    const handleAuthNavigation = (tab: string) => {
        navigate(`/auth?tab=${tab}`);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % texts.length);
        }, 5000); // 5 giây

        return () => clearInterval(interval); // cleanup khi component unmount
    }, [texts.length]);

    return (
        <header className="w-full font-quicksand font-semibold">
            {/* Top Banner */}
            <div className="bg-[#0d2b6b] text-white text-base">
                <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-1.5">
                    <span className="whitespace-nowrap">{texts[index]}</span>
                    <div className="relative w-[340px]">
                        <input
                            type="text"
                            placeholder="Bạn muốn tìm gì?"
                            className="bg-white text-gray-900 px-5 py-2 pr-12 rounded text-base w-full focus:outline-none focus:ring-0"
                        />
                        <button className="absolute top-0 right-0 h-full px-4 bg-yellow-400 rounded-r hover:bg-yellow-500 cursor-pointer">
                            <Search className="w-4 h-4 text-white" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="bg-blue-50 px-4 pt-4 pb-0">
                <div className="max-w-7xl mx-auto flex justify-between items-start">
                    {/* Logo */}
                    <div className="flex-shrink-0 pt-6">
                        <img
                            src="https://bizweb.dktcdn.net/100/487/020/themes/911678/assets/logo.png?1735875826317"
                            alt="DL Solar Logo"
                            className="h-14 w-auto cursor-pointer"
                        />
                    </div>

                    {/* Contact info + nav */}
                    <div className="flex flex-col w-full pl-8">
                        {/* Contact Info */}
                        <div className="flex justify-around items-center w-full text-base mb-3">
                            <div className="flex items-center space-x-24">
                                <div className="flex items-center space-x-2">
                                    <Phone className="w-5 h-5 text-[#0d2b6b]" />
                                    <div>
                                        <div className="text-gray-700 font-bold">Hotline:</div>
                                        <div className="text-gray-700 cursor-pointer hover:text-[#f3bd01]">1900 6750</div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Mail className="w-5 h-5 text-blue-900" />
                                    <div>
                                        <div className="text-gray-700 font-bold">Email:</div>
                                        <div className="text-gray-700 cursor-pointer hover:text-[#f3bd01]">support@sapo.vn</div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Clock className="w-5 h-5 text-blue-900" />
                                    <div>
                                        <div className="text-gray-700 font-bold">Mở cửa:</div>
                                        <div className="text-gray-700">8h00 - 17h30</div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <User className="w-5 h-5 text-blue-900" />
                                    <div>
                                        <div
                                            className="text-gray-700 cursor-pointer hover:text-[#f3bd01]"
                                            onClick={() => handleAuthNavigation('register')}
                                        >
                                            Đăng ký
                                        </div>
                                        <div
                                            className="text-gray-700 cursor-pointer hover:text-[#f3bd01]"
                                            onClick={() => handleAuthNavigation('login')}
                                        >
                                            Đăng nhập
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <ShoppingCart className="w-5 h-5 text-blue-900" />
                                    <div>
                                        <div className="text-gray-700 font-bold cursor-pointer hover:text-[#f3bd01]">Giỏ hàng</div>
                                        <div className="text-gray-700"><span className="text-[#f3bd01]">0</span> Sản phẩm</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="relative">
                            <nav className="bg-blue-900 rounded-t-xl overflow-hidden">
                                <div className="flex flex-nowrap overflow-x-auto text-base">
                                    {Object.entries(navRoutes).map(([label, path], i) => {
                                        const isProduct = label === 'Sản phẩm';
                                        const isNews = label === "Tin tức";

                                        return (
                                            <div
                                                key={i}
                                                className="relative"
                                                onMouseEnter={() => {
                                                    if (isProduct) setShowProductMenu(true);
                                                    if (isNews) setShowNewsMenu(true);
                                                }}
                                                onMouseLeave={() => {
                                                    if (isProduct) setShowProductMenu(false);
                                                    if (isNews) setShowNewsMenu(false);
                                                }}
                                            >
                                                <button className="text-white px-4 py-4 hover:bg-[#F3BD01] transition-colors cursor-pointer flex items-center"
                                                    onClick={() => navigate(path)}
                                                >
                                                    {label}
                                                    {(isProduct || isNews) && (
                                                        <ChevronDown className="w-4 h-4 ml-1" />
                                                    )}
                                                </button>
                                            </div>

                                        );
                                    })}
                                </div>
                            </nav>
                            {/* Tin tức submenu */}
                            {showNewsMenu && (
                                <div className="absolute top-full left-82 bg-white shadow-lg z-[333] w-60 rounded-md p-4"
                                    onMouseEnter={() => setShowNewsMenu(true)}
                                    onMouseLeave={() => setShowNewsMenu(false)}
                                >
                                    <ul className="space-y-2 text-sm">
                                        {newsCategories.map((category) => (
                                            <li
                                                key={category.id}
                                                className="hover:text-yellow-500 cursor-pointer"
                                                onClick={() => navigate(`/news?category=${category.id}`)}
                                            >
                                                {category.name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {/* Dropdown menu nằm ngoài nav, không bị che */}
                            {showProductMenu && (
                                <div
                                    className="absolute top-full left-0 w-full bg-white shadow-lg z-[333] p-6 rounded-b-xl"
                                    onMouseEnter={() => setShowProductMenu(true)}
                                    onMouseLeave={() => setShowProductMenu(false)}
                                >
                                    <div className="grid grid-cols-4 gap-6">
                                        {categories.map((category) => (
                                            <div key={category.id}>
                                                <div
                                                    className="font-bold mb-2 text-blue-900 cursor-pointer"
                                                    onClick={() => navigate(`/products?category=${category.id}`)}
                                                >
                                                    {category.name}
                                                </div>
                                                <ul className="space-y-1">
                                                    {subcategories
                                                        .filter((sub) => sub.categoryId === category.id)
                                                        .map((sub) => (
                                                            <li
                                                                key={sub.id}
                                                                onClick={() =>
                                                                    navigate(
                                                                        `/products?category=${category.id}&subcategory=${sub.id}`
                                                                    )
                                                                }
                                                                className="hover:text-yellow-500 cursor-pointer"
                                                            >
                                                                {sub.name}
                                                            </li>
                                                        ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}


                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
