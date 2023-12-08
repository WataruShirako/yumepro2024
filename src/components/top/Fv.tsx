"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

// カルーセルにする画像のソースをリストにします
const images = {
  pc: [
    "/top/fv_slide/top_slide_1.jpg",
    "/top/fv_slide/top_slide_2.jpg",
    "/top/fv_slide/top_slide_3.jpg",
    "/top/fv_slide/top_slide_4.jpg",
  ],
  sp: [
    "/top/fv_slide/sp_top_slide_1.webp",
    "/top/fv_slide/sp_top_slide_2.webp",
    "/top/fv_slide/sp_top_slide_3.webp",
    "/top/fv_slide/sp_top_slide_4.webp",
  ],
};

const Fv = () => {
  return (
    <section className={"fv"}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        slidesPerView={1} //一度に表示するスライドの数
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className={"w-full md:!hidden"}
        effect="fade"
      >
        {images.sp.map((src: string, index: number) => {
          return (
            <SwiperSlide key={`${index}`}>
              <Image
                src={src}
                width={1000}
                height={1000}
                alt={`image${index}`}
                className={"w-full"}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        slidesPerView={1} //一度に表示するスライドの数
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className={"w-full !hidden md:!block"}
        effect={"fade"}
      >
        {images.pc.map((src: string, index: number) => {
          return (
            <SwiperSlide key={`${index}`}>
              <Image
                src={src}
                width={3000}
                height={2000}
                alt={`image${index}`}
                className={"w-full"}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Fv;
