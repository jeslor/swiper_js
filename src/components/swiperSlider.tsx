import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import "swiper/css/bundle";



const data = [
    {
        id: 1,
        text:"first slide",
    },
    {
        id: 2,
        text:"second slide",
    },
    {
        id: 3,
        text:"third slide",
    },
    {
        id: 4,
        text:"fourth slide",
    },
    {
        id: 5,
        text:"fifth slide",
    },
    {
        id: 6,
        text:"sixth slide",
    },

]

const ImageCarousel = () => {

    return (
      <div className="carousel-container h-fit relative px-7 pt-6">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          breakpoints={
            {
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
                loop: true,
                autoplay:{
                  delay: 3000,
                  disableOnInteraction: false
                }
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
                loop: true,
                autoplay:{
                  delay: 3000,
                  disableOnInteraction: false,
                }
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 30
            }
          }}
          navigation={{
            nextEl: ".image-swiper-button-next",
            prevEl: ".image-swiper-button-prev",
            disabledClass: "swiper-button-disabled"
          }}
          
  
        >
          {
          data.map((item, index) => (
            <SwiperSlide key={index} className="bg-white pb-6 rounded-t-lg hover:rounded-b-lg transition-all !h-auto">
             <a href="">
              <div className="flex flex-col items-center px-4">
                <h3 className="text-[1.1rem] font-semibold text-primary-600 py-3">{item.text}</h3>

              </div>
             </a>
          </SwiperSlide>
          ))
         }
        </Swiper>
        <div className="image-swiper-button-prev h-[30px] tablet:h-[40px] w-[30px] tablet:w-[40px] border-[2px] rounded-full border-secondary flex justify-center items-center top-1/2 absolute z-[10] !-left-[13px] -translate-y-[50%]">
        </div>
        <div className="image-swiper-button-next h-[30px] tablet:h-[40px] w-[30px] tablet:w-[40px] border-[2px] rounded-full border-secondary flex justify-center items-center top-1/2 absolute z-[10] !-right-[13px]  -translate-y-[50%]">
        </div>
  
      </div>
    );
  
  }
  
  
  export default ImageCarousel;
  


  