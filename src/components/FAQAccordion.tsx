import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  id: number
  question: string
  answer: string | string[]
}

interface FAQSectionProps {
  title: string
  faqs: FAQItem[]
}

export default function FAQAccordion({ title, faqs }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div>
      {" "}
      {/* Removed bg-white rounded-3xl shadow-lg p-6 md:p-8 */}
      <div className="relative pb-2">
        {" "}
        {/* Added wrapper for underline */}
        <h2 className="text-2xl md:text-2xl font-semibold text-blue-900 mb-8">{title}</h2>
        <span className="absolute bottom-8 left-0 w-1/8 h-1 bg-blue-900"></span> {/* Underline */}
      </div>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={faq.id} className="border border-gray-200 rounded-xl overflow-hidden">
            <button
              className={`flex justify-between items-center w-full text-left py-4 px-6 font-semibold transition-colors duration-200 ${openIndex === index ? "bg-blue-900 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              onClick={() => toggleAccordion(index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-content-${faq.id}`}
            >
              <span className="text-base md:text-lg">{`${faq.id}. ${faq.question}`}</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-200 ${openIndex === index ? "rotate-180 text-white" : "text-gray-600"
                  }`}
              />
            </button>
            {openIndex === index && (
              <div id={`faq-content-${faq.id}`} className="px-6 py-4 bg-white text-gray-700 text-sm md:text-base">
                {Array.isArray(faq.answer) ? (
                  <ul className="list-disc pl-5 space-y-2">
                    {faq.answer.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{faq.answer}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
