import { MapPin, Clock, Phone, Mail } from "lucide-react"

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#f0f8ff] p-4 md:p-8 lg:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column: Company Info and Contact Form */}
        <div className="space-y-8">
          {/* Company Information Card */}
          <div className="bg-white rounded-md p-6">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Thông tin công ty</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-11 items-center justify-center rounded-full text-blue-900 border-1 border-blue-900">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-[#1a202c]">Địa chỉ</h3>
                  <p className="text-gray-600 text-sm font-semibold">70 Lữ Gia, Phường 15, Quận 11, TP.HCM</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full text-blue-900 border-1 border-blue-900">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-[#1a202c]">Thời gian làm việc</h3>
                  <p className="text-gray-600 text-sm font-semibold">8h - 22h</p>
                  <p className="text-gray-600 text-sm font-semibold">Từ thứ 2 đến chủ nhật</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full text-blue-900 border-1 border-blue-900">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-[#1a202c]">Hotline</h3>
                  <p className="text-gray-600 text-sm font-semibold">1900 6750</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full text-blue-900 border-1 border-blue-900">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-[#1a202c]">Email</h3>
                  <p className="text-gray-600 text-sm font-semibold">support@sapo.vn</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Us Form Card */}
          <div className="bg-white rounded-md p-6">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Liên hệ với chúng tôi</h2>
            <p className="text-gray-600 text-sm font-semibold mb-4">
              Nếu bạn có thắc mắc gì, có thể gửi yêu cầu cho chúng tôi, và chúng tôi sẽ liên lạc lại với bạn sớm nhất có thể.
            </p>
            <form className="grid gap-4">
              <div className="grid gap-2">
                <input id="name" placeholder="Họ và tên" className="w-full border rounded px-3 py-2" />
              </div>
              <div className="grid gap-2">
                <input id="email" type="email" placeholder="Email" className="w-full border rounded px-3 py-2" />
              </div>
              <div className="grid gap-2">
                <input id="phone" type="tel" placeholder="Điện thoại*" className="w-full border rounded px-3 py-2" />
              </div>
              <div className="grid gap-2">
                <textarea id="message" placeholder="Nội dung" className="w-full border rounded px-3 py-2 min-h-[120px]" />
              </div>
              <button
                type="submit"
                className="max-w-[30%] bg-blue-900 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded-md cursor-pointer transition-colors duration-300"
              >
                Gửi thông tin
              </button>
            </form>
          </div>
        </div>

        {/* Right Column: Google Map */}
        <div className="w-full h-[400px] lg:h-auto rounded-lg overflow-hidden">
          <iframe
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.8822548538953!2d105.8130573153324!3d21.036237492885622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab45c2a24dd3%3A0x2fd5e824ef6e5d34!2zMjY2IMSQLiDEkGnhu4FuIENh4bunLCBCYSDEkMOsbmgsIEjDoCBO4buZaSwgSMOgIE7hu5lpIDEwMDAwMA!5e0!3m2!1svi!2s!4v1722232299154!5m2!1svi!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Company Location on Google Maps"
          ></iframe>
        </div>
      </div>
    </div>
  )
}
