export default function MemberPolicy() {
  return (
    <div className="bg-[#eef6fc] py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Title */}
        <h1 className="text-sm font-semibold text-gray-800 mb-4">Điều kiện chính sách thành viên</h1>

        {/* Section 1: Thẻ thành viên */}
        <h2 className="text-sm font-bold text-gray-800 mb-2">1. Thẻ thành viên</h2>
        <p className="text-gray-700 font-semibold text-sm mb-6">
          Điều kiện cấp thẻ thành viên: Khi khách hàng mua hàng trên hệ thống Dola sẽ được cấp thẻ thành viên.
        </p>

        {/* Section 2: Thẻ VIP */}
        <h2 className="text-sm font-bold text-gray-800 mb-2">2. Thẻ VIP</h2>
        <p className="text-gray-700 font-bold text-sm mb-3">Điều kiện nhận thẻ VIP:</p>
        <div className="space-y-2 mb-6">
          <p className="flex items-start font-semibold text-sm">
            <span className="mr-2 text-gray-700 font-semibold text-sm">+</span> Có giá trị tổng đơn hàng lớn hơn 15 triệu/ tháng
          </p>
          <p className="flex items-start font-semibold text-sm">
            <span className="mr-2 text-gray-700">+</span> Mua hàng với giá trị 3 triệu trở lên
          </p>
          <p className="flex items-start font-semibold text-sm">
            <span className="mr-2 text-gray-700 font-semibold text-sm">+</span> Tham gia các hoạt động, chương trình khuyến mãi của Dola
          </p>
        </div>

        {/* Note Section */}
        <p className="text-gray-700">
          <span className="text-gray-700 font-bold">Lưu ý:</span> Hạn mức 10, 20, 30, 50,100 triệu đồng là tính từ thời điểm bắt đầu
          mua tới khi lên thẻ. Khi lên thẻ VIP và tích tiếp lên 20 đến 100 triệu, tổng tiền này là tính từ khi khách
          hàng mua lần đầu, và cộng dồn lên.
        </p>
      </div>
    </div>
  )
}
