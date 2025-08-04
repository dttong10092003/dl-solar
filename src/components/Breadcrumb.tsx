import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { categories, subcategories, newsCategories, routeNameMap, products } from "../data";
import { news } from "../data/newsData";


export default function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const searchParams = new URLSearchParams(location.search);
  const tab = searchParams.get("tab");
  const categoryId = searchParams.get("category");

  // Find news category name for /news route
  const newsCategory = categoryId ? newsCategories.find((c) => c.id === Number(categoryId)) : null;

  // Create breadcrumb items array
  const breadcrumbItems = [];

  // Add home
  breadcrumbItems.push({
    label: "Trang chủ",
    link: "/",
    isActive: false
  });

  // Handle product detail page specially
  if (pathnames[0] === "product" && pathnames[1]) {
    const productId = pathnames[1];
    const product = products.find(p => p.id === Number(productId));
    
    breadcrumbItems.push({
      label: "Sản phẩm",
      link: "/products",
      isActive: false
    });
    
    if (product) {
      breadcrumbItems.push({
        label: product.name,
        link: null,
        isActive: true
      });
    }
  }
  // Handle news page
  else if (pathnames[0] === "news") {
    // Check if this is a news detail page
    if (pathnames[1]) {
      const newsId = pathnames[1];
      const article = news.find(n => n.id === Number(newsId));
      
      breadcrumbItems.push({
        label: routeNameMap["news"] || "Tin tức",
        link: "/news",
        isActive: false
      });
      
      if (article) {
        breadcrumbItems.push({
          label: article.title,
          link: null,
          isActive: true
        });
      }
    } else {
      // Regular news listing page
      breadcrumbItems.push({
        label: routeNameMap["news"] || "Tin tức",
        link: newsCategory ? "/news" : null,
        isActive: !newsCategory
      });
      
      if (newsCategory) {
        breadcrumbItems.push({
          label: newsCategory.name,
          link: null,
          isActive: true
        });
      }
    }
  }
  // Handle products page
  else if (pathnames[0] === "products") {
    const category = searchParams.get("category")
      ? categories.find((c) => c.id === Number(searchParams.get("category")))
      : null;
    const subcategory = searchParams.get("subcategory")
      ? subcategories.find((s) => s.id === Number(searchParams.get("subcategory")))
      : null;

    breadcrumbItems.push({
      label: routeNameMap["products"] || "Sản phẩm",
      link: category ? "/products" : null,
      isActive: !category
    });
    
    if (category) {
      breadcrumbItems.push({
        label: category.name,
        link: subcategory ? `/products?category=${searchParams.get("category")}` : null,
        isActive: !subcategory
      });
    }
    
    if (subcategory) {
      breadcrumbItems.push({
        label: subcategory.name,
        link: null,
        isActive: true
      });
    }
  }
  // Handle other pages
  else {
    pathnames.forEach((value, index) => {
      const isLast = index === pathnames.length - 1;
      const to = "/" + pathnames.slice(0, index + 1).join("/");
      
      breadcrumbItems.push({
        label: value === "auth" && tab ? routeNameMap[tab] : routeNameMap[value] || value,
        link: isLast ? null : to,
        isActive: isLast
      });
    });
  }

  return (
    <nav className="text-sm py-3 lg:py-4 px-4 lg:px-6 text-gray-700 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto">
        <ul className="flex items-center space-x-1 lg:space-x-2 overflow-x-auto scrollbar-hide">
          {breadcrumbItems.map((item, index) => (
            <li key={index} className="flex items-center space-x-1 lg:space-x-2 whitespace-nowrap">
              {index > 0 && <ChevronRight size={16} className="text-blue-800 lg:w-[18px] lg:h-[18px] flex-shrink-0" />}
              {item.link ? (
                <Link to={item.link} className="inline-flex items-center hover:text-yellow-500 font-sans text-xs lg:text-sm">
                  {item.label}
                </Link>
              ) : (
                <span className={`inline-flex items-center font-sans text-xs lg:text-sm ${item.isActive ? "text-yellow-500" : "text-gray-700"}`}>
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}