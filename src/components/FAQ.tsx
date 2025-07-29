import FAQAccordion from "./FAQAccordion"
import ContactForm from "./ContactForm"

export default function FAQ() {
  const orderingFAQs = [
    {
      id: 1,
      question: "Tôi có thể đặt hàng bằng những hình thức nào?",
      answer: [
        "Quý khách có thể mua hàng tại Dola bằng những hình thức sau:",
        "Đặt hàng trực tuyến tại website",
        "Đặt hàng trực tiếp với tư vấn viên qua Hotline 1900 6750",
        "Đặt hàng trực tuyến trên các sàn thương mại điện tử",
        "Mua hàng trực tiếp tại các hệ thống cửa hàng",
        "Dola luôn khuyến khích quý khách tạo tài khoản và đặt hàng online để được hưởng các chính sách ưu đãi thành viên tốt hơn.",
      ],
    },
    {
      id: 2,
      question: "Tôi cần hỗ trợ mua hàng, làm cách nào để liên hệ với tư vấn viên?",
      answer: "Để liên hệ với nhân viên tư vấn, quý khách vui lòng liên hệ qua Hotline 1900 6750 trong thời gian từ 9:00 – 18:00,  T2 – T6 hằng tuần.",
    },
    {
      id: 3,
      question: "Dola có giới hạn về số lượng sản phẩm khi đặt hàng không?",
      answer: "Quý khách có thể đặt hàng với số lượng sản phẩm tùy ý. Đối với các sản phẩm có giới hạn về số lượng (trong các dịp flashsale, sale các dịp lễ Tết), hệ thống sẽ cập nhật số lượng được  mua tối đa và chỉ ghi nhận đơn hàng có số lượng đặt mua trong giới hạn.",
    },
    {
      id: 4,
      question: "Tôi muốn xem lại lịch sử đơn hàng đã mua?",
      answer: "Quý khách vào trang tài khoản bằng cách bấm vào nút “Tài khoản” ở thanh menu trên cùng của màn hình (Đối với Desktop) hoặc tại góc trái màn hình, chọn biểu tượng Menu rồi chọn “Tài khoản” (Đối với Mobile). Sau đó chọn “Đơn hàng của bạn” để kiểm tra lại các sản phẩm đã đặt mua. Hoặc quý khách có thể kiểm tra lại những email Dola thông báo trạng thái đơn hàng.",
    },
    {
      id: 5,
      question: "Tôi cần làm gì để thay đổi hoặc hủy bỏ đơn hàng đã đặt?",
      answer: [
        "Quý khách vui lòng liên hệ tư vấn viên của Dola Hotline 1900 6750 để được hủy hoặc thay đổi sản phẩm trong đơn hàng",
        "Lưu ý: Quý khách chỉ có thể thay đổi hoặc hủy đơn hàng trong vòng 24h kể từ thời điểm đặt hàng thành công. Sau thời gian này, Dola sẽ không hỗ trợ thay đổi hoặc hủy đơn hàng.",
      ],
    },
    {
      id: 6,
      question: "Tôi muốn khiếu nại/ đổi trả hàng, quy trình thực hiện như thế nào?",
      answer: "Dola luôn sẵn lòng đón nhận các ý kiến góp ý và phản hồi của quý khách quý khách vui lòng liên hệ tư vấn viên của Dola Hotline 1900 6750 để được hủy hoặc thay đổi sản phẩm trong đơn hàng",
    },
  ]

  const accountFAQs = [
    {
      id: 1,
      question: "Làm thế nào để trở thành thành viên của Dola?",
      answer:
        "Quý khách vui lòng nhấn vào nút “Đăng ký” ở thanh menu trên cùng của màn hình (Đối với Desktop) hoặc tại góc trái màn hình, chọn biểu tượng Menu rồi chọn “Đăng ký” (Đối với Mobile).",
    },
    {
      id: 2,
      question: "Tại sao tôi không thể đăng nhập vào tài khoản của tôi?",
      answer:
        "Quý khách vui lòng kiểm tra kỹ về kiểu gõ hoặc phím Caps Lock/ IN HOA trong quá trình điền thông tin đăng nhập thành viên, trường hợp không thể đăng nhập thành công quý khách vui lòng chọn nút “Quên mật khẩu” ngay dưới ô mật khẩu và nhập email đã đăng ký.",
    },
    {
      id: 3,
      question: "Tôi có thể sử dụng chung tài khoản với người khác được không?",
      answer: "Quý khách nên sử dụng tài khoản cá nhân để đảm bảo độ tin cậy cũng như quyền lợi của bản thân khi mua sắm. Việc sử dụng chung tài khoản có thể dẫn đến những sai sót mà người chịu ảnh hưởng trực tiếp chính là quý khách hàng.",
    },
    {
      id: 4,
      question: "Tại sao tôi nên đăng ký thành viên Dola?",
      answer: "Việc đăng ký tài khoản là cơ hội giúp quý khách trở thành một trong những khách hàng thân thiết của Dola, được tiếp cận nhanh nhất các chương trình khuyến mãi, thông tin ưu đãi khi mua sắm.",
    },
    {
      id: 5,
      question: "Dola có chương trình ưu đãi nào hấp dẫn dành cho khách hàng thân thiết?",
      answer: "Khi tổng giá trị đơn hàng của quý khách tích lũy đạt đủ điều kiện của từng mức hạng thành viên, quý khách sẽ nhận được ưu đãi giảm giá cho mọi đơn hàng tương, voucher sinh nhật tương ứng của hạng mức thành viên.Khi tổng giá trị đơn hàng của quý khách tích lũy đạt đủ điều kiện của từng mức hạng thành viên, quý khách sẽ nhận được ưu đãi giảm giá cho mọi đơn hàng tương, voucher sinh nhật tương ứng của hạng mức thành viên.",
    },
  ]

  const paymentFAQs = [
    {
      id: 1,
      question: "Tôi có thể thanh toán đơn hàng bằng những hình thức nào?",
      answer: ["Quý khách có thể thanh toán cho Dola bằng những hình thức sau:",
        "1. Thanh toán tại chỗ (Ship COD)",
        "2. Chuyển khoản trước: Khách hàng có thể chọn chuyển khoản trước vào tài khoản của Dola:",
      ]
    },
  ]

  const deliveryFAQs = [
    {
      id: 1,
      question: "Tôi không ở Hồ Chí Minh, Dola có hỗ trợ giao hàng không?",
      answer:
        "Dola áp dụng giao hàng trên toàn quốc cho tất cả cả giá trị đơn hàng. Phí vận chuyển và thời gian giao hàng sẽ thay đổi tùy thuộc vào giá trị đơn hàng và từng khu vực cụ thể.",
    },
    {
      id: 2,
      question: "Tôi có được hỗ trợ phí vận chuyển không?",
      answer: ["Dola hỗ trợ Miễn phí vận chuyển cho khách hàng theo khu vực và giá trị đơn hàng:",
        "     TP.HCM: Miễn phí vận chuyển với đơn hàng từ 500,000",
        "     Toàn quốc: Miễn phí vận chuyển với đơn hàng từ 1,500,000",
        "Đối với đơn hàng chưa đạt điều kiện miễn phí vận chuyển sẽ có phí giao dựa trên ước tính hiển thị trên website. Phí giao nhận tính trên trọng lượng hàng hóa, hình thức chuyển phát nhanh hay thường và vị trí địa lý. Do đó, mức chi phí này phụ thuộc vào từng điều kiện cụ thể.Đối với đơn hàng chưa đạt điều kiện miễn phí vận chuyển sẽ có phí giao dựa trên ước tính hiển thị trên website. Phí giao nhận tính trên trọng lượng hàng hóa, hình thức chuyển phát nhanh hay thường và vị trí địa lý. Do đó, mức chi phí này phụ thuộc vào từng điều kiện cụ thể."
      ]
    },
    {
      id: 3,
      question: "Bao lâu thì tôi sẽ nhận được sản phẩm sau khi hoàn tất đặt hàng?",
      answer: ["Đối với khu vực nội thành Hồ Chí Minh, thời gian giao hàng dao động trong khoảng 1 – 2 ngày làm việc; đối với khu vực ngoại thành và các tỉnh, thời gian trung bình nhận hàng dao động từ 3 – 5 ngày.",
        "Lưu ý:",
        "     Thời gian giao hàng được tính từ lúc Dola hoàn tất việc xác nhận đơn hàng đến khi nhận được hàng, không kể ngày lễ hay thứ 7 và chủ nhật.",
        "     Trường hợp khách hàng tại Hồ Chí Minh có nhu cầu nhận hàng hỏa tốc, vui lòng liên hệ trực tiếp tới Hotline 1900 6750 để được hỗ trợ.",
      ]
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100 py-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left Column - FAQs */}
        <div className="lg:col-span-2 bg-white rounded-3xl shadow-lg p-6 md:p-8 space-y-8">
          <FAQAccordion title="Hỏi đáp về tài khoản" faqs={accountFAQs} />
          <FAQAccordion title="Hỏi đáp về đặt hàng" faqs={orderingFAQs} />
          <FAQAccordion title="Hỏi đáp về thanh toán" faqs={paymentFAQs} />
          <FAQAccordion title="Hỏi đáp về giao hàng" faqs={deliveryFAQs} />
        </div>

        {/* Right Column - Contact Form */}
        <div className="lg:col-span-1">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
