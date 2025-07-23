import { useEffect, useState } from 'react'
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
    const texts = [
        'Dola Solar xin chào!',
        'Cùng nhau chung tay vì môi trường!',
        'Hãy sử dụng năng lượng sạch!',
    ];

    const [index, setIndex] = useState(0);
    const [showProductMenu, setShowProductMenu] = useState(false);
    const [showNewsMenu, setShowNewsMenu] = useState(false);

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
                                        <div className="text-gray-700 cursor-pointer hover:text-[#f3bd01]">Đăng ký</div>
                                        <div className="text-gray-700 cursor-pointer hover:text-[#f3bd01]">Đăng nhập</div>
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
                                    {[
                                        "Trang chủ",
                                        "Giới thiệu",
                                        "Sản phẩm",
                                        "Tin tức",
                                        "Câu hỏi thường gặp",
                                        "Thư viện ảnh",
                                        "Liên hệ",
                                        "Đặt lịch khảo sát",
                                    ].map((label, i) => {
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
                                                <button className="text-white px-4 py-4 hover:bg-[#F3BD01] transition-colors cursor-pointer flex items-center">
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
                                        <li className="hover:text-yellow-500 cursor-pointer">Tin tức điện mặt trời</li>
                                        <li className="hover:text-yellow-500 cursor-pointer">Kiến thức hữu ích</li>
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
                                        <div>
                                            <h4 className="font-bold mb-2 text-blue-900">Đèn cao cấp</h4>
                                            <ul className="space-y-1">
                                                <li className="hover:text-yellow-500 cursor-pointer">Đèn pha cao cấp</li>
                                                <li className="hover:text-yellow-500 cursor-pointer">Đèn đường cao cấp</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-bold mb-2 text-blue-900">Đèn pha</h4>
                                            <ul className="space-y-1">
                                                <li className="hover:text-yellow-500 cursor-pointer">Đèn pha ngoài trời</li>
                                                <li className="hover:text-yellow-500 cursor-pointer">Đèn pha trong nhà</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-bold mb-2 text-blue-900">Đèn đường</h4>
                                            <ul className="space-y-1">
                                                <li className="hover:text-yellow-500 cursor-pointer">Đèn liển thể</li>
                                                <li className="hover:text-yellow-500 cursor-pointer">Đèn tấm pin rời</li>
                                                <li className="hover:text-yellow-500 cursor-pointer">Đèn bộ lưu điện rời</li>
                                                <li className="hover:text-yellow-500 cursor-pointer">Đèn chiếc lá</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-bold mb-2 text-blue-900">Trụ sân vườn</h4>
                                            <ul className="space-y-1">
                                                <li className="hover:text-yellow-500 cursor-pointer">Đèn trụ sân vườn tròn</li>
                                                <li className="hover:text-yellow-500 cursor-pointer">Đèn trụ sân vườn vuông</li>
                                                <li className="hover:text-yellow-500 cursor-pointer">Đèn trụ sân vườn nấm</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-bold mb-2 text-blue-900">Quạt</h4>
                                            <ul className="space-y-1">
                                                <li className="hover:text-yellow-500 cursor-pointer">Quạt cao cấp</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-bold mb-2 text-blue-900">Phụ kiện</h4>
                                            <ul className="space-y-1">
                                                <li className="hover:text-yellow-500 cursor-pointer">Dây nối</li>
                                                <li className="hover:text-yellow-500 cursor-pointer">Pin lưu trữ</li>
                                                <li className="hover:text-yellow-500 cursor-pointer">Trụ & phụ kiện lắp đặt</li>
                                                <li className="hover:text-yellow-500 cursor-pointer">Cần đèn chiếu sáng</li>
                                                <li className="hover:text-yellow-500 cursor-pointer">Khác</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-bold mb-2 text-blue-900">Bộ lưu điện</h4>
                                            <ul className="space-y-1">
                                                <li className="hover:text-yellow-500 cursor-pointer">Bộ lưu điện</li>
                                                <li className="hover:text-yellow-500 cursor-pointer">Máy phát điện</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-bold mb-2 text-blue-900">Đèn ốp trần</h4>
                                            <ul className="space-y-1">
                                                <li className="hover:text-yellow-500 cursor-pointer">Đèn ốp trần cao cấp</li>
                                            </ul>
                                        </div>
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
