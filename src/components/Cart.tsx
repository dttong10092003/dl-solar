import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { useCart } from "../hooks/useCart";
import { formatPrice } from "../utils/format";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [issueInvoice, setIssueInvoice] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [taxId, setTaxId] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [email, setEmail] = useState("");

  if (cart.items.length === 0) {
    return (
      <div className="min-h-screen bg-[#f0f8ff] p-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">Giỏ hàng trống</h2>
            <p className="text-gray-600 mb-6">Bạn chưa có sản phẩm nào trong giỏ hàng</p>
            <button
              onClick={() => navigate("/products")}
              className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Tiếp tục mua sắm
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f0f8ff] p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Product List Section */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
            {/* Header */}
            <div className="grid grid-cols-12 gap-4 pb-4 border-b border-gray-200 text-sm font-medium text-gray-700">
              <div className="col-span-6 font-semibold text-base">Thông tin sản phẩm</div>
              <div className="col-span-2 text-center font-semibold text-base">Đơn giá</div>
              <div className="col-span-2 text-center font-semibold text-base">Số lượng</div>
              <div className="col-span-2 text-center font-semibold text-base">Thành tiền</div>
            </div>

            {/* Product Items */}
            {cart.items.map((item, index) => (
              <div key={item.id} className="grid grid-cols-12 gap-4 py-6 border-b border-gray-100 items-center">
                <div className="col-span-6 flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => navigate(`/product/${item.productId}`)}
                    />
                  </div>
                  <div>
                    <h3
                      className="font-medium text-gray-900 mb-1 cursor-pointer hover:text-blue-600 transition-colors"
                      onClick={() => navigate(`/product/${item.productId}`)}
                    >
                      {item.name}
                    </h3>
                    <button
                      onClick={() => removeFromCart(item.productId)}
                      className="text-blue-900 text-sm font-semibold hover:text-yellow-500 transition-colors cursor-pointer"
                    >
                      Xóa
                    </button>
                  </div>
                </div>
                <div className="col-span-2 text-center text-blue-900 font-medium">
                  {formatPrice(item.currentPrice)}
                </div>
                <div className="col-span-2 flex items-center justify-center">
                  <div className="flex items-center border-1 p-0.5 border-blue-900 rounded">
                    <button
                      onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                      className="w-8 h-8 flex items-center justify-center bg-blue-900 text-white hover:bg-yellow-500 rounded"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 h-8 flex items-center justify-center bg-white text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center bg-blue-900 text-white hover:bg-yellow-500 rounded"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="col-span-2 text-center font-medium text-blue-900">
                  {formatPrice(item.totalPrice)}
                </div>
              </div>
            ))}

            {/* Total Section */}
            <div className="pt-6 flex flex-col items-end space-y-4">
              <div className="max-w-60 w-full flex items-center justify-between gap-4">
                <span className="text-base font-medium text-gray-900">Tổng tiền:</span>
                <span className="text-sm font-semibold text-blue-900">{formatPrice(cart.totalAmount)}</span>
              </div>
              <button className="max-w-60 w-full bg-blue-900 hover:bg-yellow-500 text-white px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer">
                Thanh toán
              </button>
            </div>
          </div>

          {/* Delivery Information Section */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-6">Thời gian giao hàng</h2>

            <div className="space-y-4">
              {/* Date and Time Selection */}
              <div className="grid grid-cols-2 gap-4">
                <select
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg text-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Chọn ngày</option>
                  <option value="today">Hôm nay</option>
                  <option value="tomorrow">Ngày mai</option>
                </select>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Chọn thời gian</option>
                  <option value="08h00-12h00">08h00 - 12h00</option>
                  <option value="14h00-18h00">14h00 - 18h00</option>
                  <option value="19h00-21h00">19h00 - 21h00</option>
                </select>
              </div>

              {/* Invoice Checkbox */}
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="invoice"
                  checked={issueInvoice}
                  onChange={(e) => setIssueInvoice(e.target.checked)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="invoice" className="text-gray-900 font-medium">
                  Xuất hóa đơn công ty
                </label>
              </div>

              {/* Company Information */}
              {issueInvoice && (
                <div className="space-y-4 pt-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tên công ty</label>
                    <input
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="Tên công ty"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Mã số thuế</label>
                    <input
                      type="text"
                      value={taxId}
                      onChange={(e) => setTaxId(e.target.value)}
                      placeholder="Mã số thuế"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Địa chỉ công ty</label>
                    <textarea
                      value={companyAddress}
                      onChange={(e) => setCompanyAddress(e.target.value)}
                      placeholder="Nhập địa chỉ công ty (bao gồm Phường/Xã, Quận/Huyện, Tỉnh/Thành phố nếu có)"
                      rows={3}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email nhận hóa đơn</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email nhận hóa đơn"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}