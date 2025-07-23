export default function PartnersSection() {
  const partners = [
    // Row 1
    {
      id: 1,
      name: "ABB",
      logo: "https://bizweb.dktcdn.net/100/487/020/themes/911678/assets/thuonghieu_1.jpg?1735875826317",
    },
    {
      id: 2,
      name: "SUNPOWER",
      logo: "https://bizweb.dktcdn.net/100/487/020/themes/911678/assets/thuonghieu_2.jpg?1735875826317",
    },
    {
      id: 3,
      name: "AE SOLAR",
      logo: "https://bizweb.dktcdn.net/100/487/020/themes/911678/assets/thuonghieu_3.jpg?1735875826317",
    },
    {
      id: 4,
      name: "ENPHASE",
      logo: "https://bizweb.dktcdn.net/100/487/020/themes/911678/assets/thuonghieu_4.jpg?1735875826317",
    },
    // Row 2
    {
      id: 5,
      name: "SHARP",
      logo: "https://bizweb.dktcdn.net/100/487/020/themes/911678/assets/thuonghieu_5.jpg?1735875826317",
    },
    {
      id: 6,
      name: "SMA",
      logo: "https://bizweb.dktcdn.net/100/487/020/themes/911678/assets/thuonghieu_6.jpg?1735875826317",
    },
    {
      id: 7,
      name: "JinKO Solar",
      logo: "https://bizweb.dktcdn.net/100/487/020/themes/911678/assets/thuonghieu_7.jpg?1735875826317",
    },
    {
      id: 8,
      name: "Trinasolar",
      logo: "https://bizweb.dktcdn.net/100/487/020/themes/911678/assets/thuonghieu_8.jpg?1735875826317",
    },
    // Row 3
    {
      id: 9,
      name: "Canadian Solar",
      logo: "https://bizweb.dktcdn.net/100/487/020/themes/911678/assets/thuonghieu_9.jpg?1735875826317",
    },
    {
      id: 10,
      name: "JA SOLAR",
      logo: "https://bizweb.dktcdn.net/100/487/020/themes/911678/assets/thuonghieu_10.jpg?1735875826317",
    },
    {
      id: 11,
      name: "Q CELLS",
      logo: "https://bizweb.dktcdn.net/100/487/020/themes/911678/assets/thuonghieu_11.jpg?1735875826317",
    },
    {
      id: 12,
      name: "GCL",
      logo: "https://bizweb.dktcdn.net/100/487/020/themes/911678/assets/thuonghieu_12.jpg?1735875826317",
    },
  ]

  return (
    <div className="w-full bg-[#ebf9ff] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Content - 1/3 */}
          <div className="lg:col-span-4 flex flex-col justify-center h-full font-semibold">
            <h2 className="text-4xl md:text-5xl text-blue-900 mb-6 leading-tight">
              Đối tác của
              <br />
              chúng tôi
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Những đối tác đã tin tưởng và cùng đồng hành với chúng tôi trong suốt những năm qua
            </p>
          </div>

          {/* Right Content - 2/3 */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {partners.map((partner) => (
                <div
                  key={partner.id}
                  className="bg-white rounded-2xl p-4 group cursor-pointer flex items-center justify-center h-26"
                >
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain group-hover:scale-90 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}