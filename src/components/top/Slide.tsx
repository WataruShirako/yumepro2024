'use client';

// Import Swiper React components
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import required modules
import { Autoplay } from 'swiper/modules';

const slideImgUp = [
  '/top/slide/slide_1.webp',
  '/top/slide/slide_2.webp',
  '/top/slide/slide_3.webp',
  '/top/slide/slide_4.webp',
  '/top/slide/slide_5.webp',
  '/top/slide/slide_6.webp',
  '/top/slide/slide_7.webp',
  '/top/slide/slide_8.webp',
  '/top/slide/slide_9.webp',
  '/top/slide/slide_10.webp',
  '/top/slide/slide_11.webp',
];

const slideImgBottom = [
  '/top/slide/slide_1.webp',
  '/top/slide/slide_2.webp',
  '/top/slide/slide_3.webp',
  '/top/slide/slide_4.webp',
  '/top/slide/slide_5.webp',
  '/top/slide/slide_6.webp',
  '/top/slide/slide_7.webp',
  '/top/slide/slide_8.webp',
  '/top/slide/slide_9.webp',
  '/top/slide/slide_10.webp',
  '/top/slide/slide_11.webp',
];

const params = {
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
};

const Slide = () => {
  return (
    // <Swiper
    //   {...params}
    //   breakpoints={{
    //     320: {
    //       slidesPerView: 2.5,
    //       spaceBetween: 5,
    //     },
    //     480: {
    //       slidesPerView: 3.5,
    //       spaceBetween: 8,
    //     },
    //     640: {
    //       slidesPerView: 4.5,
    //       spaceBetween: 10,
    //     },
    //     990: {
    //       slidesPerView: 5.5,
    //       spaceBetween: 10,
    //     },
    //     1100: {
    //       slidesPerView: 6.5,
    //       spaceBetween: 10,
    //     },
    //   }}
    //   className={'mySwiper mt-10 md:mt-20 ease-linear'}
    //   modules={[Autoplay]}
    //   autoplay={{
    //     delay: 0,
    //     disableOnInteraction: false,
    //   }}
    //   //   loop={true}
    //   loopedSlides={11}
    //   speed={1000}
    // >
    //   {slideImg.map((slide, index) => (
    //     <SwiperSlide key={index} className={'ease-linear'}>
    //       <Image src={slide} alt={`スライド${index}枚目`} width={220} height={220} />
    //     </SwiperSlide>
    //   ))}
    // </Swiper>
    <div className={'slide mt-10 md:mt-20 pointer-events-none'}>
      <div className={'slide__wrap'}>
        <ul className={'slide__list slide__list--left'}>
          {slideImgUp.map((slide, index) => (
            <li className={'slide__item w-24 md:w-48 2xl:w-48'} key={index}>
              <Image
                src={slide}
                alt={`${index}番目のスライド`}
                width={220}
                height={220}
                priority={true}
              />
            </li>
          ))}
        </ul>
        <ul className={'slide__list slide__list--left'}>
          {slideImgBottom.map((slide, index) => (
            <li className={'slide__item w-24 md:w-48 2xl:w-48'} key={index}>
              <Image
                src={slide}
                alt={`${index}番目のスライド`}
                width={220}
                height={220}
                priority={true}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Slide;
