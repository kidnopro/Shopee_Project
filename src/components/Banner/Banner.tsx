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
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 2500)
    return () => clearInterval(interval)
  }, [currentSlide])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className='container mx-auto px-4 mt-10'>
      <div className='flex flex-col lg:flex-row gap-4 items-stretch'>
        <div className='w-full lg:w-[65%] relative flex group'>
          <div className='overflow-hidden rounded-lg w-full h-full relative'>
            <div
              className='flex transition-transform duration-700 ease-in-out h-full'
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className='w-full flex-shrink-0 h-full'>
                  <img src={slide} className='w-full h-full object-cover rounded-lg' alt={`Slide ${index + 1}`} />
                </div>
              ))}
            </div>

            <button
              className='absolute top-1/2 left-2 z-30 hidden group-hover:flex items-center justify-center w-10 h-10 bg-black/50 text-white rounded-full'
              onClick={prevSlide}
              aria-label='Previous Slide'
            >
              ❮
            </button>
            <button
              className='absolute top-1/2 right-2 z-30 hidden group-hover:flex items-center justify-center w-10 h-10 bg-black/50 text-white rounded-full'
              onClick={nextSlide}
              aria-label='Next Slide'
            >
              ❯
            </button>

            <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2'>
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-white w-3 h-3' : 'bg-gray-400'
                  }`}
                  onClick={() => goToSlide(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>

        <div className='w-full lg:w-[35%] relative flex'>
          <div className='overflow-hidden rounded-lg w-full h-full'>
            <div
              className='flex transition-transform duration-700 ease-in-out h-full'
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className='w-full flex-shrink-0 h-full'>
                  <img src={slide} className='w-full h-full object-cover rounded-lg' alt={`Slide ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel
