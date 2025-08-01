import { useState, useEffect, useRef } from "react"
import { ChevronDownIcon, CircleUserRound } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { formatPrice } from "../utils/format"

interface Province {
    code: string
    name: string
}

interface District {
    code: string
    name: string
}

interface Ward {
    code: string
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
    const navigate = useNavigate()

    // Address selection states
    const [selectedCountry, setSelectedCountry] = useState("")
    const [selectedProvince, setSelectedProvince] = useState("")
    const [selectedDistrict, setSelectedDistrict] = useState("")
    const [selectedWard, setSelectedWard] = useState("")

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
            setProvinces(data)
        } catch (error) {
            console.error('Error fetching provinces:', error)
        }
    }

    const fetchDistricts = async (provinceCode: string) => {
        try {
            const response = await fetch(`https://provinces.open-api.vn/api/p/${provinceCode}?depth=2`)
            const data = await response.json()
            setDistricts(data.districts || [])
        } catch (error) {
            console.error('Error fetching districts:', error)
        }
    }

    const fetchWards = async (districtCode: string) => {
        try {
            const response = await fetch(`https://provinces.open-api.vn/api/d/${districtCode}?depth=2`)
            const data = await response.json()
            setWards(data.wards || [])
        } catch (error) {
            console.error('Error fetching wards:', error)
        }
    }

    // Get selected country object
    const getSelectedCountry = () => {
        return countries.find(country => country.code === selectedCountry)
    }

    const products = [
        {
            id: 1,
            name: "Quạt cây năng lượng Mặt Trời QHS-V218",
            quantity: 2,
            price: 3240000,
            image: "/placeholder.svg?height=60&width=60",
        },
        {
            id: 2,
            name: "Đèn đường năng lượng mặt trời 70W",
            quantity: 2,
            price: 41228000,
            image: "/placeholder.svg?height=60&width=60",
        },
    ]

    const subtotal = products.reduce((sum, product) => sum + product.price * product.quantity, 0)
    const shipping = selectedProvince ? 40000 : 0
    const total = subtotal + shipping

    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Section - 2/3 width */}
                    <div className="lg:col-span-2">
                        {/* Logo */}
                        <div className="text-center mb-12">
                            <img
                                src="https://bizweb.dktcdn.net/100/487/020/themes/911678/assets/logo.png?1735875826317"
                                alt="DL Solar"
                                className="h-20 mx-auto"
                            />
                        </div>

                        {/* Customer Information & Shipping/Payment */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Customer Information */}
                            <div>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4 mb-2 justify-between">
                                        <h2 className="text-xl font-semibold text-gray-900">Thông tin nhận hàng</h2>
                                        <button
                                            onClick={() => navigate('/auth?tab=login')}
                                            className="flex items-center gap-2 text-[#2a9dcc] hover:text-blue-600 transition-colors cursor-pointer"
                                        >
                                            <CircleUserRound className="w-5 h-5" />
                                            <span className="text-sm">Đăng nhập</span>
                                        </button>
                                    </div>

                                    <div className="space-y-4">
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Họ và tên"
                                            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                                        />
                                        <div className="flex">
                                            {/* Phone Input */}
                                            <input
                                                type="tel"
                                                placeholder="Số điện thoại (tùy chọn)"
                                                value={phoneNumber}
                                                onChange={(e) => setPhoneNumber(e.target.value)}
                                                className="flex-1 px-4 py-3 border border-gray-300 rounded-l focus:outline-none focus:border-blue-500"
                                            />
                                            {/* Country Code Selector */}
                                            <div className="relative flex-shrink-0" ref={countryDropdownRef}>
                                                <div
                                                    onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                                                    className="w-30 h-full px-3 py-3 border border-gray-300 border-l-0 rounded-r bg-white focus:outline-none focus:border-blue-500 appearance-none cursor-pointer flex items-center justify-between"
                                                >
                                                    <div className="flex items-center gap-2">
                                                        {getSelectedCountry() ? (
                                                            <>
                                                                <img
                                                                    src={getSelectedCountry()?.flag}
                                                                    alt={getSelectedCountry()?.name}
                                                                    className="w-5 h-4 object-cover rounded-sm border"
                                                                    onError={(e) => {
                                                                        const target = e.target as HTMLImageElement;
                                                                        target.style.display = 'none';
                                                                    }}
                                                                />
                                                                <span className="text-sm font-medium">{getSelectedCountry()?.code}</span>
                                                            </>
                                                        ) : (
                                                            <span className="text-sm text-gray-500">Chọn</span>
                                                        )}
                                                    </div>
                                                    <ChevronDownIcon className={`w-4 h-4 text-gray-500 transform transition-transform ${isCountryDropdownOpen ? 'rotate-180' : ''}`} />
                                                </div>

                                                {/* Dropdown Options */}
                                                {isCountryDropdownOpen && (
                                                    <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 border-t-0 rounded-b shadow-lg z-10 max-h-60 overflow-y-auto">
                                                        <div
                                                            onClick={() => {
                                                                setSelectedCountry("")
                                                                setIsCountryDropdownOpen(false)
                                                            }}
                                                            className="px-3 py-2 hover:bg-gray-50 cursor-pointer text-sm text-gray-500"
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
                                                                className={`px-3 py-2 hover:bg-blue-50 cursor-pointer flex items-center gap-2 text-sm ${selectedCountry === country.code ? 'bg-blue-100' : ''
                                                                    }`}
                                                            >
                                                                <img
                                                                    src={country.flag}
                                                                    alt={country.name}
                                                                    className="w-6 h-4 object-cover rounded-sm border"
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
                                            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                                        />
                                        <div className="relative">
                                            <select
                                                value={selectedProvince}
                                                onChange={(e) => setSelectedProvince(e.target.value)}
                                                className="w-full px-4 py-3 border border-gray-300 rounded bg-white focus:outline-none focus:border-blue-500 appearance-none"
                                            >
                                                <option value="">Chọn tỉnh thành</option>
                                                {provinces.map((province: Province) => (
                                                    <option key={province.code} value={province.code}>
                                                        {province.name}
                                                    </option>
                                                ))}
                                            </select>
                                            <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                                        </div>
                                        <div className="relative">
                                            <select
                                                value={selectedDistrict}
                                                onChange={(e) => setSelectedDistrict(e.target.value)}
                                                className="w-full px-4 py-3 border border-gray-300 rounded bg-white focus:outline-none focus:border-blue-500 appearance-none disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
                                                disabled={!selectedProvince}
                                            >
                                                <option value="">Chọn quận huyện</option>
                                                {districts.map((district: District) => (
                                                    <option key={district.code} value={district.code}>
                                                        {district.name}
                                                    </option>
                                                ))}
                                            </select>
                                            <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                                        </div>
                                        <div className="relative">
                                            <select
                                                value={selectedWard}
                                                onChange={(e) => setSelectedWard(e.target.value)}
                                                className="w-full px-4 py-3 border border-gray-300 rounded bg-white focus:outline-none focus:border-blue-500 appearance-none disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
                                                disabled={!selectedDistrict}
                                            >
                                                <option value="">Chọn phường xã</option>
                                                {wards.map((ward: Ward) => (
                                                    <option key={ward.code} value={ward.code}>
                                                        {ward.name}
                                                    </option>
                                                ))}
                                            </select>
                                            <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                                        </div>
                                        <textarea
                                            placeholder="Ghi chú (tùy chọn)"
                                            rows={4}
                                            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500 resize-none"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Shipping & Payment */}
                            <div>
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-xl font-medium text-gray-900 mb-4">Vận chuyển</h3>
                                        {selectedProvince ? (
                                            <div className="border border-gray-300 rounded p-4">
                                                <label className="flex items-center gap-3 cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        name="shipping"
                                                        value="delivery"
                                                        checked={true}
                                                        readOnly
                                                        className="w-4 h-4 text-blue-600"
                                                    />
                                                    <span className="text-gray-900 flex-1">Giao hàng tận nơi</span>
                                                    <span className="text-gray-900 font-medium">{formatPrice(40000)}</span>
                                                </label>
                                            </div>
                                        ) : (
                                            <div className="bg-blue-50 border border-blue-200 rounded p-4 text-blue-800 text-sm">
                                                Vui lòng nhập thông tin giao hàng
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-medium text-gray-900 mb-4">Thanh toán</h3>
                                        <div className="border border-gray-300 rounded p-4">
                                            <label className="flex items-center gap-3 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="payment"
                                                    value="cod"
                                                    checked={selectedPayment === "cod"}
                                                    onChange={(e) => setSelectedPayment(e.target.value)}
                                                    className="w-4 h-4 text-blue-600"
                                                />
                                                <span className="text-gray-900 flex-1">Thanh toán khi giao hàng (COD)</span>
                                                <div className="w-8 h-8 border-2 border-blue-500 rounded flex items-center justify-center">
                                                    <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                                                        />
                                                    </svg>
                                                </div>
                                            </label>
                                            <p className="text-sm text-gray-600 mt-3 ml-7">Bạn chỉ phải thanh toán khi nhận được hàng</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - 1/3 width - Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="border-l border-gray-200 pl-6">
                            <h3 className="text-xl font-medium text-gray-900 mb-6">
                                Đơn hàng ({products.reduce((sum, p) => sum + p.quantity, 0)} sản phẩm)
                            </h3>
                            <div className="space-y-4 mb-6">
                                {products.map((product) => (
                                    <div key={product.id} className="flex items-start gap-3">
                                        <div className="relative flex-shrink-0">
                                            <img
                                                src={product.image || "/placeholder.svg"}
                                                alt={product.name}
                                                className="w-12 h-12 object-cover rounded border"
                                            />
                                            <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                                {product.quantity}
                                            </span>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm text-gray-900 leading-tight">{product.name}</p>
                                        </div>
                                        <div className="text-right flex-shrink-0">
                                            <p className="font-medium text-gray-900">{formatPrice(product.price * product.quantity)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex gap-2 mb-6">
                                <input
                                    type="text"
                                    placeholder="Nhập mã giảm giá"
                                    value={discountCode}
                                    onChange={(e) => setDiscountCode(e.target.value)}
                                    className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-500"
                                />
                                <button className="px-4 py-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors">
                                    Áp dụng
                                </button>
                            </div>
                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between text-gray-600">
                                    <span>Tạm tính</span>
                                    <span>{formatPrice(subtotal)}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Phí vận chuyển</span>
                                    <span>{selectedProvince ? formatPrice(shipping) : "-"}</span>
                                </div>
                                <hr className="border-gray-200" />
                                <div className="flex justify-between text-lg font-medium text-blue-600">
                                    <span>Tổng cộng</span>
                                    <span>{formatPrice(total)}</span>
                                </div>
                            </div>
                            <div className="mb-4">
                                <button className="text-blue-500 text-sm hover:underline flex items-center gap-1">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                    Quay về giỏ hàng
                                </button>
                            </div>
                            <button className="w-full bg-blue-600 text-white py-3 rounded font-medium hover:bg-blue-700 transition-colors">
                                ĐẶT HÀNG
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}