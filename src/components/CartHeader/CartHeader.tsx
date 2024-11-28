import { Link } from 'react-router-dom'
import NavHeader from '../NavHeader'
import logoShopee from '../../assets/images/logoShopee.png'
import path from '../../constants/path'
import useSearchProducts from '../../hooks/useSearchProducts'

export default function CartHeader() {
  const { onSubmitSearch, register } = useSearchProducts()
  return (
    <div className='border-b border-b-black/10'>
      <div className='bg-orange-600 text-white'>
        <div className='container'>
          <NavHeader />
        </div>
      </div>

      <div className='bg-white py-1'>
        <div className='container'>
          <div className='md:flex md:items-center md:justify-between'>
            <Link to={path.home} className='flex flex-shrink-0 item-end'>
              <Link to='/' className='flex items-center'>
                <img src={logoShopee} className='h-12 w-auto sm:h-14 md:h-16 lg:h-20 mb-4' alt='Logo Shopee' />
                <div className='mx-4 h-8 w-[1px] bg-orange-500'></div>
                <div className='text-orange-500 ml-2 lg:text-xl'>Giỏ hàng</div>
              </Link>
            </Link>
            <form className='mt-3 md:mt-0 md:w-[50%]' onSubmit={onSubmitSearch}>
              <div className='flex rounded-sm border-2 border-orange'>
                <input
                  type='text'
                  className='w-full flex-grow border-none bg-transparent px-3 py-1 text-black outline-none'
                  placeholder='Free Ship Đơn Từ 0Đ'
                  {...register('name')}
                />
                <button className='flex-shrink-0 rounded-sm bg-orange-600 py-2 px-8 hover:opacity-90'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='h-5 w-5 stroke-white'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
