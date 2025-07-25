import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { categories, subcategories, newsCategories, routeNameMap } from "../data";


export default function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const searchParams = new URLSearchParams(location.search);
  const tab = searchParams.get("tab");
  const categoryId = searchParams.get("category");

  // Find news category name for /news route
  const newsCategory = categoryId ? newsCategories.find((c) => c.id === Number(categoryId)) : null;

  return (
    <nav className="text-sm py-4 px-6 text-gray-700 bg-white shadow-sm">
      <ul className="flex items-center space-x-2 ml-24">
        <li>
          <Link to="/" className="hover:text-yellow-500 font-sans">
            Trang chủ
          </Link>
        </li>

        {pathnames.map((value, index) => {
          const to = "/" + pathnames.slice(0, index + 1).join("/");
          const isLast = index === pathnames.length - 1;

          // Handle the news page specially to include news category
          if (value === "news" && isLast) {
            return (
              <li key={to} className="flex items-center space-x-2">
                <ChevronRight size={18} className="text-blue-800" />
                <Link
                  to="/news"
                  className={`font-sans ${!newsCategory ? "text-yellow-500" : "hover:text-yellow-500"}`}
                >
                  {routeNameMap[value] || "Tin tức"}
                </Link>
                {newsCategory && (
                  <li className="flex items-center space-x-2">
                    <ChevronRight size={18} className="text-blue-800" />
                    <Link
                      to={`/news?category=${categoryId}`}
                      className="text-yellow-500 font-sans hover:text-yellow-600"
                    >
                      {newsCategory.name}
                    </Link>
                  </li>
                )}
              </li>
            );
          }

          // Handle the products page specially to include category/subcategory
          if (value === "products" && isLast) {
            const category = searchParams.get("category")
              ? categories.find((c) => c.id === Number(searchParams.get("category")))
              : null;
            const subcategory = searchParams.get("subcategory")
              ? subcategories.find((s) => s.id === Number(searchParams.get("subcategory")))
              : null;

            return (
              <li key={to} className="flex items-center space-x-2">
                <ChevronRight size={18} className="text-blue-800" />
                <Link
                  to="/products"
                  className={`font-sans ${!category ? "text-yellow-500" : "hover:text-yellow-500"}`}
                >
                  {routeNameMap[value] || "Sản phẩm"}
                </Link>
                {category && (
                  <li className="flex items-center space-x-2">
                    <ChevronRight size={18} className="text-blue-800" />
                    {subcategory ? (
                      <Link
                        to={`/products?category=${searchParams.get("category")}`}
                        className="hover:text-yellow-500 font-sans"
                      >
                        {category.name}
                      </Link>
                    ) : (
                      <Link
                        to={`/products?category=${searchParams.get("category")}`}
                        className="text-yellow-500 font-sans hover:text-yellow-600"
                      >
                        {category.name}
                      </Link>
                    )}
                  </li>
                )}
                {subcategory && (
                  <li className="flex items-center space-x-2">
                    <ChevronRight size={18} className="text-blue-800" />
                    <span className="text-yellow-500 font-sans">{subcategory.name}</span>
                  </li>
                )}
              </li>
            );
          }

          return (
            <li key={to} className="flex items-center space-x-2">
              <ChevronRight size={18} className="text-blue-800" />
              {isLast ? (
                <span className="text-yellow-500 font-sans">
                  {value === "auth" && tab
                    ? routeNameMap[tab]
                    : routeNameMap[value] || value}
                </span>
              ) : (
                <Link to={to} className="hover:text-yellow-500 font-sans">
                  {routeNameMap[value] || value}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}