import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux";
const usePrice = () => {

    const cartItems = useSelector((state) => state.cartItems.value);

  const [cartProduct, setCartProduct] = useState(cartItems);
  const [totalProduct, setTotalProduct] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCartProduct(cartItems);
    const quantityPro = cartItems.reduce(
      (total, item) => total + Number(item.quantity),
      0
    );
    const pricePro = cartItems.reduce(
      (total, item) => total + Number(item.quantity) * Number(item.price),
      0
    );
    setTotalProduct(quantityPro);
    setTotalPrice(pricePro);
  }, [cartItems]);

  return { cartProduct, totalProduct, totalPrice }
}

export default usePrice