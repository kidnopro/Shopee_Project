export default function Footer() {
  return (
    <footer className='bg-gray-100 dark:bg-gray-900'>
      <div className='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>
        <div className='md:flex md:justify-between'>
          <div className='mb-6 md:mb-0'>
            <a className='flex items-center'>
              <img
                // src={logoShopee}
                className='mb-4 h-12 w-auto sm:h-14 md:h-16 lg:h-20'
                alt='Logo Shopee Footer'
              />
            </a>
          </div>
          <div className='grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6'>
            <div>
              <h2 className='mb-6 text-sm uppercase text-gray-900 dark:text-white'>CHĂM SÓC KHÁCH HÀNG</h2>
              <ul className='font-medium text-gray-500 dark:text-gray-400'>
                <li className='mb-4'>
                  <a href='' className='hover:underline'>
                    Hướng Dẫn Mua Hàng
                  </a>
                </li>
                <li>
                  <a href='' className='hover:underline'>
                    Trả Hàng & Hoàn Tiền
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className='mb-6 text-sm  uppercase text-gray-900 dark:text-white'>THEO DÕI TÔI</h2>
              <ul className='font-medium text-gray-500 dark:text-gray-400'>
                <li className='mb-4'>
                  <a href='https://github.com/kidnopro' className='hover:underline'>
                    Github
                  </a>
                </li>
                <li>
                  <a href='https://www.instagram.com/crz.kid04/' className='hover:underline'>
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className='mb-6 text-sm uppercase text-gray-900 dark:text-white'>Về Shopee</h2>
              <ul className='font-medium text-gray-500 dark:text-gray-400'>
                <li className='mb-4'>
                  <a href='#' className='hover:underline'>
                    Chính Sách Đổi Trả
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:underline'>
                    Bảo Mật &amp; An Toàn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className='my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8' />
        <div className='sm:flex sm:items-center sm:justify-between'>
          <span className='text-sm text-gray-500 dark:text-gray-400 sm:text-center'>
            © 2024{' '}
            <a href='/' className='hover:underline'>
              Shopee™
            </a>
            . Made by Hoàng Anh.
          </span>
          <div className='mt-4 flex sm:mt-0 sm:justify-center'>
            <a href='#' className='text-gray-500 hover:text-gray-900 dark:hover:text-white'>
              <svg
                className='h-4 w-4'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 8 19'
              >
                <path
                  fillRule='evenodd'
                  d='M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z'
                  clipRule='evenodd'
                />
              </svg>
              <span className='sr-only'>Facebook page</span>
            </a>
            <a href='#' className='ms-5 text-gray-500 hover:text-gray-900 dark:hover:text-white'>
              <svg
                className='h-4 w-4'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 21 16'
              >
                <path d='M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z' />
              </svg>
              <span className='sr-only'>Discord community</span>
            </a>
            <a href='#' className='ms-5 text-gray-500 hover:text-gray-900 dark:hover:text-white'>
              <svg
                className='h-4 w-4'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 20 17'
              >
                <path
                  fillRule='evenodd'
                  d='M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z'
                  clipRule='evenodd'
                />
              </svg>
              <span className='sr-only'>Twitter page</span>
            </a>
            <a href='#' className='ms-5 text-gray-500 hover:text-gray-900 dark:hover:text-white'>
              <svg
                className='h-4 w-4'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path d='M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12 6.627 0 12-5.373 12-12C24 5.373 18.627 0 12 0zm0 22.049c-5.549 0-10.049-4.5-10.049-10.049S6.451 1.951 12 1.951 22.049 6.451 22.049 12 17.549 22.049 12 22.049zm-2.03-9.72h-1.97v-3.04h1.97v3.04zm-.986-3.89c-.617 0-1.125-.52-1.125-1.19 0-.669.508-1.188 1.125-1.188s1.125.519 1.125 1.188c0 .67-.508 1.19-1.125 1.19zm6.294 4.89h-1.97v-1.54c0-.88-.032-2.005-1.233-2.005-1.233 0-1.423.963-1.423 1.95v1.59h-1.97v-3.04h1.97v1.1c.271-.417.756-1.01 1.815-1.01 1.978 0 2.746 1.046 2.746 3.063v1.89z' />
              </svg>
              <span className='sr-only'>Instagram page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
