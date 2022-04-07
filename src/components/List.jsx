import ListItem from "./ListItem";
import Slider from "react-slick";

export default function List({ title, list }) {
  let settings = {
    infinite: true,
    arrows: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="list">
      <div className="list-container">
        <h1>{title}</h1>
        <div>
          <Slider {...settings} className="swiper">
            {list.map((slide, i) => (
              <div className="mySlide" key={i}>
                <ListItem slide={slide} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
