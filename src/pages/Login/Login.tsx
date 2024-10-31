import { Link, useNavigate } from 'react-router-dom'
import Background from '../../assets/images/bg_login_register.jpg'
import { schema, Schema } from '../../utils/rule'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { isAxiosUnprocessableEntityError } from '../../utils/utils'
import { ErrorResponse } from '../../types/utils.type'
import Input from '../../components/Input/Input'
import { loginAccount } from '../../apis/auth.api'
import { useContext } from 'react'
import { AppContext } from '../../contexts/app.context'

type FormData = Omit<Schema, 'confirm_password'>
const loginSchema = schema.omit(['confirm_password'])

export default function Login() {
  const { setIsAuthenticated } = useContext(AppContext)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(loginSchema)
  })

  const loginMutation = useMutation({
    mutationFn: (body: Omit<FormData, 'confirm_password'>) => loginAccount(body)
  })

  const onSubmit = handleSubmit((data) => {
    loginMutation.mutate(data, {
      onSuccess: () => {
        setIsAuthenticated(true)
        navigate('/')
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntityError<ErrorResponse<FormData>>(error)) {
          const formError = error.response?.data.data
          if (formError) {
            Object.keys(formError).forEach((key) => {
              setError(key as keyof FormData, {
                message: formError[key as keyof FormData],
                type: 'Server'
              })
            })
          }
        }
      }
    })
  })

  return (
    <div className='bg-fit bg-center h-screen' style={{ backgroundImage: `url(${Background})`, height: '700px' }}>
      <div className='container'>
        <div className='grid grid-cols-1 lg:grid-cols-5 py-12 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='p-10 rounded bg-white shadow-sm' onSubmit={onSubmit} noValidate>
              <div className='text-2xl'>Đăng Nhập</div>
              <Input
                name='email'
                register={register}
                type='email'
                className='mt-8'
                errorMessage={errors.email?.message}
                placeholder='Email'
              />
              {/* Kết thúc input */}
              <Input
                name='password'
                register={register}
                type='password'
                className='mt-1'
                errorMessage={errors.password?.message}
                placeholder='Mật khẩu'
              />
              {/* Kết thúc input */}

              {/* Nút button */}
              <div className='mt-2'>
                <button className='w-full rounded-sm text-center py-4 px-2 uppercase bg-red-600 text-white text-sm hover:bg-red-500'>
                  Đăng nhập
                </button>
              </div>
              <div className='mt-4 flex bg-center justify-center'>
                <p className='text-gray-400'>Bạn chưa có tài khoản?</p>
                <Link to={'/register'} className='ml-2 text-red-500 hover:text-red-600 '>
                  Đăng ký
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
