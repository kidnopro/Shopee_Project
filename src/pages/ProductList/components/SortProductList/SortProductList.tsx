export default function SortProductList() {
  return (
    <div className='bg-gray-300 py-4 px-3'>
      <div className='flex flex-wrap items-center justify-between gap-2'>
        <div className='flex items-center flex-wrap gap-2'>
          <div className=''>Sắp xếp theo</div>
          <button className='h-8 px-4 capitalize bg-orange-500 text-white text-sm hover:bg-orange-400 text-center rounded-sm'>
            Phổ biến
          </button>
          <button className='h-8 px-4 capitalize bg-white text-black text-sm hover:bg-slate-100 text-center rounded-sm'>
            Mới nhất
          </button>
          <button className='h-8 px-4 capitalize bg-white text-black text-sm hover:bg-slate-100 text-center rounded-sm'>
            Bán chạy
          </button>
          <select className='h-8 px-4 capitalize outline-none bg-white text-black text-sm hover:bg-slate-100 text-center rounded-sm text-left'>
            <option value='' disabled>
              Giá
            </option>
            <option value='price:asc'>Giá: Thấp đến cao</option>
            <option value='price:desc'>Giá: Cao đến thấp</option>
          </select>
        </div>
        <div className='flex items-center'>
          <div>
            <span className='text-orange-500'>1 </span>
            <span> / 2</span>
          </div>
          <div className='ml-2'>
            <button className='px-3 h-8 rounded-tl-sm rounded-bl-sm bg-white hover:bg-slate-100 cursor-not-allowed shadow'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-3 w-3'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
              </svg>
            </button>
            <button className='px-3 h-8 rounded-tl-sm rounded-bl-sm bg-white hover:bg-slate-100'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-3 w-3'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* End */}
    </div>
  )
}
