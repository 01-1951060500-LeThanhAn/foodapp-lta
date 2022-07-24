import React, { useEffect, useState } from "react";
import { API_key, data } from "../../../config/keyAPI";
import axios from "axios";
import ProductItem from "../../ProductItem/ProductItem";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./RelatedProducts.scss";
const RelatedProduct = () => {
  const params = {
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
  };
  const [relatedPro, setRelatedPro] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(`${API_key}/${data}`);
      console.log(response.data);
      setRelatedPro(response.data.slice(0, 20));
    };

    fetchProducts();
  }, []);
  return (
    <div className="related">
      <div className="related__title">
        <h3>Related Products</h3>
      </div>
      <div className="related__container">
        <Swiper
        freeMode={true}
          grabCursor={true}
          spaceBetween={10}
          slidesPerView={5}
          loop={true}
          delay={1000}
          {...params}
          breakpoints={{
               320: {
                slidesPerView: 1,
                spaceBetween: 10
              },
              375: {
                slidesPerView: 1,
                spaceBetween: 10
              },
              600: {
                slidesPerView: 2,
                spaceBetween: 10
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 10
              },
              1366: {
                slidesPerView: 5,
                spaceBetween: 10
              },
              
            }}
        >
          {relatedPro.map((item) => (
            <SwiperSlide>
              <Link to={`/catalog/${item.id}`}>
                {" "}
                <ProductItem data={item} key={item.id} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RelatedProduct;
