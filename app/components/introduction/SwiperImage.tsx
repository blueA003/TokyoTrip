"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

export default function SwiperImage() {
  const images = [
    '/image/Test/jp1.jpg',
    '/image/Test/jp2.jpg',
    '/image/Test/jp3.jpg',
    '/image/Test/jp4.jpg',
    '/image/Test/jp5.jpg',
  ];
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 5000 }}
      loop={true}
      spaceBetween={0}
      slidesPerView={1}
    >
      {images.map((value, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-[600px]">
            <Image
              src={value}
              alt={`${index}`}
              fill
              className="object-cover object-bottom"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
