import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import empty from "../../asset/images/empty.svg";
import CartItem from "./cartItem/CartItem";
import "../../styles/Cart.scss";
import Helmet from "../../components/Helmet/Helmet";
import {useUserAuth} from "../../context/UserAuthContext"
import { toast, ToastContainer } from "react-toastify";
import Banner from "../Banner/Banner";
import usePrice from "../../hooks/usePrice";
const Cart = () => {
  const { totalPrice, totalProduct, cartProduct } = usePrice();
  const { user } = useUserAuth()
  const handleCheckOut = () => {
    return toast.success(`Cảm ơn ${user.displayName} đã đặt hàng`);
  };
  return (
    <Helmet title="Giỏ hàng">
      <ToastContainer />
      <Banner title="Shopping Cart" />
      {cartProduct &&
        (cartProduct.length > 0 ? (
          <div className="cart">
            <div className="cart__list">
              {cartProduct.map((item, index) => (
                <CartItem key={index} item={item} />
              ))}
            </div>
            <div className="cart__info">
              <div className="cart__info__title">
                <p className="cart__info__title__main">
                  Shopping Bag ({totalProduct})
                </p>
                <div className="cart__info__title__price">
                  <p className="cart__info__title__price__results">
                    Thành tiền:{" "}
                  </p>
                  <span>${totalPrice}</span>
                </div>
              </div>
              <div className="cart__info__btn">
                <button onClick={handleCheckOut}>Đặt hàng</button>

                <button size="block">
                  <Link to="/catalog">Tiếp tục mua hàng</Link>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="cart__empty">
            <img src={empty} alt="" />
            <h3
              style={{
                textAlign: "center",
              }}
            >
              Cart is empty. Please select product in product category
            </h3>
          </div>
        ))}
    </Helmet>
  );
};

export default Cart;
