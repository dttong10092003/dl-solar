import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FaFacebookF, FaGoogle } from "react-icons/fa";

export default function AuthenticationForm() {
  const [searchParams] = useSearchParams();
  const tabParam = searchParams.get("tab");
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [activeTab, setActiveTab] = useState(tabParam);
  const navigate = useNavigate();

  // Sync tab state when URL changes
  useEffect(() => {
    setActiveTab(tabParam);
    setShowForgotPassword(false);
  }, [tabParam]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeTab === "register") {
      console.log("Register form submitted:", formData);
    } else {
      console.log("Login form submitted:", {
        email: formData.email,
        password: formData.password,
      });
    }
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`${provider} login clicked`);
  };

  const switchTab = (tab: string) => {
    setShowForgotPassword(false);
    navigate(`/auth?tab=${tab}`);
  };

  return (
    <div className="bg-[#ebf9ff] flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8 font-semibold">
      <div className="max-w-md w-full space-y-5">
        <div className="bg-white rounded-lg shadow-md p-5">
          {/* Tabs */}
          <div className="flex mb-4">
            <button
              onClick={() => switchTab("login")}
              className={`cursor-pointer flex-1 py-2 px-2 text-center text-sm font-medium transition-all duration-200 ${
                activeTab === "login"
                  ? "text-blue-900 border-b-2 border-blue-900"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              ĐĂNG NHẬP
            </button>
            <button
              onClick={() => switchTab("register")}
              className={`cursor-pointer flex-1 py-2 px-2 text-center text-sm font-medium transition-all duration-200 ${
                activeTab === "register"
                  ? "text-blue-900 border-b-2 border-blue-900"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              ĐĂNG KÝ
            </button>
          </div>

          {/* Title */}
          <div className="text-center mb-4">
            <h2 className="text-3xl font-semibold text-gray-800">
              {activeTab === "register" ? "ĐĂNG KÝ" : "ĐĂNG NHẬP"}
            </h2>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            {activeTab === "register" ? (
              <>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Họ"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-0 py-1.5 text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 focus:border-blue-900 focus:outline-none placeholder-gray-500"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Tên"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-0 py-1.5 text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 focus:border-blue-900 focus:outline-none placeholder-gray-500"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-0 py-1.5 text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 focus:border-blue-900 focus:outline-none placeholder-gray-500"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Số điện thoại"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-0 py-1.5 text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 focus:border-blue-900 focus:outline-none placeholder-gray-500"
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Mật khẩu"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-0 py-1.5 text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 focus:border-blue-900 focus:outline-none placeholder-gray-500"
                  required
                />
              </>
            ) : (
              <>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-0 py-1.5 text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 focus:border-blue-900 focus:outline-none placeholder-gray-500"
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Mật khẩu"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-0 py-1.5 text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 focus:border-blue-900 focus:outline-none placeholder-gray-500"
                  required
                />
              </>
            )}

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                className="cursor-pointer w-full bg-blue-900 hover:bg-yellow-500 text-white text-sm font-medium py-2 rounded-md transition duration-200 focus:outline-none"
              >
                {activeTab === "register" ? "Đăng ký" : "Đăng nhập"}
              </button>

              {activeTab === "login" && (
                <div className="text-center mt-3">
                  <button
                    type="button"
                    onClick={() => setShowForgotPassword(!showForgotPassword)}
                    className="text-gray-500 hover:text-blue-900 text-xs"
                  >
                    <span className="cursor-pointer text-center font-medium text-sm text-gray-700 mb-2 hover:text-yellow-500">
                      Quên mật khẩu
                    </span>
                  </button>
                </div>
              )}
            </div>

            {showForgotPassword && (
              <div>
                <input
                  type="email"
                  name="forgotEmail"
                  placeholder="Email"
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  className="w-full px-0 py-1.5 text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 focus:border-blue-900 focus:outline-none placeholder-gray-500"
                  required
                />
                <button
                  type="button"
                  onClick={() =>
                    console.log("Request reset password for:", forgotEmail)
                  }
                  className="w-full mt-3 bg-blue-900 hover:bg-yellow-500 text-white text-sm font-medium py-2 rounded-md transition duration-200 focus:outline-none"
                >
                  Lấy lại mật khẩu
                </button>
              </div>
            )}
          </form>

          {/* Social Login */}
          <div className="mt-4">
            <div className="text-center text-gray-600 text-sm mb-2">
              Hoặc đăng nhập bằng
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleSocialLogin("Facebook")}
                className="cursor-pointer flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-3 rounded-md flex items-center justify-center gap-1"
              >
                <FaFacebookF size={16} /> Facebook
              </button>
              <button
                onClick={() => handleSocialLogin("Google")}
                className="cursor-pointer flex-1 bg-red-500 hover:bg-red-600 text-white text-sm font-medium py-2 px-3 rounded-md flex items-center justify-center gap-1"
              >
                <FaGoogle size={16} /> Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
