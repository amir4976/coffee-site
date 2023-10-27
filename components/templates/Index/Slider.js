import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";
import style from '@/styles/Slider.module.css'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

function Slider() {
  return (
    <div class="container-fluid p-0 mb-5">

          <Swiper className={style.swiper}
            // install Swiper modules
            modules={[Autoplay,Navigation, Pagination, Scrollbar, A11y,]}

            navigation
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide className={style.swiper_slide}>
              <div class="carousel-item active">
                <Image alt="carousel" src='/images/carousel-1.jpg' fill={true}/>
                <div class={`${style.slider_caption } carousel-caption d-flex flex-column align-items-center justify-content-center`}>
                  <h2 class="text-primary font-weight-medium m-0">
                    We Have Been Serving
                  </h2>
                  <h1 class="display-1 text-white m-0">COFFEE</h1>
                  <h2 class="text-white m-0">* SINCE 1950 *</h2>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className={style.swiper_slide}>
              <div class="carousel-item active">
                <Image alt="carousel" src='/images/carousel-2.jpg' fill={true}/>
                <div class={`${style.slider_caption } carousel-caption d-flex flex-column align-items-center justify-content-center`}>
                  <h2 class="text-primary font-weight-medium m-0">
                    We Have Been Serving
                  </h2>
                  <h1 class="display-1 text-white m-0">COFFEE</h1>
                  <h2 class="text-white m-0">* SINCE 1950 *</h2>
                </div>
              </div>
            </SwiperSlide>

          </Swiper>

    </div>
  );
}

export default Slider;
