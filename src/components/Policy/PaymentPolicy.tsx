export default function PaymentPolicyPage() {
    return (
        <div className="bg-[#eef6fc] py-10 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Section: Khách hàng thanh toán trực tiếp tại cửa hàng */}
                <h1 className="text-sm font-bold text-gray-800 mb-4">Khách hàng thanh toán trực tiếp tại cửa hàng</h1>
                <div className="space-y-2 text-gray-700 mb-6">
                    <p className="flex items-start font-semibold text-sm">
                        <span className="mr-2 text-gray-700">+</span> Nhận ưu đãi
                    </p>
                    <p className="flex items-start font-semibold text-sm">
                        <span className="mr-2 text-gray-700 font-semibold text-sm">+</span> Nhận quà tặng kèm
                    </p>
                    <p className="flex items-start font-semibold text-sm">
                        <span className="mr-2 text-gray-700 font-semibold text-sm">+</span> Checkin tại cửa hàng
                    </p>
                </div>

                {/* Section: Khách hàng thanh toán online */}
                <h1 className="text-sm font-bold text-gray-800 mb-4">Khách hàng thanh toán online</h1>
                <div className="space-y-2 text-gray-700 mb-6">
                    <p className="flex items-start font-semibold text-sm">
                        <span className="mr-2 text-gray-700 font-semibold text-sm">+</span> Chuyển khoản trước khi nhận hàng
                    </p>
                    <p className="flex items-start font-semibold text-sm">
                        <span className="mr-2 text-gray-700 font-semibold text-sm">+</span> Quà tặng kèm bất kỳ
                    </p>
                </div>

                {/* Additional Notes */}
                <p className="text-gray-700 mb-4 font-semibold text-sm">
                    Khách hàng có nhu cầu khiếu nại, đổi trả sản phẩm do lỗi của Dola có thể liên hệ qua Hotline 1900 6750 để được
                    hỗ trợ sớm nhất.
                </p>
                <p className="text-gray-700 font-semibold text-sm">
                    Tư vấn viên sẽ hướng dẫn khách hàng các bước cần thiết để tiến hành trả thanh toán.
                </p>
            </div>
        </div>
    )
}
