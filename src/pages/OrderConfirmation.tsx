import { Check, Printer } from "lucide-react"
import { useLocation, useNavigate } from "react-router-dom"
import { formatPrice } from "../utils/format"

interface CartItem {
    id: number
    name: string
    image: string
    currentPrice: number
    quantity: number
}

interface CustomerInfo {
    email: string
    fullName: string
    phoneNumber?: string
    address?: string
    province: string
    district: string
    ward: string
    country?: string
}

interface OrderData {
    customerInfo: CustomerInfo
    cartItems: CartItem[]
    pricing: {
        subtotal: number
        shipping: number
        total: number
    }
    paymentMethod: string
    shippingMethod: string
}

export default function OrderConfirmation() {
    const location = useLocation()
    const navigate = useNavigate()
    const orderData = location.state as OrderData

    // Debug: log the order data to see what's being passed
    console.log('OrderConfirmation received data:', orderData)
    console.log('CustomerInfo:', orderData?.customerInfo)

    // If no order data, redirect to home
    if (!orderData) {
        navigate('/')
        return null
    }

    const { customerInfo, cartItems, pricing, paymentMethod, shippingMethod } = orderData
    const orderNumber = Math.floor(Math.random() * 9000) + 1000 // Generate random order number

    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header with Logo */}
                <div className="text-center mb-8">
                    <img src="https://bizweb.dktcdn.net/100/487/020/themes/911678/assets/logo.png?1735875826317" alt="DL Solar Logo" className="h-16 mx-auto" />
                </div>

                {/* Main Content - 2 Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    {/* Left Column - 3/5 width */}
                    <div className="lg:col-span-3 space-y-6">
                        {/* Success Message */}
                        <div className="p-6">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Check className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Cảm ơn bạn đã đặt hàng</h2>
                                    <p className="text-gray-600 mb-1">Một email xác nhận đã được gửi tới {customerInfo.email}.</p>
                                    <p className="text-gray-600">Xin vui lòng kiểm tra email của bạn</p>
                                </div>
                            </div>
                        </div>

                        {/* Customer Information Container */}
                        <div className="p-6 border-gray-300 border-1">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Purchase Information */}
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Thông tin mua hàng</h3>
                                    <div className="space-y-2 text-gray-600">
                                        <p>{customerInfo.fullName}</p>
                                        <p>{customerInfo.email}</p>
                                        {customerInfo.phoneNumber && <p>{customerInfo.phoneNumber}</p>}
                                    </div>
                                </div>

                                {/* Delivery Address */}
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Địa chỉ nhận hàng</h3>
                                    <div className="space-y-2 text-gray-600">
                                        <p>{customerInfo.fullName}</p>
                                        <p>
                                            {customerInfo.address && customerInfo.address.trim() && `${customerInfo.address}, `}
                                            {customerInfo.ward || 'Chưa có phường/xã'}, {customerInfo.district || 'Chưa có quận/huyện'}, {customerInfo.province || 'Chưa có tỉnh/thành'}
                                            {customerInfo.country && `, ${customerInfo.country}`}
                                        </p>
                                        {customerInfo.phoneNumber && <p>{customerInfo.phoneNumber}</p>}
                                    </div>
                                </div>

                                {/* Payment Method */}
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Phương thức thanh toán</h3>
                                    <p className="text-gray-600">{paymentMethod}</p>
                                </div>

                                {/* Shipping Method */}
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Phương thức vận chuyển</h3>
                                    <p className="text-gray-600">{shippingMethod}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Order Summary - 2/5 width */}
                    <div className="lg:col-span-2 bg-white py-2 px-4 h-fit">
                        <h3 className="text-lg font-semibold text-gray-800 mb-6">
                            Đơn hàng #{orderNumber} ({cartItems.reduce((sum: number, item: CartItem) => sum + item.quantity, 0)})
                        </h3>

                        {/* Order Items */}
                        <div className="space-y-4 mb-6">
                            {cartItems.map((item: CartItem) => (
                                <div key={item.id} className="flex items-start space-x-4 pb-4 border-b border-gray-100">
                                    <div className="relative">
                                        <img
                                            src={item.image || "/placeholder.svg"}
                                            alt={item.name}
                                            className="w-16 h-16 object-cover rounded-lg border-1 border-gray-200"
                                        />
                                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#2a9dcc] text-white text-xs rounded-full flex items-center justify-center font-medium">
                                            {item.quantity}
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-gray-800 font-semibold mb-2">{item.name}</p>
                                        <p className="text-base font-semibold text-gray-800">{formatPrice(item.currentPrice * item.quantity)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Order Summary */}
                        <div className="space-y-3">
                            <div className="flex justify-between text-gray-600">
                                <span>Tạm tính</span>
                                <span className="font-medium">{formatPrice(pricing.subtotal)}</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Phí vận chuyển</span>
                                <span className="font-medium">{formatPrice(pricing.shipping)}</span>
                            </div>
                            <div className="border-t pt-3">
                                <div className="flex justify-between text-xl font-bold">
                                    <span className="text-gray-700">Tổng cộng</span>
                                    <span className="text-[#2a9dcc]">{formatPrice(pricing.total)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <button 
                        onClick={() => navigate('/')}
                        className="bg-[#2a9dcc] hover:bg-[#1e7a9c] text-white px-8 py-3 rounded-lg font-medium transition-colors cursor-pointer"
                    >
                        Tiếp tục mua hàng
                    </button>
                    <button className="bg-white hover:bg-[#1e7a9c] text-[#2a9dcc] border border-[#2a9dcc] px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 cursor-pointer">
                        <Printer className="w-4 h-4" />
                        <span>In</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
