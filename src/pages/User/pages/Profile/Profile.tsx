import { useMutation, useQuery } from '@tanstack/react-query'
import Button from '../../../../components/Button/Button'
import Input from '../../../../components/Input/Input'
import { Controller, useForm } from 'react-hook-form'
import userApi from '../../../../apis/user.api'
import { userSchema, UserSchema } from '../../../../utils/rule'
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect } from 'react'
import DateSelect from '../../components/DateSelect'


type FormData = Pick<UserSchema, 'name' | 'address' | 'phone' | 'date_of_birth' | 'avatar'>

const profileSchema = userSchema.pick(['name', 'address', 'phone', 'date_of_birth', 'avatar'])

export default function Profile() {
  const { data: profileData, refetch } = useQuery({
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
      address: '',
      phone: '',
      avatar: '',
      date_of_birth: new Date(1990, 0, 1)
    },
    resolver: yupResolver(profileSchema)
  })

  useEffect(() => {
    if (profile) {
      setValue('name', profile.name)
      setValue('address', profile.address)
      setValue('phone', profile.phone)
      setValue('avatar', profile.avatar)
      setValue('date_of_birth', profile.date_of_birth ? new Date(profile.date_of_birth) : new Date(1990, 0, 1))
    }
  }, [profile, setValue])

  const onSubmit = handleSubmit(async (data) => {
    await updateProfileMutation.mutateAsync({ ...data, date_of_birth: data.date_of_birth?.toISOString() })
    refetch()
  })

  return (
    <div className='rounded bg-white px-2 pb-10 md:pb-20 shadow md:px-7 '>
      <div className='border-b border-b-gray-200 py-6'>
        <h1 className='text-lg font-medium capitalize text-gray-900'>Hồ sơ của tôi</h1>
        <div className='mt-1 text-sm text-gray-70'>Quản lí thông tin để bảo mật tài khoản</div>
      </div>
      <form className='mt-8 flex flex-col-reverse md:flex-row md:item-start' onSubmit={onSubmit}>
        <div className='mt-6 flex-grow md:mt-0 md:pr-12 '>
          <div className='flex flex-col flex-wrap sm:flex-row'>
            <div className='w-[20%] truncate pt-3 text-right capitalize'>Email:</div>

            <div className='w-[80%] pl-5'>
              <div className='pt-3 text-gray-700'>{profile?.email}</div>
            </div>
          </div>
          <div className='mt-6 flex flex-col flex-wrap sm:flex-row'>
            <div className='w-[20%] truncate pt-3 text-right capitalize'>Tên:</div>
            <div className='w-[80%] pl-5'>
              <Input
                classNameInput='w-full rounded-sm border border-gray-300 px-3 py-2 ouline-none focus: border-gray-500 focus:shadow-sm'
                placeholder='Nhập họ tên'
                register={register}
                name='name'
                errorMessage={errors.name?.message}
              />
            </div>
          </div>
          <div className='mt-2 flex flex-col flex-wrap sm:flex-row'>
            <div className='w-[20%] truncate pt-3 text-right capitalize'>SDT:</div>
            <div className='w-[80%] pl-5'>
              <Controller
                control={control}
                name='phone'
                render={({ field }) => (
                  <Input
                    classNameInput='w-full rounded-sm border border-gray-300 px-3 py-2 ouline-none focus: border-gray-500 focus:shadow-sm'
                    placeholder='Nhập số điện thoại'
                    errorMessage={errors.phone?.message}
                    {...field}
                    onChange={field.onChange}
                  />
                )}
              />
            </div>
          </div>
          <div className='mt-2 flex flex-col flex-wrap sm:flex-row'>
            <div className='w-[20%] truncate pt-3 text-right capitalize'>Địa Chỉ:</div>
            <div className='w-[80%] pl-5'>
              <Input
                classNameInput='w-full rounded-sm border border-gray-300 px-3 py-2 ouline-none focus: border-gray-500 focus:shadow-sm'
                placeholder='Nhập địa chỉ'
                register={register}
                name='address'
                errorMessage={errors.address?.message}
              />
            </div>
          </div>
          <Controller
            control={control}
            name='date_of_birth'
            render={({ field }) => (
              <DateSelect errorMessage={errors.date_of_birth?.message} onChange={field.onChange} value={field.value} />
            )}
          />

          <div className='mt-3 flex flex-col flex-wrap sm:flex-row'>
            <div className='truncate pt-3 capitalize sm:w-[20%] sm:text-right' />
            <div className='sm:w-[80%] sm:pl-5'>
              <Button
                className='bg-orange-500 hover:bg-orange-600 flex h-9 items-center rounded-sm px-5 text-center text-sm text-white'
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
                src='https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/04/anh-con-gai-1-1.jpg'
                alt='avatar'
                className='w-full h-full rounded-full object-cover'
              />
            </div>
            <input type='file' accept='.jpg,.jpeg,.png' className='hidden' />
            <button
              className='flex h-10 items-center justify-end rounded-sm border bg-white px-6 text-sm text-gray-600 shadow-sm'
              type='button'
            >
              Chọn ảnh
            </button>
            <div className='mt-3 text-gray-400'>Dung lượng tối đa là 1Mb</div>
            <div className='mt-2 text-gray-400'>Định dạng: .JPG,.JPEG,.PNG</div>
          </div>
        </div>
      </form>
    </div>
  )
}
