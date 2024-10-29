import { Link, useNavigate } from "react-router-dom";
import Background from "../../assets/images/bg_login_register.jpg"


export default function Login() {
  

  return (
    <div
      className="bg-fit bg-center h-screen"
      style={{ backgroundImage: `url(${Background})`, height: "700px" }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 py-12 lg:py-32 lg:pr-10">
          <div className="lg:col-span-2 lg:col-start-4">
            <form
              className="p-10 rounded bg-white shadow-sm"
             
              noValidate
            >
              <div className="text-2xl">Đăng Ký</div>
              <div className="mt-8">
                <input type="text" 
                className="p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm"
                placeholder="Email "
                />
               <div className="mt-2 text-red-500 min-h-[1rem] text-sm"> </div>
              </div>

              <div className="mt-1">
                <input type="password" 
                className="p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm"
                placeholder="Mật khẩu"
                />
               <div className="mt-2 text-red-500 min-h-[1rem] text-sm"> </div>
              </div>

              <div className="mt-1">
                <input type="password" 
                className="p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm"
                placeholder="Nhâp lại mật khẩu"
                />
               <div className="mt-2 text-red-500 min-h-[1rem] text-sm"> </div>
              </div>

              {/* Kết thúc input */}
            

              {/* Nút button */}
             <div className="mt-2">
               <button className="w-full rounded-sm text-center py-4 px-2 uppercase bg-red-600 text-white text-sm hover:bg-red-500">
                  Đăng ký
               </button>
              </div>
              <div className="mt-4 flex bg-center justify-center">
                <p className="text-gray-400">Bạn đã có tài khoản?</p>
                <Link
                  to={"/login"}
                  className="ml-2 text-red-500 hover:text-red-600 "
                >
                  Đăng nhập
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
