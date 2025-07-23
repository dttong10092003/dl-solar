export default function SolarHeroBanner() {
  const handleScheduleClick = () => {
    console.log("Schedule survey clicked")
  }

  return (
    <div className="w-full bg-[#ebf9ff] py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Banner */}
        <div
          className="relative w-full h-96 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl"
          style={{
            backgroundImage: `url('https://bizweb.dktcdn.net/100/487/020/themes/911678/assets/banner.jpg?1735875826317')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl lg:text-4xl font-semibold text-white mb-6 leading-tight">
                  Đặt lịch khảo sát
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-xl">
                  Đội ngũ của chúng tôi sẽ xuống khảo sát nơi bạn dự định lắp đặt và đưa ra những giải pháp tối ưu nhất
                </p>
                <button
                  onClick={handleScheduleClick}
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-500 transition-all duration-300 cursor-pointer"
                >
                  Đặt lịch ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
