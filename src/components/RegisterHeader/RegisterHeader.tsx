import { Link } from "react-router-dom";
import logoShopee from "../../assets/images/logoShopee.png";

export default function RegisterHeader() {
  return (
    <header className="py-5 h-24 bg-white-400 bg-white z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-full px-4">
        <nav className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src={logoShopee}
             className="h-12 w-auto sm:h-14 md:h-16 lg:h-20 mb-4"
             alt="Logo Shopee" />
          </Link>

          <div className="ml-5 text-xl lg:text-2xl flex items-center h-full">
               Đăng nhập
          </div>
        </nav>
        <Link to="/" className="text-orange-500 flex items-center">
          Bạn cần giúp đỡ?
        </Link>
      </div>
    </header>
  );
}
