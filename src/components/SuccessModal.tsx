import { Check, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { formatPrice } from "../utils/format";

interface Product {
  id: number;
  name: string;
  image: string;
  currentPrice: number;
}

interface SuccessModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  product: Product | null;
  cartItemCount: number;
}

export default function SuccessModal({ 
  isOpen, 
  setIsOpen, 
  product, 
  cartItemCount
}: SuccessModalProps) {
  const navigate = useNavigate();
  
  if (!isOpen || !product) return null;

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  const handleContinueShopping = () => {
    setIsOpen(false);
    // Just close the modal, don't call any additional callbacks
  };

  const handleCheckout = () => {
    setIsOpen(false);
    // Navigate to checkout page
    navigate('/checkout');
  };

  return (
    <div className="fixed inset-0 bg-[#363636]/30 flex items-center justify-center p-4 z-50" onClick={handleOutsideClick}>
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full overflow-hidden">
        {/* Header */}
        <div className="bg-blue-800 text-white px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <Check className="w-4 h-4 text-blue-800" />
            </div>
            <span className="font-semibold">Mua hàng thành công</span>
          </div>
          <button onClick={() => setIsOpen(false)} className="cursor-pointer text-white hover:text-gray-200 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <div className="flex gap-3 mb-4">
            <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-gray-900 mb-1">
                {product.name}
              </h3>
              <p className="text-blue-800 font-semibold">{formatPrice(product.currentPrice)}</p>
            </div>
          </div>

          {/* Cart Info */}
          <p className="text-sm text-gray-600 mb-4">Giỏ hàng của bạn hiện có {cartItemCount} sản phẩm</p>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={handleContinueShopping}
              className="cursor-pointer flex-1 bg-yellow-500 hover:bg-blue-800 text-white font-medium py-2.5 px-4 rounded transition-colors"
            >
              Tiếp tục mua hàng
            </button>
            <button
              onClick={handleCheckout}
              className="cursor-pointer flex-1 bg-blue-800 hover:bg-yellow-500 text-white font-medium py-2.5 px-4 rounded transition-colors"
            >
              Thanh toán ngay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
