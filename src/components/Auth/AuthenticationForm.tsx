import type React from "react"
import { useState } from "react"

export default function AuthenticationForm() {
  const [activeTab, setActiveTab] = useState("register") // "login" or "register"
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (activeTab === "register") {
      console.log("Register form submitted:", formData)
    } else {
      console.log("Login form submitted:", { email: formData.email, password: formData.password })
    }
  }

  const handleSocialLogin = (provider: string) => {
    console.log(`${provider} login clicked`)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Tab Navigation */}
          <div className="flex mb-8">
            <button
              onClick={() => setActiveTab("login")}
              className={`flex-1 py-3 px-4 text-center font-medium transition-all duration-200 ${
                activeTab === "login" ? "text-blue-900 border-b-2 border-blue-900" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              ĐĂNG NHẬP
            </button>
            <button
              onClick={() => setActiveTab("register")}
              className={`flex-1 py-3 px-4 text-center font-medium transition-all duration-200 ${
                activeTab === "register"
                  ? "text-blue-900 border-b-2 border-blue-900"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              ĐĂNG KÝ
            </button>
          </div>

          {/* Form Title */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              {activeTab === "register" ? "ĐĂNG KÝ" : "ĐĂNG NHẬP"}
            </h2>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {activeTab === "register" ? (
              // Register Form Fields
              <>
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Họ"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-0 py-3 text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 focus:border-blue-900 focus:outline-none transition-colors duration-200 placeholder-gray-500"
                    required
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Tên"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-0 py-3 text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 focus:border-blue-900 focus:outline-none transition-colors duration-200 placeholder-gray-500"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-0 py-3 text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 focus:border-blue-900 focus:outline-none transition-colors duration-200 placeholder-gray-500"
                    required
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Số điện thoại"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-0 py-3 text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 focus:border-blue-900 focus:outline-none transition-colors duration-200 placeholder-gray-500"
                    required
                  />
                </div>

                <div>
                  <input
                    type="password"
                    name="password"
                    placeholder="Mật khẩu"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-0 py-3 text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 focus:border-blue-900 focus:outline-none transition-colors duration-200 placeholder-gray-500"
                    required
                  />
                </div>
              </>
            ) : (
              // Login Form Fields
              <>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-0 py-3 text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 focus:border-blue-900 focus:outline-none transition-colors duration-200 placeholder-gray-500"
                    required
                  />
                </div>

                <div>
                  <input
                    type="password"
                    name="password"
                    placeholder="Mật khẩu"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-0 py-3 text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 focus:border-blue-900 focus:outline-none transition-colors duration-200 placeholder-gray-500"
                    required
                  />
                </div>
                {activeTab === "login" && (
                  <div className="text-center">
                    <button
                      type="button"
                      onClick={() => console.log("Forgot password clicked")}
                      className="text-gray-600 hover:text-blue-900 text-sm transition-colors duration-200"
                    >
                      Quên mật khẩu
                    </button>
                  </div>
                )}
              </>
            )}

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-blue-900 hover:bg-blue-800 text-white font-medium py-4 px-6 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {activeTab === "register" ? "Đăng ký" : "Đăng nhập"}
              </button>
            </div>
          </form>

          {/* Social Login Section */}
          <div className="mt-8">
            <div className="text-center text-gray-600 mb-4">Hoặc đăng nhập bằng</div>

            <div className="flex gap-4">
              <button
                onClick={() => handleSocialLogin("Facebook")}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <span className="font-bold">f</span>
                Facebook
              </button>

              <button
                onClick={() => handleSocialLogin("Google")}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <span className="font-bold">G+</span>
                Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
