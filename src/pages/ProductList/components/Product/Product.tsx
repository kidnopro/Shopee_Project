import { Link } from 'react-router-dom'

export default function Product() {
  return (
    <Link to='/'>
      <div className='bg-white shadow rounded-sm hover:translate-y-[-0.0625rem] hover:shadow-md duration-100 transition-transform'>
        <div className='w-full pt-[100%] relative'>
          <img
            src='https://tinhayvip.com/wp-content/uploads/2022/01/hot-girl-nguc-khung-lo-anh-khoa-than-khong-che-5.jpg'
            alt='product'
            className='absolute top-0 left-0 bg-white w-full h-full object-cover'
          />
        </div>
      </div>
    </Link>
  )
}
