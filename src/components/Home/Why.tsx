export default function Why() {
    const features = [
        {
            img: "https://bizweb.dktcdn.net/100/487/020/themes/911678/assets/lydo1.jpg?1735875826317",
            title: "Sản phẩm chất lượng",
            description:
                "Sản phẩm 100% nhập khẩu có đầy đủ chứng từ CO, CQ từ nhà sản xuất. Chế độ bảo hành theo tiêu chuẩn nhà sản xuất. Các sản phẩm nằm trong top 5 thế giới",
        },
        {
            img: "https://bizweb.dktcdn.net/100/487/020/themes/911678/assets/lydo2.jpg?1735875826317",
            title: "Lắp đặt, bảo hành 24/7",
            description:
                "Thời gian bảo hành lên đến 12 năm. Hiệu suất sản phẩm lên đến 30 năm. Khách hàng sẽ hoàn toàn yên tâm từ khâu đầu tư của mình",
        },
        {
            img: "https://bizweb.dktcdn.net/100/487/020/themes/911678/assets/lydo3.jpg?1735875826317",
            title: "Tiết kiệm chi phí",
            description:
                "Các gói sản phẩm được thiết kế phù hợp với từng khách hàng cụ thể. Đảm bảo tiết kiệm chi phí và thời gian hoàn vốn nhanh nhất",
        },
        {
            img: "https://bizweb.dktcdn.net/100/487/020/themes/911678/assets/lydo4.jpg?1735875826317",
            title: "Phục vụ tận tâm",
            description:
                "Chúng tôi không ngừng đào tạo, nâng cao chất lượng dịch vụ và chăm sóc khách hàng 24/7. Luôn đặt quyền lợi khách hàng lên trên hết",
        },
        {
            img: "https://bizweb.dktcdn.net/100/487/020/themes/911678/assets/lydo5.jpg?1735875826317",
            title: "Đội ngũ chuyên nghiệp",
            description: "Chúng tôi sở hữu đội ngũ kỹ thuật vượt trội, được đào tạo đầy đủ kiến thức cũng như là kinh nghiệm",
        },
        {
            img: "https://bizweb.dktcdn.net/100/487/020/themes/911678/assets/lydo6.jpg?1735875826317",
            title: "Khuyến mãi đi kèm",
            description: "Dola Solar luôn luôn có khuyến mãi kèm theo cho tất cả các hóa đơn từ lớn hay nhỏ.",
        },
    ];

    return (
        <section className="relative pb-16 px-4 overflow-hidden bg-cover bg-center bg-[#ebf9ff]">
            {/* Background image behind all content */}
            <div
                className="absolute inset-0 bg-cover bg-no-repeat bg-bottom bottom-8 z-0"
                style={{
                    backgroundImage: `url('https://bizweb.dktcdn.net/100/487/020/themes/911678/assets/taisao.jpg?1735875826317')`,
                    backgroundSize: "100% auto",
                }}
            />
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                    {/* Left Side - 1/3 */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="">
                            <h2 className="text-5xl font-semibold mb-6 text-[#0d2b6b]">
                                Tại sao chọn
                                <br />
                                chúng tôi?
                            </h2>
                            <p className="text-[#212529] leading-relaxed text-lg">
                                Hơn 375 dự án lắp đặt hệ thống điện năng
                                <br />
                                lượng mặt trời được Dola Solar thực hiện trong
                                <br />
                                năm 2022. Tại sao họ lại chọn chúng tôi?
                            </p>
                        </div>
                    </div>

                    {/* Right Side - 2/3 */}
                    <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group bg-white p-6 rounded-xl"
                            >
                                <div className="flex flex-col items-center space-y-4">
                                    <div className="p-3 rounded-full overflow-hidden w-22 h-22 bg-[#ebf9ff] transition-transform duration-300 ease-in-out group-hover:scale-90">
                                        <img src={feature.img} alt={feature.title} className="w-full h-full object-cover rounded-full 
                                        transition-transform duration-300 ease-in-out group-hover:scale-90" />
                                    </div>
                                    <h3 className="text-xl text-center font-semibold text-[#212529]">{feature.title}</h3>
                                    <p className="text-sm text-[#212529] leading-relaxed text-justify">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
}
