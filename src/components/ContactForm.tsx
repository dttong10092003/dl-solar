import type React from "react"
import { useState } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    content: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
    // Add form submission logic here
    alert("Thông tin của bạn đã được gửi thành công!")
    setFormData({
      name: "",
      email: "",
      phone: "",
      content: "",
    })
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
      <div className="relative pb-2">
        <h2 className="text-2xl md:text-2xl font-semibold text-blue-900 mb-8">Giải đáp thắc mắc</h2>
        <span className="absolute bottom-8 left-0 w-1/4 h-1 bg-blue-900"></span> {/* Underline */}
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Họ và tên"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
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
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
            required
          />
        </div>
        <div>
          <input
            type="tel"
            name="phone"
            placeholder="Điện thoại"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
            required
          />
        </div>
        <div>
          <textarea
            name="content"
            placeholder="Nội dung"
            rows={5}
            value={formData.content}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 resize-y"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-900 hover:bg-yellow-500 text-white font-medium py-3 px-6 rounded-md transition-colors duration-200 cursor-pointer"
        >
          Gửi thông tin
        </button>
      </form>
    </div>
  )
}
