import { useState } from "react";

export default function ScheduleSurveyForm() {
    const [selectedDate, setSelectedDate] = useState<string>("");
    return (
        <div className="bg-[#ebf9ff] py-8 px-6">
            {/* Header Section - First Rounded Div */}

            <div className="max-w-7xl mx-auto pb-8">
                <div className="bg-white rounded-3xl p-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-semibold text-blue-900 mb-6">Đặt lịch khảo sát</h1>
                        <p className="text-gray-600 text-base leading-relaxed mx-auto px-10">
                            Đội ngũ của chúng tôi sẽ xuống khảo sát nơi bạn dự định lắp đặt và đưa ra những giải pháp tối ưu nhất
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content: Illustration and Form - Two separate rounded divs within a grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                {/* Illustration Column - Second Rounded Div */}
                <div className="bg-white rounded-xl p-8 flex justify-center items-center">
                    <img
                        src="https://bizweb.dktcdn.net/100/487/020/themes/911678/assets/datlich.png?1735875826317"
                        alt="Illustration of a person marking a calendar"
                        className="max-w-full h-auto"

                    />
                </div>

                {/* Form Column - Third Rounded Div */}
                <div className="bg-white rounded-xl p-8 w-full">
                    <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Name Input */}
                        <div className="col-span-1">
                            <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-1 block">
                                Họ và tên:
                            </label>
                            <input
                                id="name"
                                placeholder="Họ và tên..."
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1d4ed8]"
                            />
                        </div>

                        {/* Email Input */}
                        <div className="col-span-1">
                            <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1 block">
                                Email:
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Email"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1d4ed8]"
                            />
                        </div>

                        {/* Phone Number Input */}
                        <div className="col-span-1">
                            <label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-1 block">
                                Số điện thoại:
                            </label>
                            <input
                                id="phone"
                                type="tel"
                                placeholder="Số điện thoại..."
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1d4ed8]"
                            />
                        </div>

                        {/* Date Picker - Pure HTML */}
                        <div className="col-span-1">
                            <label htmlFor="date" className="text-sm font-medium text-gray-700 mb-1 block">
                                Chọn ngày:
                            </label>
                            <input
                                id="date"
                                type="date"
                                value={selectedDate}
                                onChange={(e) => setSelectedDate(e.target.value)}
                                min={new Date().toISOString().split('T')[0]}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1d4ed8]"
                            />
                        </div>


                        {/* Notes Textarea */}
                        <div className="col-span-full">
                            <label htmlFor="notes" className="text-sm font-medium text-gray-700 mb-1 block">
                                Ghi chú:
                            </label>
                            <textarea
                                id="notes"
                                placeholder="Nhập ghi chú"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md min-h-[100px] focus:outline-none focus:ring-2 focus:ring-[#1d4ed8]"
                            ></textarea>
                        </div>

                        {/* Support Hotline Text */}
                        <div className="col-span-full text-center text-gray-500 text-sm mt-2">
                            Hỗ trợ thêm liên hệ ngay số điện thoại 1900 6750
                        </div>

                        {/* Submit Button */}
                        <div className="col-span-full flex justify-center mt-4">
                            <button
                                type="submit"
                                className="cursor-pointer bg-blue-900 hover:bg-yellow-500 text-white font-semibold py-2 px-6 rounded-md transition-colors duration-300"
                            >
                                Đặt lịch ngay
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}