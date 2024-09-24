import React from 'react'
import ImageCarousel from './components/swiperSlider'

const App = () => {
  return (
    <div className='h-screen w-screen bg-[#10172a] flex items-center flex-col'>
      <h1 className='pt-8'>Animated swiper component</h1>
     <div className='w-screen px-[3rem]'>
     <ImageCarousel />
     </div>
    </div>
  )
}

export default App