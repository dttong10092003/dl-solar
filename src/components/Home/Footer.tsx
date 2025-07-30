import { Phone, MessageCircle, ChevronUp } from "lucide-react"
import { useNavigate } from 'react-router-dom'

export default function Footer() {
    const navigate = useNavigate();
    return (
        <>
            {/* Main Footer */}
            <footer className="bg-blue-900 text-white py-8 lg:py-12 px-4 lg:px-6 relative font-semibold">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
                        {/* Company Info - Left Column */}
                        <div className="lg:col-span-2">
                            <div className="flex items-center mb-4 lg:mb-6">
                                <div className="flex-shrink-0">
                                    <img
                                        src="https://bizweb.dktcdn.net/100/487/020/themes/911678/assets/logo-ft.png?1735875826317"
                                        alt="DL Solar Logo"
                                        className="h-16 lg:h-20 w-auto cursor-pointer"
                                    />
                                </div>
                            </div>

                            <p className="text-gray-300 text-sm lg:text-sm font-semibold leading-relaxed mb-4 lg:mb-6">
                                Dola Solar tự hào là đơn vị nhập khẩu tấm pin năng lượng mặt trời giá sỉ tại Đức. Với đội ngũ kỹ sư giàu
                                kinh nghiệm, Việt Nam Solar không chỉ là đơn vị cung cấp giải pháp điện mặt trời hàng đầu Việt Nam đến
                                thời điểm hiện tại.
                            </p>

                            {/* Payment Methods */}
                            <div className="mb-4 lg:mb-6">
                                <h3 className="text-yellow-500 font-bold text-base lg:text-lg mb-3 lg:mb-4">HÌNH THỨC THANH TOÁN</h3>
                                <div className="flex gap-3 lg:gap-4 items-center">
                                    <img src="https://bizweb.dktcdn.net/100/487/020/themes/911678/assets/payment_1.png?1735875826317" alt="Payment 1" className="h-6 lg:h-8 object-contain" />
                                    <img src="https://bizweb.dktcdn.net/100/487/020/themes/911678/assets/payment_2.png?1735875826317" alt="Payment 2" className="h-6 lg:h-8 object-contain" />
                                    <img src="https://bizweb.dktcdn.net/100/487/020/themes/911678/assets/payment_3.png?1735875826317" alt="Payment 3" className="h-6 lg:h-8 object-contain" />
                                </div>
                            </div>
                        </div>

                        {/* Company Contact Info */}
                        <div>
                            <h3 className="text-yellow-500 font-bold text-base lg:text-lg mb-3 lg:mb-4">THÔNG TIN CHUNG</h3>
                            <div className="space-y-2 lg:space-y-3 text-sm text-gray-300">
                                <p><span className="text-yellow-500">Địa chỉ: </span>70 Lữ Gia, Phường 15, Quận 11, TP.HCM</p>
                                <p><span className="text-yellow-500">Điện thoại: </span>1900 6750</p>
                                <p><span className="text-yellow-500">Email: </span>support@sapo.vn</p>
                            </div>

                            {/* Social Media */}
                            <div className="mt-4 lg:mt-6">
                                <h3 className="text-yellow-500 font-bold text-base lg:text-lg mb-3 lg:mb-4">MẠNG XÃ HỘI</h3>
                                <div className="flex gap-2 lg:gap-3 items-center">
                                    <img src="https://bizweb.dktcdn.net/100/487/020/themes/911678/assets/zalo.png?1735875826317" alt="Zalo" className="h-7 w-7 lg:h-8 lg:w-8 object-contain rounded cursor-pointer" />
                                    <img src="https://bizweb.dktcdn.net/100/487/020/themes/911678/assets/facebook.png?1735875826317" alt="Facebook" className="h-7 w-7 lg:h-8 lg:w-8 object-contain rounded cursor-pointer" />
                                    <img src="https://bizweb.dktcdn.net/100/487/020/themes/911678/assets/youtube.png?1735875826317" alt="YouTube" className="h-7 w-7 lg:h-8 lg:w-8 object-contain rounded cursor-pointer" />
                                    <img src="https://bizweb.dktcdn.net/100/487/020/themes/911678/assets/google.png?1735875826317" alt="Google" className="h-7 w-7 lg:h-8 lg:w-8 object-contain rounded cursor-pointer" />
                                </div>
                            </div>
                        </div>

                        {/* Policies */}
                        <div>
                            <h3 className="text-yellow-500 font-bold text-base lg:text-lg mb-3 lg:mb-4">CHÍNH SÁCH</h3>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li><a onClick={() => navigate('/member-policy')} className="hover:text-yellow-500 transition-colors cursor-pointer">Chính sách thành viên</a></li>
                                <li><a onClick={() => navigate('/payment-policy')} className="hover:text-yellow-500 transition-colors cursor-pointer">Chính sách thanh toán</a></li>
                                <li><a href="#" className="hover:text-yellow-500 transition-colors cursor-pointer">Hướng dẫn mua hàng</a></li>
                                <li><a href="#" className="hover:text-yellow-500 transition-colors cursor-pointer">Bảo mật thông tin cá nhân</a></li>
                            </ul>
                        </div>

                        {/* Guides */}
                        <div>
                            <h3 className="text-yellow-500 font-bold text-base lg:text-lg mb-3 lg:mb-4">HƯỚNG DẪN</h3>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li><a href="#" className="hover:text-yellow-500 transition-colors cursor-pointer">Hướng dẫn mua hàng</a></li>
                                <li><a href="#" className="hover:text-yellow-500 transition-colors cursor-pointer">Hướng dẫn thanh toán</a></li>
                                <li><a href="#" className="hover:text-yellow-500 transition-colors cursor-pointer">Đăng ký thành viên</a></li>
                                <li><a href="#" className="hover:text-yellow-500 transition-colors cursor-pointer">Hỗ trợ khách hàng</a></li>
                                <li><a href="#" className="hover:text-yellow-500 transition-colors cursor-pointer">Câu hỏi thường gặp</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Floating Support Buttons */}
                <div className="fixed right-4 lg:right-6 bottom-4 lg:bottom-6 flex flex-col gap-2 lg:gap-3 z-50">
                    <button className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-700 hover:bg-blue-600 rounded-full flex items-center justify-center shadow-lg transition-colors cursor-pointer">
                        <ChevronUp className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                    </button>
                    <button className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-700 hover:bg-blue-600 rounded-full flex items-center justify-center shadow-lg transition-colors cursor-pointer">
                        <Phone className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                    </button>
                    <button className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-500 hover:bg-blue-400 rounded-full flex items-center justify-center shadow-lg transition-colors cursor-pointer">
                        <MessageCircle className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                    </button>
                </div>
            </footer>

            {/* Bottom Copyright */}
            <div className="bg-blue-900 text-center py-3 lg:py-4 px-4 lg:px-6 border-t-1 border-yellow-600 font-semibold">
                <p className="text-gray-400 text-sm lg:text-base">
                    Bản quyền thuộc về <span className="text-yellow-500 font-medium">Torch</span>. Cung cấp bởi{" "}
                    <span className="text-yellow-500 font-semibold">DTT</span>
                </p>
            </div>
        </>
    )
}
