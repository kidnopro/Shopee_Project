import { Link } from 'react-router-dom'
import path from '../../../../constants/path'
import Input from '../../../../components/Input/Input'
import Button from '../../../../components/Button/Button'

export default function AsideFilter() {
  return (
    <div className='py-4'>
      <Link to={path.home} className='flex items-center capitalize'>
        <svg viewBox='0 0 12 10' className='mr-3 h-4 w-3 fill-current'>
          <g fillRule='evenodd' stroke='none' strokeWidth={1}>
            <g transform='translate(-373 -208)'>
              <g transform='translate(155 191)'>
                <g transform='translate(218 17)'>
                  <path d='m0 2h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z' />
                  <path d='m0 6h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z' />
                  <path d='m0 10h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z' />
                </g>
              </g>
            </g>
          </g>
        </svg>
        Tất cả danh mục
      </Link>
      <div className='bg-gray-400 h-[1px] my-4'>
        <ul>
          <li className='py-2 pl-2'>
            <Link to={path.home} className='relative px-2 text-orange-500 font-semibold'>
              <svg viewBox='0 0 4 7' className='absolute top-1 left-[-10px] h-2 w-2 fill-orange-500'>
                <polygon points='4 3.5 0 0 0 7' />
              </svg>
              Thời trang nam
            </Link>
          </li>
          <li className='py-2 pl-2'>
            <Link to={path.home} className='relative px-2'>
              Thời trang nữ
            </Link>
          </li>
        </ul>
        <Link to={path.home} className='flex items-center  mt-4 capitalize'>
          <svg
            enableBackground='new 0 0 15 15'
            viewBox='0 0 15 15'
            x={0}
            y={0}
            className='mr-3 h-4 w-3 fill-current stroke-current'
          >
            <g>
              <polyline
                fill='none'
                points='5.5 13.2 5.5 5.8 1.5 1.2 13.5 1.2 9.5 5.8 9.5 10.2'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeMiterlimit={10}
              />
            </g>
          </svg>
          Bộ lọc tìm kiếm
        </Link>
        <div className='bg-gray-400 h-[1px] my-4'></div>
        <div className='my-5'>
          <div>Khoản giá</div>
          <form className='mt-2'>
            <div className='flex items-start'>
              <Input
                type='text'
                className='grow'
                name='from'
                placeholder='đ Từ'
                classNameInput='p-1 w-full outline-none border boder-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
              />
              <div className='mx-2 mt-2 shrink-0'>-</div>
              <Input
                type='text'
                placeholder='đ Đến'
                className='grow'
                name='from'
                classNameInput='p-1 w-full outline-none border boder-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
              />
            </div>
            <Button className='w-full p-2 uppercase bg-orange-500 text-white text-sm hover:bg-orange-400 rounded-sm flex justify-center items-center'>
              áp dụng
            </Button>
          </form>
          <div className='bg-gray-400 h-[1px] my-4'></div>
          <div className='text-sm'>Đánh giá</div>
          <ul className=''>
            <li className='py-1 pl-2'>
              <Link to='' className='flex items-center text-sm'>
                {/* {Array(5).fill(0).map((_, index) => (
                    
                ))} */}
              </Link>
            </li>
          </ul>
          <div className='bg-gray-400 h-[1px] my-4'></div>
          <Button className='w-full py-2 px-2 uppercase bg-orange-500 hover:bg-orange-400 text-sm text-white rounded-sm'>
            Xóa tất cả
          </Button>
        </div>
      </div>
    </div>
  )
}
