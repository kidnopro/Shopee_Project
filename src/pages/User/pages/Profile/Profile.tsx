import Input from '../../../../components/Input/Input'

export default function Profile() {
  return (
    <div className='rounded-sm bg-white px-2 pb-20 shadow md:px-7'>
      <div className='border-b border-b-gray-200 py-6'>
        <h1 className='text-lg font-medium capitalize text-gray-900'>Hồ sơ của tôi</h1>
        <div className='mt-1 text-sm text-gray-600'>Quản lí thông tin hồ sơ để bảo mật tài khoản</div>
      </div>
      <div className='mt-6 flex flex-col-reverse md:flex-row md:items-start'>
        <form className='mt-6 flex-grow pr-12 md:mt-0 md:pr-12'>
          <div className='flex flex-col flex-wrap sm:flex-row'>
            <div className='sm:sm: w-[20%] truncate pt-3 text-right capitalize'>Email:</div>
            <div className='w-[80%] pl-5'>
              <div className='pt-3 text-gray-700'>ho********ack@gmail.com</div>
            </div>
          </div>
          <div className='mt-3 flex flex-wrap'>
            <div className='sm: w-[20%] truncate pt-3 text-right capitalize'>Tên:</div>
            <div className='sm: w-[80%] pl-5'>
              <Input classNameInput='w-full rounded-sm border border-gray-300 px-3 py-2 outline-none focus:border-gray-500 focus:shadow-sm' />
            </div>
          </div>
          <div className='mt-2 flex flex-wrap'>
            <div className='sm: w-[20%] truncate pt-3 text-right capitalize'>Số điện thoại:</div>
            <div className='sm: w-[80%] pl-5'>
              <Input classNameInput='w-full rounded-sm border border-gray-300 px-3 py-2 outline-none focus:border-gray-500 focus:shadow-sm' />
            </div>
          </div>
          <div className='mt-2 flex flex-wrap'>
            <div className='sm: w-[20%] truncate pt-3 text-right capitalize'>Địa chỉ:</div>
            <div className='sm:w-[80%] pl-5'>
              <Input classNameInput='w-full rounded-sm border border-gray-300 px-3 py-2 outline-none focus:border-gray-500 focus:shadow-sm' />
            </div>
          </div>
          <div className='mt-2 flex flex-wrap'>
            <div className='sm: w-[20%] truncate pt-3 text-right capitalize'>Ngày sinh:</div>
            <div className='sm: w-[80%] pl-5'>
              <div className='flex justify-between'>
                <select className='h-10 w-[32%] rounded-sm border border-black '>
                  <option disabled>Ngày</option>
                </select>
                <select className='h-10 w-[32%] rounded-sm border border-black '>
                  <option disabled>Tháng</option>
                </select>
                <select className='h-10 w-[32%] rounded-sm border border-black '>
                  <option disabled>Năm</option>
                </select>
              </div>
            </div>
          </div>
        </form>
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
            <button className='flex h-10 items-center justify-end rounded-sm border bg-white px-6 text-sm text-gray-500 capitalizen shadow-sm'>
              Chọn ảnh
            </button>
            <span className='mt-3 text-gray-400'>Dung lượng tối đa là 1MB</span>
            <span className='mt-1 text-gray-400'>Định dạng: .JPEG,.PNG</span>
          </div>
        </div>
      </div>
    </div>
  )
}
