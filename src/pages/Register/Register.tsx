import { Link } from "react-router-dom";
import Background from "../../assets/images/bg_login_register.jpg"
import { useForm } from "react-hook-form";
import Input from "../../components/Input/Input";
import { schema,Schema } from "../../utils/rule";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { registerAccount } from "../../apis/auth.api";
import { omit } from "lodash";
import { isAxiosUnprocessableEntityError } from "../../utils/utils";
import { ResponseApi } from "../../types/utils.type";

type FormData = Schema

export default function Register() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },  
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const loginMutation = useMutation({
    mutationFn : (body: Omit<FormData, 
    "confirm_password">) => registerAccount(body),
  })
 
  const onSubmit = handleSubmit((data) => {
    const body = omit(data,["confirm_password"])
    loginMutation.mutate(body,{
      onSuccess: (data) => {
        console.log(data)
      },
      onError: (error) => {
       if(isAxiosUnprocessableEntityError<ResponseApi<Omit<FormData, "cofirm_password">>>(error)) {
        const formError = error.response?.data.data
        if(formError) {
          Object.keys(formError).forEach((key) => {
            setError(key as keyof Omit<FormData, "confirm_password">,{
              message: formError[key as keyof Omit<FormData, "confirm_password">],
              type: "Server"
            })
          })
        }
       }
      }
    })
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