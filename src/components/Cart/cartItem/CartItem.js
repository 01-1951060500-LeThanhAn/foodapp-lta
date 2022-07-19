import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import numberWithCommas from "../../../utils/numberWithCommas";
import { BiTrash } from "react-icons/bi";
import {
  decrement,
  increment,
  removeCart,
  updateCart,
} from "../../../redux/cartReducer/cartReducer";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "./CartItem.scss";
const CartItem = (props) => {
  const [item, setItem] = useState(props.item);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(props.item.quantity);

  useEffect(() => {
    setItem(props.item);
    setQuantity(props.item.quantity);
  }, [props.item]);

  const handleRemovePro = () => {
    dispatch(
      removeCart({
        ...item,
        quantity: quantity - 1 < 1 ? 1 : quantity - 1,
      })
    );
  };

  const changeQuantity = (type) => {
    if (type === "+") {
      dispatch(
        updateCart({
          ...item,
          quantity: quantity + 1,
        })
      );
    }
    if (type === "-") {
      dispatch(
        updateCart({
          ...item,
          quantity: quantity - 1 < 1 ? 1 : quantity - 1,
        })
      );
    }
  };

  return (
    <div className="cart__item">
      <div className="cart__item__image">
        <img src={item.img} alt="" />
      </div>
      <div className="cart__item__info">
        <div className="cart__item__info__price">
          <span>${numberWithCommas(item.price)}</span>
        </div>
        <div className="cart__item__info__name">
          <p>{item.name}</p>
        </div>

        <div className="cart__item__info__quantity">
          <div className="cart__item__info__quantity__container">
            <div
              onClick={() => changeQuantity("-")}
              className="cart__item__info__quantity__container__btn"
            >
              <AiOutlineMinus />
            </div>
            <div className="cart__item__info__quantity__container__num">
              {quantity}
            </div>
            <div
              onClick={() => changeQuantity("+")}
              className="cart__item__info__quantity__container__btn"
            >
              <AiOutlinePlus />
            </div>
          </div>
        </div>

        <div onClick={handleRemovePro} className="cart__item__info__remove">
          <BiTrash />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
