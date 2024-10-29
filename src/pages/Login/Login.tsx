import { Link } from "react-router-dom";
import Background from "../../assets/images/bg_login_register.jpg"


export default function Login() {
  

  return (
    <div
      className="bg-fit bg-center h-screen"
      style={{ backgroundImage: `url(${Background})`, height: "700px" }}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-5 py-12 lg:py-32 lg:pr-10">
          <div className="lg:col-span-2 lg:col-start-4">
            <form
              className="p-10 rounded bg-white shadow-sm"
             
              noValidate
            >
              <div className="text-2xl">Đăng Nhập</div>
              <div className="mt-8">
                <input type="text" 
                name="email"
                className="p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm"
                placeholder="Email "
                />
               <div className="mt-2 text-red-500 min-h-[1rem] text-sm"></div>
              </div>

              <div className="mt-1">
                <input type="password" 
                name="password"
                className="p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm"
                placeholder="Mật khẩu"
                />
               <div className="mt-2 text-red-500 min-h-[1rem] text-sm"></div>
              </div>
              {/* Kết thúc input */}
            
              {/* Nút button */}
              <div className="mt-2">
               <button className="w-full rounded-sm text-center py-4 px-2 uppercase bg-red-600 text-white text-sm hover:bg-red-500">
                  Đăng nhập
               </button>
              </div>
              <div className="mt-4 flex bg-center justify-center">
                <p className="text-gray-400">Bạn chưa có tài khoản?</p>
                <Link
                  to={"/register"}
                  className="ml-2 text-red-500 hover:text-red-600 "
                >
                  Đăng ký
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
