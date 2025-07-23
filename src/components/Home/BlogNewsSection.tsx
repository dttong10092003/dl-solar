import { Calendar } from "lucide-react"

interface Article {
  id: number
  title: string
  image: string
  date: string
  excerpt: string
}

export default function BlogNewsSection() {
  const latestNews: Article[] = [
    {
      id: 1,
      title: "Phát triển bền vững là gì? Các mục tiêu phát triển bền vững",
      image: "https://bizweb.dktcdn.net/100/487/020/articles/4-deeb2267-a43c-4edd-9345-d152e1fb8b1d.jpg?v=1685089461490",
      date: "26/05/2023",
      excerpt: "Động lực tăng trưởng kinh tế đã dẫn đến nhiều hệ lụy như suy thoái môi trường và chênh lệch xã hội. Do đó phát triển bền vững đã được đặt ra nhằm...",
    },
    {
      id: 2,
      title: "Tín chỉ carbon là gì? Thị trường tín chỉ carbon ở Việt Nam",
      image: "https://bizweb.dktcdn.net/100/487/020/articles/3-0112ae10-3239-4e98-a669-fa5b8a7d7b40.jpg?v=1685089405597",
      date: "26/05/2023",
      excerpt: "Tín chỉ carbon là một đơn vị đo lường được sử dụng để giới hạn lượng khí thải carbon mà một doanh nghiệp được thải ra môi trường. Thuật ngữ này được...",
    },
    {
      id: 3,
      title: "Tiêu dùng xanh là gì? Tầm quan trọng của tiêu dùng xanh",
      image: "https://bizweb.dktcdn.net/100/487/020/articles/2-9137d7d7-bc22-40e4-aa24-d5e0ae487d0d.jpg?v=1685089349713",
      date: "26/05/2023",
      excerpt: "Thế giới đang phải đối mặt với tình trạng ô nhiễm môi trường và biến đổi khí hậu ngày càng. Vì vậy để đảm bảo mục tiêu phát triển bền vững, mỗi quốc gia...",
    },
    {
      id: 4,
      title: "Tiếp địa hệ thống pin mặt trời: Nguy cơ xảy ra khi lắp đặt sai cách",
      image: "https://bizweb.dktcdn.net/100/487/020/articles/1-b7dcd0ed-cc76-4c69-946f-e82419049f2b.jpg?v=1685089281943",
      date: "26/05/2023",
      excerpt: "Nối đất hay tiếp địa hệ thống pin mặt trời là một trong những yếu cầu bắt buộc khi lắp đặt điện mặt trời. Việc lắp đặt tiếp địa cho hệ thống điện mặt trời...",
    },
  ]

  const usefulKnowledge: Article[] = [
    {
      id: 1,
      title: "El Nino là gì? El Nino tác động đến thời tiết tại Việt Nam như thế nào?",
      image: "https://bizweb.dktcdn.net/100/487/020/articles/8-db826524-76aa-4d6c-a11c-7a0ac7ead6da.jpg?v=1685089847453",
      date: "26/05/2023",
      excerpt: "Trong thời gian gần đây, El Nino là cụm từ được bắt gặp rất nhiều trên tivi, báo chí và những kênh mạng xã hội khác. El Nino xuất hiện khiến nhiệt độ trái đất...",
    },
    {
      id: 2,
      title: "Điện gió và năng lượng gió: Những kiến thức cần biết",
      image: "https://bizweb.dktcdn.net/100/487/020/articles/7-a520a37f-a7eb-4f92-9a4b-2407d7d16c31.jpg?v=1685089803273",
      date: "26/05/2023",
      excerpt: "Năng lượng gió là một nguồn năng lượng sạch và bền vững. Việc sử dụng năng lượng gió để tạo ra điện đã được con người biết đến và ứng dụng từ xa...",
    },
    {
      id: 3,
      title: "Biệt thự song lập có những lợi thế gì? Có nên đầu tư không?",
      image: "https://bizweb.dktcdn.net/100/487/020/articles/6-fd633771-8dc4-471e-859b-a9418616e82c.jpg?v=1685089720007",
      date: "26/05/2023",
      excerpt: "Biệt thự song lập là cụm từ xuất hiện phổ biến trên thị trường bất động sản hiện nay. Với thu cầu sống cao cấp, muốn sở hữu nhiều tiện nghi, đồng thời tối...",
    },
    {
      id: 4,
      title: "Cách dùng điều hòa tiết kiệm điện hiệu quả, không hại máy",
      image: "https://bizweb.dktcdn.net/100/487/020/articles/5-06880260-8eed-4413-a564-d3ddf69e8923.jpg?v=1685089650643",
      date: "26/05/2023",
      excerpt: "Hướng dẫn cách dùng điều hòa tiết kiệm điện nhất Trời đất nóng lên, nhiệt độ tăng cao và mùa hè kéo dài là những nguyên nhân khiến nhu cầu sử dụng...",
    },
  ]

  const ArticleCard = ({ article }: { article: Article }) => (
    <div className="flex gap-4 mb-8 group cursor-pointer">
      <div className="flex-shrink-0">
        <img
          src={article.image || "/placeholder.svg"}
          alt={article.title}
          className="w-24 h-20 md:w-52 md:h-39 object-cover rounded-lg"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-blue-900 font-semibold text-sm md:text-lg leading-tight mb-2 group-hover:text-yellow-500 transition-colors duration-300 line-clamp-2">
          {article.title}
        </h3>
        <div className="flex items-center gap-2 text-blue-900 text-base font-semibold mb-2">
          <Calendar size={20} />
          <span>{article.date}</span>
        </div>
        <p className="text-gray-600 text-xs md:text-sm leading-relaxed line-clamp-3">{article.excerpt}</p>
      </div>
    </div>
  )

  return (
    <div className="w-full bg-[#ebf9ff] py-6 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Latest News */}
          <div className="bg-white rounded-2xl p-4">
            <h2 className="text-2xl md:text-4xl font-semibold text-blue-900 mb-8">Tin tức mới nhất</h2>
            <div>
              {latestNews.map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
            <div className="text-center mt-6">
              <button className="cursor-pointer w-full bg-white text-blue-900 border-2 border-blue-900 px-8 py-3 rounded-full font-medium hover:border-yellow-500 hover:bg-yellow-500 hover:text-white transition-all duration-300">
                Xem tất cả
              </button>
            </div>
          </div>

          {/* Useful Knowledge */}
          <div className="bg-white rounded-2xl p-4">
            <h2 className="text-2xl md:text-4xl font-semibold text-blue-900 mb-8">Kiến thức hữu ích</h2>
            <div>
              {usefulKnowledge.map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
            <div className="text-center mt-6">
              <button className="cursor-pointer w-full bg-white text-blue-900 border-2 border-blue-900 px-8 py-3 rounded-full font-medium hover:border-yellow-500 hover:bg-yellow-500 hover:text-white transition-all duration-300">
                Xem tất cả
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
