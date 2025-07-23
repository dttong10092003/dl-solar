export default function InstallationProcess() {
    const steps = [
        {
            img: "https://bizweb.dktcdn.net/100/487/020/themes/911678/assets/quytrinh1.jpg?1735875826317",
            caption: "Bước 1: Dựng tấm ốp lưng và khung nền của tấm pin mặt trời",
            tooltip: "Dùng keo hay ốc vít để gắn các tấm bọc khung vào tấm ốp lưng. Phủ đều lên tấm ốp lưng và khung nền 3 lớp sơn chống tia cực tím (nếu như làm bằng gỗ). Sau đó để sơn khô hoàn toàn. Cần đảm bảo rằng khung nền phải vừa khít với tấm ốp lưng."
        },
        {
            img: "https://bizweb.dktcdn.net/100/487/020/themes/911678/assets/quytrinh2.jpg?1735875826317",
            caption: "Bước 2: Gắn các cells với dây chì hàn",
            tooltip: "Cần có dây hàn nhỏ, bút hàn, chất trợ hàn để gắn các cell lại với nhau. Nối các cell đã được hàn thành 1 chuỗi.Đặt những chuỗi cell vào khung là tấm lót và nối chúng lại với nhau."
        },
        {
            img: "https://bizweb.dktcdn.net/100/487/020/themes/911678/assets/quytrinh3.jpg?1735875826317",
            caption: "Bước 3: Ráp khung nền vào ốp lưng và đặt tấm phủ cho tấm pin mặt trời",
            tooltip: "Điều chỉnh cho khung nền vừa vặn trong tấm ốp lưng của tấm pin năng lượng mặt trời. Bắt vít khung nền vào ốp lưng sao cho thật cẩn thận."
        },
        {
            img: "https://bizweb.dktcdn.net/100/487/020/themes/911678/assets/quytrinh4.jpg?1735875826317",
            caption: "Bước 4: Kiểm tra lại tổng quan",
            tooltip: "Để tối đa hóa hiệu suất của hệ thống điện năng lượng mặt trời. Cần phải lắp ráp theo một góc nghiêng và chọn những vị trí thích hợp. Để có thể hấp thụ ánh nắng được tốt nhất cho cả ngày."
        }
    ];

    return (
        <section className="bg-[#ebf9ff] pt-8 pb-34 relative overflow-hidden">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-5xl font-semibold text-center text-[#002c71] mb-24">
                    Quy trình lắp đặt
                </h2>

                {/* Dashed Line */}
                <div className="absolute top-[200px] left-0 w-full h-32 z-0 pointer-events-none">
                    <svg viewBox="0 0 1200 100" className="w-full h-full">
                        <path
                            d="M0,60 C150,-20 300,140 450,60 S750,-20 900,60 S1050,30 1200,60"
                            fill="none"
                            stroke="#b1b1b1"
                            strokeWidth="1"
                            strokeDasharray="10 12"
                        />
                    </svg>
                </div>

                {/* Steps */}
                <div className="relative z-10 flex justify-between items-end px-2 md:px-8 flex-wrap gap-y-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="relative flex flex-col items-center group text-center"
                            style={{
                                transform: `translateY(${[20, 30, -40, 50][index]}px)`
                            }}
                        >
                            {/* Image */}
                            <div className="w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center p-4 z-10 transform scale-100 group-hover:scale-90 transition duration-300">
                                <img
                                    src={step.img}
                                    alt={`Step ${index + 1}`}
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>

                            {/* Tooltip (shown below image, above caption) */}
                            <div className="absolute font-semibold top-[110px] w-[280px] bg-white text-[#1e1e1e] text-sm px-4 py-3 rounded-xl shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
                                {step.tooltip}
                            </div>

                            {/* Caption */}
                            <p className="text-xl font-semibold text-[#1e1e1e] leading-relaxed max-w-[260px] z-0 mt-4">
                                {step.caption}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
