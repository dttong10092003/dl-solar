import { ShoppingCart } from "lucide-react";
import { useCart } from "../hooks/useCart";
import { formatPrice } from "../utils/format";
import { useNavigate } from "react-router-dom";

interface CartDrawerProps {
  isOpen: boolean;
}

export default function CartDrawer({ isOpen }: CartDrawerProps) {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className="absolute top-10 right-0 w-80 bg-white shadow-2xl border border-gray-200 rounded-lg z-[9999] mt-2">
      {/* Content */}
      <div className="max-h-96 overflow-y-auto">
        {cart.items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-8 px-4 text-center">
            <ShoppingCart className="w-10 h-10 text-gray-300 mb-2" />
            <p className="text-gray-500 text-sm">
              Chưa có sản phẩm nào trong giỏ hàng
            </p>
          </div>
        ) : (
          <div className="p-3">
            {cart.items.map((item, index) => (
              <div key={item.id} className={`flex items-start gap-3 py-3 ${index !== cart.items.length - 1 ? 'border-b border-gray-100' : ''}`}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => navigate(`/product/${item.productId}`)}
                />
                <div className="flex-1 min-w-0">
                  <h4 
                    className="font-medium text-gray-900 text-sm leading-tight mb-1 cursor-pointer hover:text-blue-600 transition-colors"
                    onClick={() => navigate(`/product/${item.productId}`)}
                  >
                    {item.name}
                  </h4>
                  <div 
                    className="text-red-500 text-xs mb-1 cursor-pointer hover:text-red-700 hover:underline"
                    onClick={() => removeFromCart(item.productId)}
                  >
                    Xóa
                  </div>
                  <div className="text-blue-600 text-xs mb-2">Số lượng</div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center bg-blue-900 text-white rounded text-xs hover:bg-blue-800"
                      >
                        −
                      </button>
                      <span className="w-8 h-7 flex items-center justify-center bg-white border border-gray-300 rounded text-sm font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center bg-blue-900 text-white rounded text-xs hover:bg-blue-800"
                      >
                        +
                      </button>
                    </div>
                    <div className="text-right">
                      <div className="text-blue-900 font-semibold text-sm">
                        {formatPrice(item.currentPrice)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      {cart.items.length > 0 && (
        <div className="border-t border-gray-100 p-4">
          <div className="flex justify-between items-center mb-3">
            <span className="text-gray-900 font-medium">Tổng tiền:</span>
            <span className="text-blue-900 font-bold text-lg">
              {formatPrice(cart.totalAmount)}
            </span>
          </div>
          <button className="w-full bg-blue-900 text-white py-2.5 rounded-lg hover:bg-blue-800 font-medium text-sm">
            Thanh toán
          </button>
        </div>
      )}
    </div>
  );
}
