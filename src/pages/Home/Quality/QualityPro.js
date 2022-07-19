import React, { useEffect } from 'react'
import {pizzas} from "../../../config/category"
import "../../../styles/Quality.scss"
import AOS from "aos"
import "aos/dist/aos.css"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

const QualityPro = () => {
  const params = {
    autoplay: {
      delay: 1000,
      
    },
  };

  useEffect(() => {
    AOS.init({
      duration: 2000
    })
    AOS.refresh();
}, [])
  return (
    <div className="quality">
      <div className="quality__header">
        <div className="quality__header__title">
          <p data-aos={"fade-right"}>Quality products</p>
          <h2 data-aos={"fade-left"}><span>Pizzas</span> as expected dilicious one</h2>
        </div>

        <div className="quality__header__products">
          <div className="quality__header__products__list">
          <Swiper
           grabCursor={true}
            spaceBetween={10}
            slidesPerView={4}
            loop={true}
           
            {...params}>
              {
                pizzas.map((item, index) => (
                  <SwiperSlide>
                  <div key={index} data-aos={"fade-up"} className="quality__header__products__list__item">
                    <div className="quality__header__products__list__item__image">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="quality__header__products__list__item__title">
                      <h3>{item.title}</h3>
                    </div>
                    <div className="quality__header__products__list__item__desc">
                      <p>{item.desc}</p>
                      <span>${Number.parseFloat(item.price)}.00</span>
                    </div>
                  </div>
                  </SwiperSlide>
                ))
              }
              </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QualityPro