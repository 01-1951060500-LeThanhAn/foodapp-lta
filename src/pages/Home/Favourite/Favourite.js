import React, { useEffect } from "react";
import Button from "../../../components/Button/Button";
import "../../../styles/Favourite.scss"
import browserFood from "../../../config/browserFood";
import { sliderFood } from "../../../config/slider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import order from "../../../asset/images/order.svg"
import contact from "../../../asset/images/contact.svg"
import AOS from "aos";
import "aos/dist/aos.css"
const Favourite = () => {
  var settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: {
      delay: 500,
    },
  };

  var settings2 = {
    dots: true,
    loop: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: {
      delay: 500,
    },
  };

  useEffect(() => {
      AOS.init({
        duration: 2000
      })
      AOS.refresh(); 
  }, [])
  return (
    <div className="favourite">
      <div className="favourite__container">
        <div className="favourite__container__title">
          <p  data-aos={"fade-left"}>Best favourite food</p>
          <h2  data-aos={"fade-right"}>
                MORE THAN <span>2000</span> DISHES TO ORDER!
          </h2>
          <div  data-aos={"fade-up"} className="favourite__container__title__price">
            <span >$20.00</span>
            <Button>ORDER NOW</Button>
          </div>

          <div className="favourite__container__food">
              <div className="favourite__container__food__slider">
              <Slider {...settings2}>
                    {
                      sliderFood.map((item, index) => (
                        <div className="favourite__container__food__slider__item" key={index}>
                          <div className="favourite__container__food__slider__item--image">
                            <img src={item.image} alt="" />
                          </div>
                          <div className="favourite__container__food__slider__item--title">
                            <h4>{item.title}</h4>
                            <span>{item.desc}</span>
                          </div>
                        </div>
                      ))
                    }
                    </Slider>
              </div>
          </div>
         
        </div>


        <div className="favourite__container__browser">
          <div className="favourite__container__browser__title">
            <p  data-aos={"fade-left"}>What we have?</p>
            <h2  data-aos={"fade-right"}>Browser food category</h2>
          </div>
          <div className="favourite__container__browser__food">
            <Slider {...settings1}>
              {browserFood.map((item, index) => (
                <div
                  key={index}
                  className="favourite__container__browser__food__item"
                >
                  <div className="favourite__container__browser__food__item__image">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="favourite__container__browser__food__item__title">
                    <p>{item.title}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className="favourite__container__order">
          <div className="favourite__container__order__header">
             <div  data-aos={"fade-right"} className="favourite__container__order__header__info">
                <p className="favourite__container__order__header__info__title">Delivery</p>
                <h2>Delivery and customer service <span>anytime and anywhere</span></h2>
                <p className="favourite__container__order__header__info__desc">Food F is a restaurant, bar and coffee roastery located on a busy corner site in Farringdon's Exmouth Market. With glazed frontage on two sides of the building, overlooking the market and a bustling London inteon.</p>
                <div className="favourite__container__order__header__info__contact">
                  <div  className="favourite__container__order__header__info__contact__image">
                    <img src={contact} alt="" />
                  </div>
                  <div className="favourite__container__order__header__info__contact__num">
                   <p>Delivery Order Number</p><span>012313123213</span>
                  </div>
                  <div className="favourite__container__order__header__info__contact__btn">
                  <Button>ORDER NOW</Button>
                  </div>
                  
                </div>
             </div>
             <div  data-aos={"fade-left"} className="favourite__container__order__header__image">
                <img src={order}  alt=""/>
               </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favourite;
