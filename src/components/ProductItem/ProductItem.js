import React from "react";
import "../../styles/ProductItem.scss";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
 
const ProductItem = (props) => {
  const { data } = props;

  return (
    <div className="products">
      <Link to={`/catalog/${data.id}`}>
        <div className="products__box">
          <div className="products__box__favourite">
            <p>Favourite</p>
          </div>
          <div className="products__box__cart">
            <i class="bi bi-heart"></i>
          </div>
          <div className="products__box__wishlist">
            <i class="bi bi-bag"></i>
          </div>
          <div className="products__box__image">
          <img src={data.img} alt="" />
            <div className="products__box__image__rate">
              <i class="bi bi-star"></i>
              <span>{data.rate}</span>
            </div>
          </div>
          <div className="products__box__info">
            <div className="products__box__info__title">
              <h4>{data.name}</h4>
            </div>
            <div className="products__box__info__desc">
              <p>{data.dsc}</p>
            </div>
            <div className="products__box__info__address">
              <div className="products__box__info__address__map">
                <FaMapMarkerAlt style={{ color: "#c33d3a" }} />
                <p>{data.country}</p>
              </div>
              <div className="products__box__info__address__price">
                <span>${data.price}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
