import { Link } from 'react-router-dom'
import path from '../../../../constants/path'

export default function UserSideNav() {
  return (
    <div className=''>
      <div className='flex item-center border-b border-b-gray-200 py-4'>
        <Link to={path.profile} className='h-12 w-12 flex-shrink-0 overflow-hidden rounded-full border-black'>
          <img
            src='https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/481103818_614921197968664_3847058663743018896_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=1&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGpIivNczXPlnNHwTh87RoTkVWC9hBz8r2RVYL2EHPyvaAGnAAiK5dW8DO4mYLjo_O6rVYZa-EWz2aSmfOqn9yO&_nc_ohc=W0gjw-aODuEQ7kNvgFfybNU&_nc_oc=AdidXJkWE8u83fXII9GzTja2Hht3I_eaU58AhPec035MwRxOin_yZ9W4VxmJfm3u1TY&_nc_zt=23&_nc_ht=scontent.fhan14-5.fna&_nc_gid=AEHd5KzaqZm8aRqn0bc7l7V&oh=00_AYDLIrErsgV9e18NtKzuFPJnmZkdo-NOvEdENFimuwnpgg&oe=67C61262'
            className='h-full w-full object-cover'
            alt='avartar user'
          />
        </Link>
        <div className='flex-grow pl-4'>
          <div className='mb-1 truncate font-semibold text-gray-600'>kidnopro</div>

          <Link to={path.profile} className='flex items-center capitalize'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10'
              />
            </svg>
            Sửa hồ sơ
          </Link>
        </div>
      </div>
      <div className='mt-7'>
        <Link to={path.profile} className='flex items-center capitalize'>
          <div className='mr-3 h-[22px] w-[22px] '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
              />
            </svg>
          </div>
          <span className='text-orange-500'>Tài khoản của tôi</span>
        </Link>
        <div className='mt-3'>
          <Link to={path.changepassword} className='flex items-center capitalize'>
            <div className='mr-3 h-[22px] w-[22px] '>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z'
                />
              </svg>
            </div>
            Đổi mật khẩu
          </Link>
        </div>
        <div className='mt-3'>
          <Link to={path.historyPurchase} className='flex items-center capitalize'>
            <div className='mr-3 h-[22px] w-[22px] '>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75'
                />
              </svg>
            </div>
            Đơn Mua
          </Link>
        </div>
      </div>
    </div>
  )
}
