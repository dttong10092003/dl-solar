import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const routeNameMap: { [key: string]: string } = {
  "": "Trang chủ",
  login: "Đăng nhập tài khoản",
  register: "Đăng ký tài khoản",
  about: "Giới thiệu",
  products: "Tất cả sản phẩm",
};

export default function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const searchParams = new URLSearchParams(location.search);
  const tab = searchParams.get("tab");

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
