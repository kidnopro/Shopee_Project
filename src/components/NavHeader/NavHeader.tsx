import { Link } from 'react-router-dom'
import Popover from '../Popover'
import path from '../../constants/path'
import { useContext } from 'react'
import { AppContext } from '../../contexts/app.context'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import authApi from '../../apis/auth.api'

import { toast } from 'react-toastify'
import { purchasesStatus } from '../../constants/purchase'

export default function NavHeader() {
  const { setIsAuthenticated, isAuthenticated, setProfile, profile } = useContext(AppContext)
  const queryClient = useQueryClient()
  const logoutMutation = useMutation({
    mutationFn: authApi.logout,
    onSuccess: () => {
      setIsAuthenticated(false)
      setProfile(null)
      queryClient.removeQueries({ queryKey: ['purchases', { status: purchasesStatus.inCart }] })
      toast.success('Đăng xuất thành công!', { autoClose: 500 })
    }
  })
  const handleLogout = () => {
    logoutMutation.mutate()
  }
  return (
    <div className='flex justify-end'>
      <Popover
        className='flex items-center py-1 hover:text-gray-300 cursor-pointer'
        renderPopover={
          <div className='bg-white relative shadow-md rounded-sm border border-gray-200'>
            <div className='flex flex-col py-2 pr-28 pl-3'>
              <button className='py-2 px-3 hover:text-orange-500'>Tiếng Việt</button>
              <button className='py-2 px-3 hover:text-orange-500 mt-2'>Tiếng Anh</button>
            </div>
          </div>
        }
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-5 h-5'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418'
          />
        </svg>
        <span className='mx-1'>Tiếng Việt</span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-5 h-5'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
        </svg>
      </Popover>
      {isAuthenticated && (
        <Popover
          className='flex items-center py-1 hover:text-gray-300 
     cursor-pointer ml-6'
          renderPopover={
            <div className='bg-white relative shadow-md rounded-sm border border-gray-200'>
              <Link to={path.profile} className='block py-2 px-3  bg-white hover:text-orange-500 w-full text-left'>
                Tài khoản của tôi
              </Link>
              <Link to='/' className='block py-2 px-3  bg-white hover:text-orange-500 w-full text-left'>
                Đơn mua
              </Link>
              <button
                onClick={handleLogout}
                className='block py-2 px-3  bg-white hover:text-orange-500 w-full text-left'
              >
                Đăng xuất
              </button>
            </div>
          }
        >
          <div className='w-6 h-6 mr-2 flex-shrink-0'>
            <img
              src='https://images2.thanhnien.vn/528068263637045248/2024/2/29/ngoc-trinh-17092008337491979682561.jpg'
              alt='avatar'
              className='w-full h-full object-cover rounded-full'
            />
          </div>
          <div className=''>{profile?.email}</div>
        </Popover>
      )}
      {!isAuthenticated && (
        <div className='flex items-center'>
          <Link to={path.register} className='mx-3 capitalize hover:text-gray-300'>
            Đăng ký
          </Link>
          <div className='border-r-[1px] border-p-white/40 h-4'></div>
          <Link to={path.login} className='mx-3 capitalize hover:text-gray-300'>
            Đăng nhập
          </Link>
        </div>
      )}
    </div>
  )
}
