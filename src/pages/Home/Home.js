import React from "react";
import Menu from "./Menu/Menu";
import Review from "./Review/Review";
import Favourite from "./Favourite/Favourite";
import QualityPro from "./Quality/QualityPro";
import OrderDay from "./OrderDay/OrderDay";
import Opinnion from "./Opinion/Opinnion";
import Helmet from "../../components/Helmet/Helmet";
import sliderBackground from "../../config/slider";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../../components/Button/Button";
import "../../styles/Header.scss";
import "../../styles/Home.scss";
import { Link } from "react-router-dom";
const params = {
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
};
const Home = () => {
  return (
    <>
      <Helmet title="Trang chủ">
        <div className="slider">
          <div className="slider__container">
            <Swiper
              grabCursor={true}
              spaceBetween={10}
              slidesPerView={1}
              loop={true}
              {...params}
            >
              {sliderBackground.map((item) => (
                <SwiperSlide>
                  {({ isActive }) => (
                    <div
                      className="slider__container__item"
                      style={{
                        background: `url(${item.image})`,
                        height: "100vh",
                        backgroundSize: "cover",
                        width: "101%",
                        margin: "0",
                        padding: "0",
                      }}
                      key={item.id}
                    >
                      <div
                        className={
                          isActive
                            ? "slider__container__item__title active"
                            : "slider__container__item__title"
                        }
                      >
                        <h1>{item.desc}</h1>
                        <Link to="/catalog">
                          <Button>Order Now</Button>
                        </Link>
                      </div>
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <Menu />
          <Review />
          <Favourite />
          <QualityPro />
          <OrderDay />
          <Opinnion />
        </div>
      </Helmet>
    </>
  );
};

export default Home;
