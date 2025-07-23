export default function CustomerTestimonials() {
    const testimonials = [
        {
            id: 1,
            name: "Hoàng Dung",
            position: "Nhân viên văn phòng",
            avatar: "https://bizweb.dktcdn.net/100/487/020/themes/911678/assets/danhgia_1.jpg?1735875826317",
            testimonial:
                "Năm nay nhà nước đang khuyến khích mọi người dùng Điện Mặt Trời để giảm hóa đơn tiền điện, lại được EVN mua lại nên tôi lắp ngay 20Kwp cho nhà sử dụng. Không mong bán lại nhưng mỗi tháng thấy tôi khoản có thêm tiền bán điện, rất vui vì sử dụng điện không phải nghĩ như trước mà lại được thêm tiền.",
        },
        {
            id: 2,
            name: "Hồng Liêm",
            position: "Nhân viên văn phòng",
            avatar: "https://bizweb.dktcdn.net/100/487/020/themes/911678/assets/danhgia_2.jpg?1735875826317",
            testimonial:
                "Nhà tôi có Chung cư mini cho thuê, nên việc đầu tư Điện Mặt Trời đã được tôi cân nhắc tính toán từ rất lâu rồi. Nay lựa chọn Dola để triển khai với bộ sản phẩm đồng bộ thì rất yên tâm, khi có bất cứ vấn đề gì gọi Dola hỗ trợ, khỏi lo nghĩ nhà cung cấp này nhà sản xuất nọ, tất cả quy về một mối vận hành.",
        },
        {
            id: 3,
            name: "Ngọc Tuyến",
            position: "Nhân viên văn phòng",
            avatar: "https://bizweb.dktcdn.net/100/487/020/themes/911678/assets/danhgia_3.jpg?1735875826317",
            testimonial:
                "Năm nay nhà nước đang khuyến khích mọi người dùng Điện Mặt Trời để giảm hóa đơn tiền điện, lại được EVN mua lại nên tôi lắp ngay 20Kwp cho nhà sử dụng. Không mong bán lại nhưng mỗi tháng thấy tôi khoản có thêm tiền bán điện, rất vui vì sử dụng điện không phải nghĩ như trước mà lại được thêm tiền.",
        },
    ]

    return (
        <div
            className="w-full min-h-screen py-16 px-6 relative"
            style={{
                backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.8), rgba(59, 130, 246, 0.7)), url('https://bizweb.dktcdn.net/100/487/020/themes/911678/assets/background_danhgia.jpg?1705897467173')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Title */}
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-semibold text-white mb-30">Đánh giá từ khách hàng</h1>
            </div>

            {/* Testimonials Grid */}
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-white rounded-2xl p-8 relative"
                        >
                            {/* Avatar */}
                            <div className="flex justify-center mb-2 -mt-30">
                                <div className="relative ">
                                    <img
                                        src={testimonial.avatar || "/placeholder.svg"}
                                        alt={testimonial.name}
                                        className="w-50 h-50 rounded-full object-cover border-8 border-blue-900"
                                    />
                                </div>
                            </div>

                            {/* Customer Info */}
                            <div className="text-center mb-6 border-b-2 border-blue-900 pb-2">
                                <h3 className="text-3xl font-semibold text-blue-900">
                                    {testimonial.name}
                                </h3>
                                <p className="text-yellow-500 font-semibold text-base">
                                    {testimonial.position}
                                </p>
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-gray-700 text-base leading-relaxed text-justify">
                                {testimonial.testimonial}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
