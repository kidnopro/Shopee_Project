import { useMutation, useQuery } from '@tanstack/react-query'
import Button from '../../../../components/Button/Button'
import Input from '../../../../components/Input/Input'
import userApi from '../../../../apis/user.api'
import { UserChema, userSchema } from '../../../../utils/rule'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import InputNumber from '../../../../components/InputNumber/InputNumber'
import { useEffect } from 'react'
import DateSelect from '../../components/DateSelect'

type FormData = Pick<UserChema, 'name' | 'address' | 'phone' | 'date_of_birth' | 'avatar'>
const profleSchema = userSchema.pick(['name', 'address', 'phone', 'date_of_birth', 'avatar'])

export default function Profile() {
  const { data: profileData } = useQuery({
    queryKey: ['profile'],
    queryFn: userApi.getProfile
  })
  const profile = profileData?.data.data
  const updateProfileMutation = useMutation(userApi.updateProfile)
  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
    setValue,
    watch,
    setError
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      phone: '',
      address: '',
      date_of_birth: new Date(2000, 0, 1),
      avatar: ''
    },
    resolver: yupResolver(profleSchema)
  })

  useEffect(() => {
    if (profile) {
      setValue('name', profile.name)
      setValue('phone', profile.phone)
      setValue('address', profile.address)
      setValue('avatar', profile.avatar)
      setValue('date_of_birth', profile.date_of_birth ? new Date(profile.date_of_birth) : new Date(2000, 0, 1))
    }
  }, [profile, setValue])

  const onSubmit = handleSubmit(async (data) => {
    await updateProfileMutation.mutateAsync()
  })

  return (
    <div className='rounded-sm bg-white px-2 pb-20 shadow md:px-7'>
      <div className='border-b border-b-gray-200 py-6'>
        <h1 className='text-lg font-medium capitalize text-gray-900'>Hồ sơ của tôi</h1>
        <div className='mt-1 text-sm text-gray-600'>Quản lí thông tin hồ sơ để bảo mật tài khoản</div>
      </div>
      <form className='mt-6 flex flex-col-reverse md:flex-row md:items-start' onSubmit={onSubmit}>
        <div className='mt-6 flex-grow pr-12 md:mt-0 md:pr-12'>
          <div className='flex flex-col flex-wrap sm:flex-row'>
            <div className='sm:sm: w-[20%] truncate pt-3 text-right capitalize'>Email:</div>
            <div className='w-[80%] pl-5'>
              <div className='pt-3 text-gray-700'>{profile?.email}</div>
            </div>
          </div>
          <div className='mt-3 flex flex-wrap'>
            <div className='sm: w-[20%] truncate pt-3 text-right capitalize'>Tên:</div>
            <div className='sm: w-[80%] pl-5'>
              <Input
                classNameInput='w-full rounded-sm border border-gray-300 px-3 py-2 outline-none focus:border-gray-500 focus:shadow-sm'
                register={register}
                name='name'
                placeholder='Nhập tên'
                errorMessage={errors.name?.message}
              />
            </div>
          </div>
          <div className='mt-2 flex flex-wrap'>
            <div className='sm: w-[20%] truncate pt-3 text-right capitalize'>Số điện thoại:</div>
            <div className='sm: w-[80%] pl-5'>
              <Controller
                control={control}
                name='phone'
                render={({ field }) => (
                  <InputNumber
                    classNameInput='w-full rounded-sm border border-gray-300 px-3 py-2 outline-none focus:border-gray-500 focus:shadow-sm'
                    placeholder='Nhập số điện thoại'
                    errorMessage={errors.phone?.message}
                    {...field}
                    onChange={field.onChange}
                  />
                )}
              />
            </div>
          </div>
          <div className='mt-2 flex flex-wrap'>
            <div className='sm: w-[20%] truncate pt-3 text-right capitalize'>Địa chỉ:</div>
            <div className='sm:w-[80%] pl-5'>
              <Input
                classNameInput='w-full rounded-sm border border-gray-300 px-3 py-2 outline-none focus:border-gray-500 focus:shadow-sm'
                register={register}
                name='address'
                placeholder='Nhập địa chỉ'
                errorMessage={errors.address?.message}
              />
            </div>
          </div>
          <Controller
            control={control}
            name='date_of_birth'
            render={({ field }) => (
              <DateSelect errorMessage={errors.date_of_birth?.message} value={field.value} onChange={field.onChange} />
            )}
          />

          {/* END */}
          <div className='mt-2 flex flex-col flex-wrap sm: flex-row'>
            <div className='truncate pt-32 capitalize sm:w-[20%] sm: text-right' />
            <div className='sm:w-[80%] sm:pl-5'>
              <Button
                className='flex h-9 items-center bg-orange-500 px-5 text-center text-sm text-white hover:bg-orange-600'
                type='submit'
              >
                Lưu
              </Button>
            </div>
          </div>
        </div>

        <div className='flex justify-center md:w-72 md:border-l md:border-l-gray-200'>
          <div className='flex flex-col items-center'>
            <div className='my-5 h-24 w-24'>
              <img
                className='w-full h-full rounded-full object-cover'
                src='https://png.pngtree.com/thumb_back/fh260/background/20210908/pngtree-beautiful-student-girl-fresh-and-lovely-photography-picture-with-image_821128.jpg'
                alt='avatar user'
              />
            </div>
            <input className='hidden' type='file' accept='.jpg,.jpeg,.png' />
            <button
              className='flex h-10 items-center justify-end rounded-sm border bg-white px-6 text-sm text-gray-500 capitalizen shadow-sm'
              type='button'
            >
              Chọn ảnh
            </button>
            <span className='mt-3 text-gray-400'>Dung lượng tối đa là 1MB</span>
            <span className='mt-1 text-gray-400'>Định dạng: .JPEG,.PNG</span>
          </div>
        </div>
      </form>
    </div>
  )
}
