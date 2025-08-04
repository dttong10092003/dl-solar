import type { Category, Article } from '../types/index'

export const categories: Category[] = [
    { id: 1, name: "Tin tức điện mặt trời" },
    { id: 2, name: "Kiến thức hữu ích" },
]

export const news: Article[] = [
    {
        id: 1,
        title: "Phát triển bền vững là gì? Các mục tiêu phát triển bền vững",
        image: "https://bizweb.dktcdn.net/100/487/020/articles/8-db826524-76aa-4d6c-a11c-7a0ac7ead6da.jpg?v=1685089847453",
        date: "26/05/2023",
        excerpt: "Động lực tăng trưởng kinh tế đã dẫn đến nhiều hệ lụy như suy thoái môi trường và chênh lệch xã hội. Do đó phát triển bền vững đã được đặt ra nhằm. Động lực tăng trưởng kinh tế đã dẫn đến nhiều hệ lụy như suy thoái môi trường và chênh lệch xã hội. Do đó phát triển bền vững đã được đặt ra nhằm",
        categoryId: 1,
        author: "Trần Tấn Phát",
        content: `
            <h2 class="text-2xl font-bold text-[#003366] mb-4">Nội dung chính</h2>
            <ul class="list-disc pl-6 mb-6 space-y-2">
                <li>Phát triển bền vững là gì?</li>
                <li>Các mục tiêu phát triển bền vững</li>
                <li>Nguyên tắc để đạt được sự phát triển bền vững</li>
                <li>Vai trò của công nghệ năng lượng tái tạo trong phát triển bền vững</li>
            </ul>
            
            <p class="mb-4">
                Động lực tăng trưởng kinh tế đã dẫn đến nhiều hệ lụy như suy thoái môi trường và chênh lệch xã hội. Do đó phát triển bền vững đã được đặt ra nhằm thúc đẩy các quốc gia phát triển trên cơ sở: tăng trưởng kinh tế, đảm bảo công bằng xã hội và bảo vệ môi trường.
            </p>

            <h2 class="text-2xl font-bold text-[#003366] mb-4">Phát triển bền vững là gì?</h2>
            <p class="mb-4">
                <strong>"Phát triển bền vững là sự phát triển đáp ứng nhu cầu của hiện tại mà không làm tổn hại đến khả năng đáp ứng nhu cầu của các thế hệ tương lai".</strong>
            </p>
            
            <p class="mb-6">
                Khái niệm phát triển bền vững có thể được giải thích theo nhiều cách khác nhau, nhưng nội dung cốt lõi của nó vẫn là một cách tiếp cận để phát triển kinh tế của một quốc gia mà không làm ảnh hưởng đến chất lượng môi trường cho các thế hệ tương lai.
            </p>

            <img src="https://bizweb.dktcdn.net/100/487/020/articles/8-db826524-76aa-4d6c-a11c-7a0ac7ead6da.jpg?v=1685089847453" alt="Phát triển bền vững" class="w-full rounded-lg mb-4" />
            <p class="text-sm text-gray-600 text-center mb-6">Thế nào là phát triển bền vững?</p>

            <h2 class="text-2xl font-bold text-[#003366] mb-4">Các mục tiêu phát triển bền vững là gì? 17 mục tiêu</h2>
            <p class="mb-4">
                Vào năm 2015, các quốc gia thành viên Liên Hợp Quốc đã thông qua Chương trình nghị sự 2030 cho Phát triển Bền vững, bao gồm 17 Mục tiêu Phát triển Bền vững (SDGs). Đây là lời kêu gọi hành động toàn cầu nhằm chấm dứt nghèo đói, bảo vệ hành tinh và đảm bảo rằng tất cả mọi người đều tận hưởng hòa bình và thịnh vượng vào năm 2030.
            </p>
            
            <p class="mb-4">
                17 mục tiêu phát triển bền vững bao gồm: Xóa đói giảm nghèo, An ninh lương thực, Sức khỏe và phúc lợi, Giáo dục chất lượng, Bình đẳng giới, Nước sạch và vệ sinh, Năng lượng sạch và giá cả phải chăng, Việc làm bền vững và tăng trưởng kinh tế, Công nghiệp, đổi mới và cơ sở hạ tầng, Giảm bất bình đẳng, Thành phố và cộng đồng bền vững, Tiêu dùng và sản xuất có trách nhiệm, Hành động vì khí hậu, Đại dương, Đất liền, Hòa bình, công lý và thể chế mạnh, Đối tác vì mục tiêu.
            </p>
        `
    },
    {
        id: 2,
        title: "Tín chỉ carbon là gì? Thị trường tín chỉ carbon ở Việt Nam",
        image: "https://bizweb.dktcdn.net/100/487/020/articles/7-a520a37f-a7eb-4f92-9a4b-2407d7d16c31.jpg?v=1685089803273",
        date: "26/05/2023",
        excerpt: "Tín chỉ carbon là một đơn vị đo lường được sử dụng để giới hạn lượng khí thải carbon mà một doanh nghiệp được thải ra môi trường. Thuật ngữ này được...",
        categoryId: 1,
        author: "Nguyễn Văn An",
        content: `
            <p class="mb-4">
                Tín chỉ carbon là một đơn vị đo lường được sử dụng để giới hạn lượng khí thải carbon mà một doanh nghiệp được thải ra môi trường. Thuật ngữ này được sử dụng rộng rãi trong các chương trình giảm thiểu khí thải nhà kính.
            </p>
            
            <h2 class="text-2xl font-bold text-[#003366] mb-4">Tín chỉ carbon hoạt động như thế nào?</h2>
            <p class="mb-4">
                Hệ thống tín chỉ carbon hoạt động theo nguyên tắc "cap-and-trade" (giới hạn và giao dịch). Chính phủ đặt ra một giới hạn tổng thể về lượng khí thải được phép trong một khu vực hoặc ngành công nghiệp cụ thể.
            </p>
            
            <img src="https://bizweb.dktcdn.net/100/487/020/articles/7-a520a37f-a7eb-4f92-9a4b-2407d7d16c31.jpg?v=1685089803273" alt="Tín chỉ carbon" class="w-full rounded-lg mb-4" />
            
            <h2 class="text-2xl font-bold text-[#003366] mb-4">Thị trường tín chỉ carbon tại Việt Nam</h2>
            <p class="mb-4">
                Việt Nam đang trong quá trình phát triển thị trường tín chỉ carbon để đạt được mục tiêu trung hòa carbon vào năm 2050. Điều này tạo ra nhiều cơ hội cho các doanh nghiệp đầu tư vào công nghệ sạch và năng lượng tái tạo.
            </p>
        `
    },
    {
        id: 3,
        title: "Tiêu dùng xanh là gì? Tầm quan trọng của tiêu dùng xanh",
        image: "https://bizweb.dktcdn.net/100/487/020/articles/6-fd633771-8dc4-471e-859b-a9418616e82c.jpg?v=1685089720007",
        date: "26/05/2023",
        excerpt: "Thế giới đang phải đối mặt với tình trạng ô nhiễm môi trường và biến đổi khí hậu ngày càng. Vì vậy để đảm bảo mục tiêu phát triển bền vững, mỗi quốc gia...",
        categoryId: 1,
        author: "Lê Thị Mai",
        content: `
            <p class="mb-4">
                Thế giới đang phải đối mặt với tình trạng ô nhiễm môi trường và biến đổi khí hậu ngày càng nghiêm trọng. Vì vậy, để đảm bảo mục tiêu phát triển bền vững, mỗi quốc gia cần thúc đẩy tiêu dùng xanh.
            </p>
            
            <h2 class="text-2xl font-bold text-[#003366] mb-4">Tiêu dùng xanh là gì?</h2>
            <p class="mb-4">
                Tiêu dùng xanh là việc lựa chọn và sử dụng các sản phẩm, dịch vụ thân thiện với môi trường, góp phần giảm thiểu tác động tiêu cực đến môi trường và con người.
            </p>
            
            <img src="https://bizweb.dktcdn.net/100/487/020/articles/6-fd633771-8dc4-471e-859b-a9418616e82c.jpg?v=1685089720007" alt="Tiêu dùng xanh" class="w-full rounded-lg mb-4" />
        `
    },
    {
        id: 4,
        title: "Tiếp địa hệ thống pin mặt trời: Nguy cơ xảy ra khi lắp đặt sai cách",
        image: "https://bizweb.dktcdn.net/100/487/020/articles/5-06880260-8eed-4413-a564-d3ddf69e8923.jpg?v=1685089650643",
        date: "26/05/2023",
        excerpt: "Nối đất hay tiếp địa hệ thống pin mặt trời là một trong những yêu cầu bắt buộc khi lắp đặt điện mặt trời. Việc lắp đặt tiếp địa cho hệ thống điện mặt trời...",
        categoryId: 1,
        author: "Phạm Văn Đức",
        content: `
            <p class="mb-4">
                Nối đất hay tiếp địa hệ thống pin mặt trời là một trong những yêu cầu bắt buộc khi lắp đặt điện mặt trời. Việc lắp đặt tiếp địa cho hệ thống điện mặt trời không chỉ đảm bảo an toàn mà còn tăng hiệu quả vận hành.
            </p>
            
            <h2 class="text-2xl font-bold text-[#003366] mb-4">Tại sao cần tiếp địa hệ thống pin mặt trời?</h2>
            <p class="mb-4">
                Tiếp địa giúp bảo vệ hệ thống khỏi sét đánh, giảm thiểu rủi ro cháy nổ và đảm bảo an toàn cho người sử dụng.
            </p>
            
            <img src="https://bizweb.dktcdn.net/100/487/020/articles/5-06880260-8eed-4413-a564-d3ddf69e8923.jpg?v=1685089650643" alt="Tiếp địa pin mặt trời" class="w-full rounded-lg mb-4" />
        `
    },
    {
        id: 5,
        title: "El Nino là gì? El Nino tác động đến thời tiết tại Việt Nam như thế nào?",
        image: "https://bizweb.dktcdn.net/100/487/020/articles/4-deeb2267-a43c-4edd-9345-d152e1fb8b1d.jpg?v=1685089461490",
        date: "26/05/2023",
        excerpt: "Trong thời gian gần đây, El Nino là cụm từ được bắt gặp rất nhiều trên tivi, báo chí và những kênh mạng xã hội khác. El Nino xuất hiện khiến nhiệt độ trái đất...",
        categoryId: 2,
        author: "Nguyễn Thị Lan",
        content: `
            <p class="mb-4">
                Trong thời gian gần đây, El Niño là cụm từ được bắt gặp rất nhiều trên tivi, báo chí và những kênh mạng xã hội khác. El Niño xuất hiện khiến nhiệt độ trái đất tăng cao và ảnh hưởng đến thời tiết toàn cầu.
            </p>
            
            <h2 class="text-2xl font-bold text-[#003366] mb-4">El Niño là gì?</h2>
            <p class="mb-4">
                El Niño là hiện tượng khí hậu xảy ra khi nhiệt độ bề mặt nước biển ở khu vực Thái Bình Dương nhiệt đới trung tâm và phía đông tăng cao bất thường.
            </p>
            
            <img src="https://bizweb.dktcdn.net/100/487/020/articles/4-deeb2267-a43c-4edd-9345-d152e1fb8b1d.jpg?v=1685089461490" alt="El Nino" class="w-full rounded-lg mb-4" />
        `
    },
    {
        id: 6,
        title: "Điện gió và năng lượng gió: Những kiến thức cần biết",
        image: "https://bizweb.dktcdn.net/100/487/020/articles/3-0112ae10-3239-4e98-a669-fa5b8a7d7b40.jpg?v=1685089405597",
        date: "26/05/2023",
        excerpt: "Năng lượng gió là một nguồn năng lượng sạch và bền vững. Việc sử dụng năng lượng gió để tạo ra điện đã được con người biết đến và ứng dụng từ xa...",
        categoryId: 2,
        author: "Hoàng Văn Nam",
        content: `
            <p class="mb-4">
                Năng lượng gió là một nguồn năng lượng sạch và bền vững. Việc sử dụng năng lượng gió để tạo ra điện đã được con người biết đến và ứng dụng từ xa xưa.
            </p>
            
            <h2 class="text-2xl font-bold text-[#003366] mb-4">Ưu điểm của năng lượng gió</h2>
            <p class="mb-4">
                Năng lượng gió không tạo ra khí thải carbon, có thể tái tạo vô hạn và chi phí vận hành thấp sau khi đầu tư ban đầu.
            </p>
            
            <img src="https://bizweb.dktcdn.net/100/487/020/articles/3-0112ae10-3239-4e98-a669-fa5b8a7d7b40.jpg?v=1685089405597" alt="Năng lượng gió" class="w-full rounded-lg mb-4" />
        `
    },
    {
        id: 7,
        title: "Biệt thự song lập có những lợi thế gì? Có nên đầu tư không?",
        image: "https://bizweb.dktcdn.net/100/487/020/articles/7.jpg?v=1685087738607",
        date: "26/05/2023",
        excerpt: "Biệt thự song lập là cụm từ xuất hiện phổ biến trên thị trường bất động sản hiện nay. Với nhu cầu sống cao cấp, muốn sở hữu nhiều tiện nghi, đồng thời tối...",
        categoryId: 2,
        author: "Trần Minh Tuấn",
        content: `
            <p class="mb-4">
                Biệt thự song lập là cụm từ xuất hiện phổ biến trên thị trường bất động sản hiện nay. Với nhu cầu sống cao cấp, muốn sở hữu nhiều tiện nghi, đồng thời tối ưu chi phí, biệt thự song lập đang trở thành lựa chọn hàng đầu.
            </p>
            
            <h2 class="text-2xl font-bold text-[#003366] mb-4">Lợi thế của biệt thự song lập</h2>
            <p class="mb-4">
                Biệt thự song lập mang lại không gian sống riêng tư nhưng vẫn tối ưu được chi phí xây dựng và bảo trì so với biệt thự đơn lập.
            </p>
            
            <img src="https://bizweb.dktcdn.net/100/487/020/articles/7.jpg?v=1685087738607" alt="Biệt thự song lập" class="w-full rounded-lg mb-4" />
        `
    },
    {
        id: 8,
        title: "Cách dùng điều hòa tiết kiệm điện hiệu quả, không hại máy",
        image: "https://bizweb.dktcdn.net/100/487/020/articles/8.jpg?v=1685087928170",
        date: "26/05/2023",
        excerpt: "Hướng dẫn cách dùng điều hòa tiết kiệm điện nhất Trái đất nóng lên, nhiệt độ tăng cao và mùa hè kéo dài là những nguyên nhân khiến nhu cầu sử dụng...",
        categoryId: 2,
        author: "Lê Văn Hùng",
        content: `
            <p class="mb-4">
                Hướng dẫn cách dùng điều hòa tiết kiệm điện nhất. Trái đất nóng lên, nhiệt độ tăng cao và mùa hè kéo dài là những nguyên nhân khiến nhu cầu sử dụng điều hòa tăng cao.
            </p>
            
            <h2 class="text-2xl font-bold text-[#003366] mb-4">Mẹo tiết kiệm điện khi dùng điều hòa</h2>
            <ul class="list-disc pl-6 mb-4">
                <li>Đặt nhiệt độ hợp lý (25-26°C)</li>
                <li>Thường xuyên vệ sinh máy điều hòa</li>
                <li>Sử dụng chế độ timer</li>
                <li>Đóng kín cửa ra vào</li>
            </ul>
            
            <img src="https://bizweb.dktcdn.net/100/487/020/articles/8.jpg?v=1685087928170" alt="Tiết kiệm điện điều hòa" class="w-full rounded-lg mb-4" />
        `
    },
]
