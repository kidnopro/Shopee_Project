import { Link } from "react-router-dom";
import Background from "../../assets/images/bg_login_register.jpg"
import { RegisterOptions, useForm } from "react-hook-form";
import { getRules } from "../../utils/rule";

interface FormData{
  email: string;
  password: string;
  confirm_password: string;
}


export default function Login() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },  
  } = useForm<FormData>();
  const rules = getRules(getValues);    
  const onSubmit = handleSubmit(data => {

  })

  


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
              onSubmit={onSubmit}
              noValidate
            >
              <div className="text-2xl">Đăng Ký</div>

              <div className="mt-8">
                <input type="email" 
                className="p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm"
                placeholder="Email "
                {...register("email", rules.email as RegisterOptions<FormData>)}
                />
               <div className="mt-2 text-red-500 min-h-[1.25rem] text-sm"> {errors.email?.message} </div>
              </div>

              <div className="mt-1">
                <input type="password" 
                className="p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm"
                placeholder="Mật khẩu"
                {...register("password",rules.password as RegisterOptions<FormData>)}
                />
               <div className="mt-2 text-red-500 min-h-[1.25rem] text-sm "> {errors.password?.message} </div>
              </div>

              <div className="mt-1">
                <input type="password" 
                className="p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm"
                placeholder="Nhâp lại mật khẩu"
                {...register("confirm_password",rules.confirm_password as RegisterOptions<FormData>)}
                  />
               <div className="mt-2 text-red-500 min-h-[1.25rem] text-sm"> {errors.confirm_password?.message} </div>
              </div>
              {/* Kết thúc input */}
            
              {/* Nút button */}
             <div className="mt-2">
               <button 
               type="submit"
               className="w-full rounded-sm text-center py-4 px-2 uppercase bg-red-600 text-white text-sm hover:bg-red-500">
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
