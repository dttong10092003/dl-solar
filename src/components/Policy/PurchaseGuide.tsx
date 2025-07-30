export default function PurchaseGuide() {
  return (
    <div className="bg-[#eef6fc] py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Step 1 */}
        <p className="text-sm font-semibold text-gray-700 mb-4">
          <span className="text-gray-800 font-bold">Bước 1:</span> Truy cập website và lựa chọn sản phẩm cần mua
        </p>

        {/* Step 2 */}
        <p className="text-sm font-semibold text-gray-700 mb-4">
          <span className="text-gray-800 font-bold">Bước 2:</span> Click vào sản phẩm muốn mua, màn hình hiển thị ra pop up với các lựa chọn sau
        </p>
        <p className="text-sm font-semibold text-gray-700 mb-4">
          Nếu bạn muốn tiếp tục mua hàng: Bấm vào phần tiếp tục mua hàng để lựa chọn thêm sản phẩm vào giỏ hàng
        </p>
        <p className="text-sm font-semibold text-gray-700 mb-4">
          Nếu bạn muốn xem giỏ hàng để cập nhật sản phẩm: Bấm vào xem giỏ hàng
        </p>
        <p className="text-sm font-semibold text-gray-700 mb-4">
          Nếu bạn muốn đặt hàng và thanh toán cho sản phẩm này vui lòng bấm vào: Đặt hàng và thanh toán
        </p>

        {/* Step 3 */}
        <p className="text-sm font-semibold text-gray-700 mb-4">
          <span className="text-gray-800 font-bold">Bước 3:</span> Lựa chọn thông tin tài khoản thanh toán
        </p>
        <p className="text-sm font-semibold text-gray-700 mb-4">
          Nếu bạn đã có tài khoản vui lòng nhập thông tin tên đăng nhập là email và mật khẩu vào mục đã có tài khoản trên hệ thống
        </p>
        <p className="text-sm font-semibold text-gray-700 mb-4">
          Nếu bạn chưa có tài khoản và muốn đăng ký tài khoản vui lòng điền các thông tin cá nhân để tiếp tục đăng ký tài khoản. Khi có tài khoản bạn sẽ dễ dàng theo dõi được đơn hàng của mình
        </p>
        <p className="text-sm font-semibold text-gray-700 mb-4">
          Nếu bạn muốn mua hàng mà không cần tài khoản vui lòng nhấp chuột vào mục đặt hàng không cần tài khoản
        </p>

        {/* Step 4 */}
        <p className="text-sm font-semibold text-gray-700 mb-4">
          <span className="text-gray-800 font-bold">Bước 4:</span> Điền các thông tin của bạn để nhận đơn hàng, lựa chọn hình thức thanh toán và vận chuyển cho đơn hàng của mình
        </p>

        {/* Step 5 */}
        <p className="text-sm font-semibold text-gray-700 mb-4">
          <span className="text-gray-800 font-bold">Bước 5:</span> Xem lại thông tin đặt hàng, điền chú thích và gửi đơn hàng
        </p>
        <p className="text-sm font-semibold text-gray-700 mb-4">
          Sau khi nhận được đơn hàng bạn gửi chúng tôi sẽ liên hệ bằng cách gọi điện lại để xác nhận lại đơn hàng và địa chỉ của bạn.
        </p>

        {/* Final Note */}
        <p className="text-sm font-semibold text-gray-700">Trân trọng cảm ơn.</p>
      </div>
    </div>
  )
}