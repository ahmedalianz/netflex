import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import ListItem from "./ListItem";

export default function List({ title, list }) {
  return (
    <div className="list">
      <div className="list-container">
        <h2>{title}</h2>
        <div>
          <Swiper
            navigation
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay]}
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
            {list.map((slide, i) => (
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
