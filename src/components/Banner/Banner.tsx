import React, { useState, useEffect } from 'react'
import image1 from '../../assets/images/b1.jpg'
import image2 from '../../assets/images/b2.jpg'
import image3 from '../../assets/images/b1.jpg'
import image4 from '../../assets/images/b1.jpg'
import image5 from '../../assets/images/b1.jpg'
import image6 from '../../assets/images/b1.jpg'
import image7 from '../../assets/images/b1.jpg'

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [image1, image2, image3, image4, image5, image6, image7]

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 2500)

    return () => clearInterval(interval)
  }, [currentSlide])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  return (
    <div className='bg-gray-200'>
      <div className='container'>
        <div className=' flex mt-14'>
          {/* Carousel Section */}
          <div id='carousel' className='relative w-[65%] group' data-carousel='slide'>
            <div className='relative h-36 overflow-hidden rounded-lg md:h-60'>
              <div
                className='flex transition-transform duration-1000 ease-in-out'
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div key={index} className='w-full flex-shrink-0' data-carousel-item>
                    <img
                      src={slide}
                      className='block w-full h-full object-cover border-none' // Đảm bảo không có viền
                      alt={`Slide ${index + 1}`}
                    />
                  </div>
                ))}
              </div>
            </div>
            {/* Indicators */}
            <div className='absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3'>
              {slides.map((_, index) => (
                <button
                  key={index}
                  type='button'
                  className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-300'}`}
                  aria-current={index === currentSlide}
                  aria-label={`Slide ${index + 1}`}
                  onClick={() => setCurrentSlide(index)}
                ></button>
              ))}
            </div>
            {/* Controls */}
            <button
              type='button'
              className='absolute top-1/2 left-0 z-30 flex items-center justify-center h-10 w-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-y-1/2 cursor-pointer group focus:outline-none'
              onClick={prevSlide}
              aria-label='Previous Slide'
            >
              <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white'>
                <svg className='w-4 h-4 text-white' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 6 10' fill='none'>
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M5 1 1 5l4 4'
                  />
                </svg>
              </span>
            </button>
            <button
              type='button'
              className='absolute top-1/2 right-0 z-30 flex items-center justify-center h-10 w-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-y-1/2 cursor-pointer group focus:outline-none'
              onClick={nextSlide}
              aria-label='Next Slide'
            >
              <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white'>
                <svg className='w-4 h-4 text-white' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 6 10' fill='none'>
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='m1 9 4-4-4-4'
                  />
                </svg>
              </span>
            </button>
          </div>

          {/* Static Image Section */}
          <div className='w-[400px]'>
            <img
              src='https://cf.shopee.vn/file/vn-11134258-7ras8-m1dug8y5x4rc34_xxhdpi' // Thay URL của ảnh tĩnh của bạn tại đây
              alt='Static Image'
              className=' h-full object-cover rounded-lg'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel
