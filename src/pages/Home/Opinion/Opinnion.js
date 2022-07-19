import React from "react";
import { opinions } from "../../../config/category";
import "../../../styles/Opinion.scss";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
const Opinnion = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: {
      delay: 1000,
    },
  };
  return (
    <div className="opinion">

      <div className="opinion__guest">
        <p>Opinion Review</p>
       
      </div>
      <div className="opinion__reviews">
      <Swiper
           grabCursor={true}
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
           
            {...settings}>
      
          {opinions.map((item, index) => (
            <SwiperSlide>
            <div className="opinion__reviews__box" key={index}>
              <div className="opinion__reviews__box__image">
                <img src={item.image} alt="" />
              </div>
              <div className="opinion__reviews__box__title">
                <h3>{item.title}</h3>
              </div>
              <div className="opinion__reviews__box__desc">
                <p>{item.desc}</p>
              </div>
            </div>
            </SwiperSlide>
          ))}
      </Swiper>
        
      </div>
    </div>
  );
};

export default Opinnion;
