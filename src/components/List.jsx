import { Swiper, SwiperSlide } from "swiper/react";

import ListItem from "./ListItem";
import { Navigation } from "swiper";

export default function List() {
  const slides = [
    "/images/1.webp",
    "/images/2.webp",
    "/images/3.webp",
    "/images/4.webp",
    "/images/5.webp",
  ];

  return (
    <div className="list">
      <div className="list-container">
        <h2>Continue To Watch</h2>
        <div>
          <Swiper
            navigation
            modules={[Navigation]}
            centeredSlides
            loop
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
            }}
          >
            {slides.map((slide, i) => (
              <SwiperSlide className="mySlide" key={i}>
                <ListItem slide={slide} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
