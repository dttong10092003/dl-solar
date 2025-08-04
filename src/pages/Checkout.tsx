import { useState, useEffect, useRef } from "react"
import { ChevronDownIcon, CircleUserRound } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { useCart } from "../hooks/useCart"
import { formatPrice } from "../utils/format"

interface Province {
    code: string | number
    name: string
}

interface District {
    code: string | number
    name: string
}

interface Ward {
    code: string | number
    name: string
}

interface Country {
    code: string
    name: string
    flag: string
}

export default function Checkout() {
    const [selectedPayment, setSelectedPayment] = useState("cod")
    const [discountCode, setDiscountCode] = useState("")
    const [discountError, setDiscountError] = useState("")
    const navigate = useNavigate()
    const { cart, clearCart } = useCart()

    // Form data states
    const [email, setEmail] = useState("")
    const [fullName, setFullName] = useState("")
    const [address, setAddress] = useState("")

    // Address selection states
    const [selectedCountry, setSelectedCountry] = useState("")
    const [selectedProvince, setSelectedProvince] = useState("")
    const [selectedDistrict, setSelectedDistrict] = useState("")
    const [selectedWard, setSelectedWard] = useState("")

    // Debug: log current state values
    console.log('Current selection states:', { selectedProvince, selectedDistrict, selectedWard });

    // Address data states
    const [provinces, setProvinces] = useState<Province[]>([])
    const [districts, setDistricts] = useState<District[]>([])
    const [wards, setWards] = useState<Ward[]>([])

    // Phone number state
    const [phoneNumber, setPhoneNumber] = useState("")
    const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false)
    const countryDropdownRef = useRef<HTMLDivElement>(null)

    // Countries data
    const countries: Country[] = [
        { code: "VN", name: "Vietnam (+84)", flag: "https://flagicons.lipis.dev/flags/4x3/vn.svg" },
        { code: "US", name: "United States (+1)", flag: "https://flagicons.lipis.dev/flags/4x3/us.svg" },
        { code: "CN", name: "China (+86)", flag: "https://flagicons.lipis.dev/flags/4x3/cn.svg" },
        { code: "JP", name: "Japan (+81)", flag: "https://flagicons.lipis.dev/flags/4x3/jp.svg" },
        { code: "KR", name: "South Korea (+82)", flag: "https://flagicons.lipis.dev/flags/4x3/kr.svg" },
    ]

    // Fetch provinces when component mounts
    useEffect(() => {
        fetchProvinces()
    }, [])

    // Fetch districts when province changes
    useEffect(() => {
        if (selectedProvince) {
            fetchDistricts(selectedProvince)
        } else {
            setDistricts([])
            setWards([])
            setSelectedDistrict("")
            setSelectedWard("")
        }
    }, [selectedProvince])

    // Fetch wards when district changes
    useEffect(() => {
        if (selectedDistrict) {
            fetchWards(selectedDistrict)
        } else {
            setWards([])
            setSelectedWard("")
        }
    }, [selectedDistrict])

    // Handle click outside dropdown
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (countryDropdownRef.current && !countryDropdownRef.current.contains(event.target as Node)) {
                setIsCountryDropdownOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    // API functions for Vietnam address data
    const fetchProvinces = async () => {
        try {
            const response = await fetch('https://provinces.open-api.vn/api/p/')
            const data = await response.json()
            console.log('Provinces API response:', data); // Debug API response
            console.log('First province sample:', data[0]); // Debug sample province
            setProvinces(data)
        } catch (error) {
            console.error('Error fetching provinces:', error)
        }
    }

    const fetchDistricts = async (provinceCode: string) => {
        try {
            const response = await fetch(`https://provinces.open-api.vn/api/p/${provinceCode}?depth=2`)
            const data = await response.json()
            console.log('Districts API response:', data); // Debug API response
            console.log('Districts array:', data.districts); // Debug districts array
            setDistricts(data.districts || [])
        } catch (error) {
            console.error('Error fetching districts:', error)
        }
    }

    const fetchWards = async (districtCode: string) => {
        try {
            const response = await fetch(`https://provinces.open-api.vn/api/d/${districtCode}?depth=2`)
            const data = await response.json()
            console.log('Wards API response:', data); // Debug API response
            console.log('Wards array:', data.wards); // Debug wards array
            setWards(data.wards || [])
        } catch (error) {
            console.error('Error fetching wards:', error)
        }
    }

    // Get selected country object
    const getSelectedCountry = () => {
        return countries.find(country => country.code === selectedCountry)
    }

    // Handle discount code application
    const handleApplyDiscount = () => {
        if (!discountCode.trim()) {
            return
        }
        
        // Simulate checking discount code - always invalid for demo
        setDiscountError("Mã khuyến mãi không hợp lệ")
        
        // Clear error after 5 seconds
        setTimeout(() => {
            setDiscountError("")
        }, 5000)
    }

    // Handle order placement
    const handlePlaceOrder = () => {
        // Validate required fields
        if (!email.trim()) {
            alert("Vui lòng nhập email")
            return
        }
        if (!fullName.trim()) {
            alert("Vui lòng nhập họ và tên")
            return
        }
        if (!selectedProvince) {
            alert("Vui lòng chọn tỉnh thành")
            return
        }
        if (!selectedDistrict) {
            alert("Vui lòng chọn quận huyện")
            return
        }
        if (!selectedWard) {
            alert("Vui lòng chọn phường xã")
            return
        }

        // Debug: log the address data
        console.log('Selected codes:', { selectedProvince, selectedDistrict, selectedWard });
        console.log('Arrays lengths:', { 
            provincesLength: provinces.length, 
            districtsLength: districts.length, 
            wardsLength: wards.length 
        });
        console.log('Sample data:', { 
            firstProvince: provinces[0], 
            firstDistrict: districts[0], 
            firstWard: wards[0] 
        });

        // Get province, district, ward names
        const provinceName = provinces.find(p => String(p.code) === selectedProvince)?.name || "";
        const districtName = districts.find(d => String(d.code) === selectedDistrict)?.name || "";
        const wardName = wards.find(w => String(w.code) === selectedWard)?.name || "";

        console.log('Found names:', { provinceName, districtName, wardName });

        // Prepare order data
        const orderData = {
            customerInfo: {
                email: email.trim(),
                fullName: fullName.trim(),
                phoneNumber: phoneNumber.trim(),
                address: address.trim(),
                province: provinceName,
                district: districtName,
                ward: wardName,
                country: getSelectedCountry()?.name || ""
            },
            cartItems: cart.items,
            pricing: {
                subtotal,
                shipping,
                total
            },
            paymentMethod: "Thanh toán khi giao hàng (COD)",
            shippingMethod: "Giao hàng tận nơi"
        };

        // Debug: log the complete order data
        console.log('Complete order data being sent:', orderData);

        // Clear cart after successful order
        clearCart();

        // Navigate to order confirmation with data
        navigate('/order-confirmation', { state: orderData });
    }

    const subtotal = cart.totalAmount
    const shipping = selectedProvince ? 40000 : 0
    const total = subtotal + shipping

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {/* Left Section - 2/3 width */}
                    <div className="lg:col-span-2">
                        {/* Logo */}
                        <div className="text-center mb-6 sm:mb-8 lg:mb-12">
                            <img
                                src="https://bizweb.dktcdn.net/100/487/020/themes/911678/assets/logo.png?1735875826317"
                                alt="DL Solar"
                                className="h-16 sm:h-20 mx-auto"
                            />
                        </div>

                        {/* Customer Information & Shipping/Payment */}
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
                            {/* Customer Information */}
                            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
                                <div className="space-y-4 sm:space-y-6">
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 justify-between">
                                        <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Thông tin nhận hàng</h2>
                                        <button
                                            onClick={() => navigate('/auth?tab=login')}
                                            className="flex items-center gap-2 text-[#2a9dcc] hover:text-blue-600 transition-colors cursor-pointer text-sm"
                                        >
                                            <CircleUserRound className="w-4 h-4 sm:w-5 sm:h-5" />
                                            <span>Đăng nhập</span>
                                        </button>
                                    </div>

                                    <div className="space-y-3 sm:space-y-4">
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-sm sm:text-base"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Họ và tên"
                                            value={fullName}
                                            onChange={(e) => setFullName(e.target.value)}
                                            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-sm sm:text-base"
                                        />
                                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                                            {/* Phone Input */}
                                            <input
                                                type="tel"
                                                placeholder="Số điện thoại (tùy chọn)"
                                                value={phoneNumber}
                                                onChange={(e) => setPhoneNumber(e.target.value)}
                                                className="flex-1 px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded sm:rounded-l sm:rounded-r-none focus:outline-none focus:border-blue-500 text-sm sm:text-base"
                                            />
                                            {/* Country Code Selector */}
                                            <div className="relative flex-shrink-0" ref={countryDropdownRef}>
                                                <div
                                                    onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                                                    className="w-full sm:w-30 h-full px-3 py-2 sm:py-3 border border-gray-300 rounded sm:rounded-r sm:rounded-l-none sm:border-l-0 bg-white focus:outline-none focus:border-blue-500 appearance-none cursor-pointer flex items-center justify-between text-sm sm:text-base"
                                                >
                                                    <div className="flex items-center gap-2">
                                                        {getSelectedCountry() ? (
                                                            <>
                                                                <img
                                                                    src={getSelectedCountry()?.flag}
                                                                    alt={getSelectedCountry()?.name}
                                                                    className="w-4 sm:w-5 h-3 sm:h-4 object-cover rounded-sm border"
                                                                    onError={(e) => {
                                                                        const target = e.target as HTMLImageElement;
                                                                        target.style.display = 'none';
                                                                    }}
                                                                />
                                                                <span className="text-xs sm:text-sm font-medium">{getSelectedCountry()?.code}</span>
                                                            </>
                                                        ) : (
                                                            <span className="text-xs sm:text-sm text-gray-500">Chọn</span>
                                                        )}
                                                    </div>
                                                    <ChevronDownIcon className={`w-3 sm:w-4 h-3 sm:h-4 text-gray-500 transform transition-transform ${isCountryDropdownOpen ? 'rotate-180' : ''}`} />
                                                </div>

                                                {/* Dropdown Options */}
                                                {isCountryDropdownOpen && (
                                                    <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 border-t-0 rounded-b shadow-lg z-10 max-h-60 overflow-y-auto">
                                                        <div
                                                            onClick={() => {
                                                                setSelectedCountry("")
                                                                setIsCountryDropdownOpen(false)
                                                            }}
                                                            className="px-3 py-2 hover:bg-gray-50 cursor-pointer text-xs sm:text-sm text-gray-500"
                                                        >
                                                            Chọn quốc gia
                                                        </div>
                                                        {countries.map((country) => (
                                                            <div
                                                                key={country.code}
                                                                onClick={() => {
                                                                    setSelectedCountry(country.code)
                                                                    setIsCountryDropdownOpen(false)
                                                                }}
                                                                className={`px-3 py-2 hover:bg-blue-50 cursor-pointer flex items-center gap-2 text-xs sm:text-sm ${selectedCountry === country.code ? 'bg-blue-100' : ''
                                                                    }`}
                                                            >
                                                                <img
                                                                    src={country.flag}
                                                                    alt={country.name}
                                                                    className="w-5 sm:w-6 h-3 sm:h-4 object-cover rounded-sm border"
                                                                    onError={(e) => {
                                                                        const target = e.target as HTMLImageElement;
                                                                        target.style.display = 'none';
                                                                    }}
                                                                />
                                                                <span>{country.name}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>

                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Địa chỉ (tùy chọn)"
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-sm sm:text-base"
                                        />
                                        <div className="relative">
                                            <select
                                                value={selectedProvince}
                                                onChange={(e) => {
                                                    console.log('Province changed to:', e.target.value);
                                                    setSelectedProvince(String(e.target.value));
                                                }}
                                                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded bg-white focus:outline-none focus:border-blue-500 appearance-none text-sm sm:text-base"
                                            >
                                                <option value="">Chọn tỉnh thành</option>
                                                {provinces.map((province: Province) => (
                                                    <option key={province.code} value={String(province.code)}>
                                                        {province.name}
                                                    </option>
                                                ))}
                                            </select>
                                            <ChevronDownIcon className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 w-3 sm:w-4 h-3 sm:h-4 text-gray-500 pointer-events-none" />
                                        </div>
                                        <div className="relative">
                                            <select
                                                value={selectedDistrict}
                                                onChange={(e) => {
                                                    console.log('District changed to:', e.target.value);
                                                    setSelectedDistrict(String(e.target.value));
                                                }}
                                                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded bg-white focus:outline-none focus:border-blue-500 appearance-none disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed text-sm sm:text-base"
                                                disabled={!selectedProvince}
                                            >
                                                <option value="">Chọn quận huyện</option>
                                                {districts.map((district: District) => (
                                                    <option key={district.code} value={String(district.code)}>
                                                        {district.name}
                                                    </option>
                                                ))}
                                            </select>
                                            <ChevronDownIcon className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 w-3 sm:w-4 h-3 sm:h-4 text-gray-500 pointer-events-none" />
                                        </div>
                                        <div className="relative">
                                            <select
                                                value={selectedWard}
                                                onChange={(e) => {
                                                    console.log('Ward changed to:', e.target.value);
                                                    setSelectedWard(String(e.target.value));
                                                }}
                                                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded bg-white focus:outline-none focus:border-blue-500 appearance-none disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed text-sm sm:text-base"
                                                disabled={!selectedDistrict}
                                            >
                                                <option value="">Chọn phường xã</option>
                                                {wards.map((ward: Ward) => (
                                                    <option key={ward.code} value={String(ward.code)}>
                                                        {ward.name}
                                                    </option>
                                                ))}
                                            </select>
                                            <ChevronDownIcon className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 w-3 sm:w-4 h-3 sm:h-4 text-gray-500 pointer-events-none" />
                                        </div>
                                        <textarea
                                            placeholder="Ghi chú (tùy chọn)"
                                            rows={3}
                                            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500 resize-none text-sm sm:text-base"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Shipping & Payment */}
                            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
                                <div className="space-y-4 sm:space-y-6">
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-3 sm:mb-4">Vận chuyển</h3>
                                        {selectedProvince ? (
                                            <div className="border border-gray-300 rounded p-3 sm:p-4">
                                                <label className="flex items-center gap-2 sm:gap-3 cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        name="shipping"
                                                        value="delivery"
                                                        checked={true}
                                                        readOnly
                                                        className="w-4 h-4 text-blue-600"
                                                    />
                                                    <span className="text-gray-900 flex-1 text-sm sm:text-base">Giao hàng tận nơi</span>
                                                    <span className="text-gray-900 font-medium text-sm sm:text-base">{formatPrice(40000)}</span>
                                                </label>
                                            </div>
                                        ) : (
                                            <div className="bg-blue-50 border border-blue-200 rounded p-3 sm:p-4 text-blue-800 text-xs sm:text-sm">
                                                Vui lòng nhập thông tin giao hàng
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-3 sm:mb-4">Thanh toán</h3>
                                        <div className="border border-gray-300 rounded p-3 sm:p-4">
                                            <label className="flex items-center gap-2 sm:gap-3 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="payment"
                                                    value="cod"
                                                    checked={selectedPayment === "cod"}
                                                    onChange={(e) => setSelectedPayment(e.target.value)}
                                                    className="w-4 h-4 text-blue-600"
                                                />
                                                <span className="text-gray-900 flex-1 text-sm sm:text-base">Thanh toán khi giao hàng (COD)</span>
                                                <div className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-blue-500 rounded flex items-center justify-center">
                                                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                                                        />
                                                    </svg>
                                                </div>
                                            </label>
                                            <p className="text-xs sm:text-sm text-gray-600 mt-2 sm:mt-3 ml-5 sm:ml-7">Bạn chỉ phải thanh toán khi nhận được hàng</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - 1/3 width - Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200 lg:border-l-0 lg:border-r lg:border-t lg:border-b lg:pl-6 lg:bg-transparent lg:shadow-none">
                            <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-4 sm:mb-6">
                                Đơn hàng ({cart.items.reduce((sum, item) => sum + item.quantity, 0)} sản phẩm)
                            </h3>
                            <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6 max-h-60 sm:max-h-80 overflow-y-auto">
                                {cart.items.map((item) => (
                                    <div key={item.id} className="flex items-start gap-2 sm:gap-3 p-2 sm:p-0">
                                        <div className="relative flex-shrink-0">
                                            <img
                                                src={item.image || "/placeholder.svg"}
                                                alt={item.name}
                                                className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded border-gray-300 border"
                                            />
                                            <span className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-[#2a9dcc] text-white text-xs rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
                                                {item.quantity}
                                            </span>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-xs sm:text-sm text-gray-700 leading-tight font-semibold line-clamp-2">{item.name}</p>
                                        </div>
                                        <div className="text-right flex-shrink-0">
                                            <p className="text-xs sm:text-sm font-semibold text-gray-700">{formatPrice(item.currentPrice * item.quantity)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col sm:flex-row gap-2 mb-4 sm:mb-6">
                                <input
                                    type="text"
                                    placeholder="Nhập mã giảm giá"
                                    value={discountCode}
                                    onChange={(e) => {
                                        setDiscountCode(e.target.value)
                                        // Clear error when user types
                                        if (discountError) {
                                            setDiscountError("")
                                        }
                                    }}
                                    className="flex-1 px-3 py-2 border border-gray-300 rounded text-xs sm:text-sm focus:outline-none focus:border-blue-500"
                                />
                                <button 
                                    onClick={handleApplyDiscount}
                                    disabled={!discountCode.trim()}
                                    className={`px-3 sm:px-4 py-2 rounded text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                                        discountCode.trim()
                                            ? 'bg-[#2a9dcc] text-white hover:bg-blue-600 cursor-pointer'
                                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                    }`}
                                >
                                    Áp dụng
                                </button>
                            </div>
                            {discountError && (
                                <div className="mb-4 sm:mb-6 text-red-600 text-xs sm:text-sm">
                                    {discountError}
                                </div>
                            )}
                            <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                                <div className="flex justify-between text-gray-600 text-sm sm:text-base">
                                    <span>Tạm tính</span>
                                    <span>{formatPrice(subtotal)}</span>
                                </div>
                                <div className="flex justify-between text-gray-600 text-sm sm:text-base">
                                    <span>Phí vận chuyển</span>
                                    <span>{selectedProvince ? formatPrice(shipping) : "-"}</span>
                                </div>
                                <hr className="border-gray-200" />
                                <div className="flex justify-between text-base sm:text-lg font-medium text-[#2a9dcc]">
                                    <span>Tổng cộng</span>
                                    <span>{formatPrice(total)}</span>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
                                <button 
                                    onClick={() => navigate('/cart')}
                                    className="text-[#2a9dcc] text-xs sm:text-sm hover:text-blue-600 flex items-center gap-1 cursor-pointer order-2 sm:order-1"
                                >
                                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                    Quay về giỏ hàng
                                </button>
                                <button 
                                    onClick={handlePlaceOrder}
                                    className="w-full sm:w-auto cursor-pointer bg-[#2a9dcc] text-white px-4 sm:px-6 py-2 sm:py-3 rounded font-medium hover:bg-blue-600 transition-colors text-sm sm:text-base order-1 sm:order-2"
                                >
                                    ĐẶT HÀNG
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}