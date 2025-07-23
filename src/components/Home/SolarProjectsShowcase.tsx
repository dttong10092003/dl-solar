export default function SolarProjectsShowcase() {
    const projects = [
        {
            id: 1,
            title: "Điện Mặt Trời tại Khách Sạn 18 Phú Quốc, Kiên Giang",
            image: "https://bizweb.dktcdn.net/100/487/020/articles/8.jpg?v=1685087928170",
            date: "26",
            month: "Tháng 05",
        },
        {
            id: 2,
            title: "Điện Mặt Trời Áp Mái Tòa Nhà VP24 Mỹ Đình, Hà Nội",
            image: "https://bizweb.dktcdn.net/100/487/020/articles/7.jpg?v=1685087738607",
            date: "26",
            month: "Tháng 05",
        },
        {
            id: 3,
            title: "Hệ thống Điện mặt trời Hòa lưới có lưu trữ tại nhà Đại sứ Thụy Điển, Hà Nội",
            image: "https://bizweb.dktcdn.net/100/487/020/articles/6.jpg?v=1685087501867",
            date: "26",
            month: "Tháng 05",
        },
        {
            id: 4,
            title: "Thụy Điển hợp tác cùng Việt Nam trong chuyển dịch cơ cấu năng lượng sạch",
            image: "https://bizweb.dktcdn.net/100/487/020/articles/5.jpg?v=1685087435990",
            date: "26",
            month: "Tháng 05",
        },
        {
            id: 5,
            title: "Hệ thống điện mặt trời hòa lưới tại Nhà Máy May XNK Dệt Hà Nam",
            image: "https://bizweb.dktcdn.net/100/487/020/articles/4.jpg?v=1685087390000",
            date: "25",
            month: "Tháng 05",
        },
        {
            id: 6,
            title: "Lắp đặt điện mặt trời áp mái tại Nhà Máy Cơ khí Sông Hồng",
            image: "https://bizweb.dktcdn.net/100/487/020/articles/3.jpg?v=1685087350470",
            date: "25",
            month: "Tháng 05",
        },
        {
            id: 7,
            title: "Cung cấp hệ thống điện mặt trời cho Trường Đại học Xây dựng",
            image: "https://bizweb.dktcdn.net/100/487/020/articles/2.jpg?v=1685087325323",
            date: "24",
            month: "Tháng 05",
        },
        {
            id: 8,
            title: "Tư vấn và thi công điện mặt trời tại Tòa nhà văn phòng G8",
            image: "https://bizweb.dktcdn.net/100/487/020/articles/1.jpg?v=1685087294400",
            date: "24",
            month: "Tháng 05",
        },
    ];

    return (
        <div className="w-full min-h-screen bg-[#ebf9ff] py-6 px-6 md:px-28">
            <div className="w-full bg-white py-2 px-6 rounded-2xl">
                {/* Title */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8">
                        Một số dự án đã hoàn thiện
                    </h1>
                </div>

                {/* Grid */}
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-4">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="relative group rounded-2xl bg-white transition-all duration-300 overflow-hidden hover:bg-[#ebf9ff] cursor-pointer"
                            >
                                {/* Image */}
                                <div className="relative overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    {/* Date */}
                                    <div className="absolute top-0 right-0 bg-blue-900 text-white rounded-bl-sm px-3 py-2 shadow-lg">
                                        <div className="text-center">
                                            <div className="text-base font-semibold">{project.date}</div>
                                            <div className="text-base font-semibold">{project.month}</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="p-4 pb-16">
                                    <h3 className="text-gray-800 text-lg font-semibold leading-relaxed mb-2 transition-colors duration-200 group-hover:text-yellow-500 cursor-pointer line-clamp-2">
                                        {project.title}
                                    </h3>
                                </div>

                                {/* Read More Button */}
                                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                                    <button className="cursor-pointer bg-white text-blue-900 border-2 border-blue-900 px-4 py-2 rounded-full text-sm font-medium hover:border-yellow-500 hover:bg-yellow-500 hover:text-white transition-all duration-300">
                                        Đọc tiếp
                                    </button>
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
