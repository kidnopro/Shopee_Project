import { Link } from "react-router-dom";
import Background from "../../assets/images/bg_login_register.jpg"
import { useForm } from "react-hook-form";
import Input from "../../components/Input/Input";
import { schema } from "../../utils/rule";
import { yupResolver } from "@hookform/resolvers/yup";



interface FormData{
 
}


export default function Register() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },  
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  
  
  const onSubmit = handleSubmit(data => {
   
  })

  

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
              onSubmit={onSubmit}
              noValidate
            >
              <div className="text-2xl">Đăng Ký</div>

              <Input
                name="email"
               register={register}
               type="email"
               className="mt-8"
               errorMessage={errors.email?.message}
               placeholder="Email"
             
              />
              {/* Kết thúc input */}
              <Input
                name="password"
               register={register}
               type="password"
               className="mt-1"
               errorMessage={errors.password?.message}
               placeholder="Mật khẩu"
              
              />
                {/* Kết thúc input */}
                <Input
               name="confirm_password"
               register={register}
               type="password"
               className="mt-1"
               errorMessage={errors.confirm_password?.message}
               placeholder="Nhập lại mật khẩu"
              
              />
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
