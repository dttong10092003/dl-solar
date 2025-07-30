import { ChevronDown } from "lucide-react"
import { useState } from "react"

export default function AboutMe() {
    const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({})

    const toggleSection = (section: string) => {
        setOpenSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }))
    }

    const sections = [
        {
            id: "vision",
            title: "Tầm Nhìn",
            content:
                "Trở thành công ty hàng đầu trong lĩnh vực năng lượng tái tạo tại Việt Nam, góp phần xây dựng một tương lai xanh và bền vững cho thế hệ mai sau.",
        },
        {
            id: "mission",
            title: "Sứ Mệnh",
            content:
                "Cung cấp các giải pháp năng lượng mặt trời chất lượng cao, giúp khách hàng tiết kiệm chi phí điện năng và bảo vệ môi trường thông qua việc sử dụng năng lượng sạch.",
        },
        {
            id: "philosophy",
            title: "Triết Lý Kinh Doanh",
            content:
                "Đặt chất lượng sản phẩm và sự hài lòng của khách hàng lên hàng đầu. Chúng tôi cam kết mang đến những giải pháp tối ưu nhất với chi phí hợp lý.",
        },
        {
            id: "commitment",
            title: "Lời Cam Kết",
            content:
                "Cam kết cung cấp dịch vụ tư vấn, lắp đặt và bảo hành chuyên nghiệp. Đội ngũ kỹ thuật viên giàu kinh nghiệm sẽ đồng hành cùng khách hàng trong suốt quá trình sử dụng.",
        },
    ]

    return (
        <section className="py-8 md:py-16 px-4 bg-[#ebf9ff]">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    {/* Left side - Single Image */}
                    <div className="relative order-2 lg:order-1">
                        <img
                            src="https://bizweb.dktcdn.net/100/487/020/themes/911678/assets/about.png?1735875826317"
                            alt="Dola Solar - Solar panel installation and renewable energy solutions"
                            className="w-full h-auto object-cover rounded-lg lg:rounded-xl"
                        />
                    </div>

                    {/* Right side - Content */}
                    <div className="space-y-4 lg:space-y-6 order-1 lg:order-2">
                        {/* Header */}
                        <div>
                            <p className="text-lg lg:text-xl font-semibold mb-2">Về Chúng Tôi</p>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0d2b6b] mb-4 lg:mb-6">Dola Solar</h2>
                            <p className="text-gray-700 leading-relaxed mb-6 lg:mb-8 text-sm lg:text-base">
                                Dola Solar tự hào là đơn vị nhập khẩu tấm pin năng lượng mặt trời giá sỉ từ Đức. Với đội ngũ kỹ sư giàu kinh nghiệm,
                                Việt Nam Solar khẳng định là đơn vị cung cấp giải pháp điện mặt trời hàng đầu Việt Nam đến thời điểm hiện tại.
                            </p>
                        </div>

                        {/* Expandable sections */}
                        <div className="space-y-2 lg:space-y-3">
                            {sections.map((section) => {
                                const isOpen = openSections[section.id];
                                return (
                                    <div key={section.id} className="border border-gray-200 rounded-lg bg-white">
                                        <button
                                            onClick={() => toggleSection(section.id)}
                                            className={`w-full px-4 lg:px-6 py-3 lg:py-4 flex items-center justify-between text-left transition-colors cursor-pointer
            ${isOpen ? "bg-gray-50" : "hover:bg-gray-50"}
          `}
                                        >
                                            <span
                                                className={`font-semibold text-sm lg:text-base transition-colors
              ${isOpen ? "text-yellow-500" : "text-gray-800 hover:text-yellow-500"}
            `}
                                            >
                                                {section.title}
                                            </span>
                                            <ChevronDown
                                                className={`w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0 transition-transform duration-200
              ${isOpen ? "rotate-180 text-yellow-500" : "text-gray-500"}
            `}
                                            />
                                        </button>

                                        {isOpen && (
                                            <div className="px-4 lg:px-6 pb-3 lg:pb-4">
                                                <div className="border-t border-gray-100 pt-3 lg:pt-4">
                                                    <p className="text-gray-700 leading-relaxed text-sm lg:text-base">{section.content}</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-8 lg:mt-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                    {/* Image 1 - Solar Panel Installation */}
                    <div className="group overflow-hidden rounded-xl lg:rounded-2xl shadow-lg cursor-pointer">
                        <img
                            src="https://bizweb.dktcdn.net/100/487/020/themes/911678/assets/banner_three_1.jpg?1735875826317"
                            alt="Solar engineers consultation and planning"
                            className="w-full h-48 md:h-56 lg:h-64 object-cover transition-all duration-300 group-hover:brightness-110 group-hover:scale-105"
                        />
                        <div className="transition-all duration-300"></div>
                    </div>

                    {/* Image 2 - Engineers Consultation */}
                    <div className="group overflow-hidden rounded-xl lg:rounded-2xl shadow-lg cursor-pointer">
                        <img
                            src="https://bizweb.dktcdn.net/100/487/020/themes/911678/assets/banner_three_2.jpg?1735875826317"
                            alt="Solar engineers consultation and planning"
                            className="w-full h-48 md:h-56 lg:h-64 object-cover transition-all duration-300 group-hover:brightness-110 group-hover:scale-105"
                        />
                        <div className="transition-all duration-300"></div>
                    </div>

                    {/* Image 3 - Solar Farm Inspection */}
                    <div className="group overflow-hidden rounded-xl lg:rounded-2xl shadow-lg cursor-pointer">
                        <img
                            src="https://bizweb.dktcdn.net/100/487/020/themes/911678/assets/banner_three_3.jpg?1735875826317"
                            alt="Solar engineers consultation and planning"
                            className="w-full h-48 md:h-56 lg:h-64 object-cover transition-all duration-300 group-hover:brightness-110 group-hover:scale-105"
                        />
                        <div className="transition-all duration-300"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
