export default function SolarBenefitsInfographic() {
    return (
        <div className="w-full bg-[#ebf9ff] py-6 px-6">
            {/* Main Title */}
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-semibold text-[#002c71] mb-4">Công dụng nổi bật</h1>
            </div>

            {/* Main Content Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                {/* Left Column */}
                <div className="space-y-4">
                    {/* Cost Savings Section */}
                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl px-4 py-6">
                        <h2 className="text-xl font-semibold text-blue-900 mb-4">Tiết kiệm chi phí tiền điện nhà bạn.</h2>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Trước khi sử dụng năng lượng mặt trời bạn phải sử dụng nguồn điện lưới quốc gia, với chi phí tiền điện
                            không hề rẻ nếu bạn sử dụng nhiều số điện.
                            <br />
                            Đặc biệt những nhà hay bơm nước tưới cây trồng, làm nghề mộc, làm cơ khí,... sử dụng rất nhiều số điện.
                        </p>
                    </div>

                    {/* Cooling Benefits Section */}
                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl px-4 py-6">
                        <h2 className="text-xl font-semibold text-blue-900 mb-4">Làm mát nhà bạn luôn mát mẻ.</h2>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Khi hệ thống pin năng lượng mặt trời được lắp đặt trên mái nhà bạn, các tia bức xạ được hấp thụ hoàn toàn.
                            <br />
                            Các tấm pin năng lượng mặt trời giúp mái ngói nhà mát luôn mát mẻ, giảm tác động từ các hiện tượng tự
                            nhiên đến ngôi nhà.
                            <br />
                            Tạo ra nguồn điện sử dụng trong sinh hoạt và sản xuất.
                        </p>
                    </div>
                </div>

                {/* Center Image */}
                <div className="flex justify-center items-center">
                    <div className="relative">
                        <img
                            src="https://bizweb.dktcdn.net/100/487/020/themes/911678/assets/congdung.png?1735875826317"
                            alt="Let's Save The World Together - Solar Energy Benefits"
                            className="w-full max-w-md h-auto object-contain"
                        />
                    </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                    {/* Job Creation Section */}
                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl px-4 py-6">
                        <h2 className="text-xl font-semibold text-blue-900 mb-4">
                            Tạo ra công việc cho nguồn lao động đời đào tại Việt Nam.
                        </h2>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Rất nhiều công việc, công đoạn cần đến nhân công, chưa kể đến các công nhân sản xuất linh kiện thiết bị,
                            nhân viên lắp đặt, nhân viên vận chuyển,...
                            <br />
                            Tạo ra rất nhiều công việc giúp thúc đẩy nền kinh tế, tác động tích cực đến xã hội, tạo cơ hội việc làm
                            cho người dân.
                        </p>
                    </div>

                    {/* Environmental Impact Section */}
                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6">
                        <h2 className="text-xl font-semibold text-blue-900 mb-4">Tác động tích cực đến môi trường.</h2>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Năng lượng mặt trời tạo ra từ ánh sáng mặt trời, các tia bức xạ UV độc hại, việc hấp thụ các tia bức xạ
                            độc hại đã tác động tích cực, bảo vệ môi trường.
                            <br />
                            Giảm thiểu hiệu ứng nhà kính, không gây ô nhiễm nguồn nước, không tác động đến môi trường xung quanh.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
