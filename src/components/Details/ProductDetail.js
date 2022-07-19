import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_key, data } from "../../config/keyAPI";
import ReactStars from "react-rating-stars-component";
import "../../styles/ProductDetails.scss";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUserAuth } from "../../context/UserAuthContext";
import Helmet from "../../components/Helmet/Helmet";
import {
  BiMinus,
  BiPlus,
  BiPurchaseTagAlt,
  BiCheckShield,
} from "react-icons/bi";
import { MdOutlineLocalShipping } from "react-icons/md";
import RelatedProduct from "./RelatedProducts/RelatedProduct";
import { useDispatch } from "react-redux";
import { addWishList } from "../../redux/wishlistReducer/WishListReducer"
import { addCart } from "../../redux/cartReducer/cartReducer";
import Comment from "../Comment/Comment";
import ReactImageMagnify from "react-image-magnify";
import { bgPro } from "../../config/slider";
const Details = () => {
  const [info, setInfo] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const { user } = useUserAuth();

  const handleAddCart = () => {
    if (!user) {
      return toast.error("Please login to buy product");
    } else {
      dispatch(
        addCart({
          id: info.id,
          price: info.price,
          quantity: quantity,
          img: info.img,
          name: info.name,
        })
      );
      toast.success("Add product sucessfully");
    }
  };

  const handleAddWishList = () => {
     if(!user) {
       return toast.error("Please login to add wishlist product")
     } else {
       dispatch(addWishList({
         id: info.id,
         price: info.price,
         name: info.name,
         dsc: info.dsc,
         img: info.img,
       }))
       return toast.success("Added products to wishlist")
     }
  }

  const dispatch = useDispatch();

  const { id } = useParams();

  const fetchDetailsProducts = async () => {
    const response = await axios.get(`${API_key}/${data}/${id}`);
    console.log(response.data);
    setInfo(response.data);
  };

  const handleAddQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleRemoveQuantity = () => {
    if (quantity <= 1) return;
    setQuantity((prev) => prev - 1);
  };

  useEffect(() => {
    fetchDetailsProducts();
    setQuantity(quantity);
  }, []);

  const imageProps = {
    smallImage: {
      alt: "Phasellus laoreet",
      isFluidWidth: true,
      src: info.img,
      
    },
    largeImage: {
      src: info.img,
      width: 1000,
      height: 1500,
     
    },
    enlargedImageContainerStyle: { background: "#fff", zIndex: 9 },
  };
  return (
    <>
      <Helmet title={info.name}>
        <ToastContainer />
        <div className="container">
          <div className="slider__container">
            <div
              className="slider__container__item" 
              style={{
                background: `url(${bgPro})`,
                height: "60vh",
                backgroundSize: "cover",
                width: "100%",
                margin: "0",
                padding: "0",
              }}
            >
              <h2
                style={{
                  position: "absolute",
                  top: "30%",
                  left: "37%",
                  fontSize: "35px",
                  color: "white",
                  textAlign: "center",
                }}
              >
                Best foods category <br />{" "}
                <span
                  style={{
                    color: "#c33d3a",
                    fontSize: "22px",
                  }}
                >
                  {info.name}
                </span>{" "}
              </h2>
            </div>
          </div>
        </div>
        <div className="details">
          <div className="details__container">
            <div className="details__container__left">
              <div className="details__container__left__image">
                <ReactImageMagnify {...imageProps} />
              </div>
            </div>
            <div className="details__container__right">
              <div className="details__container__right__title">
                <h2>{info.name}</h2>
              </div>
              <div className="details__container__right__review">
                <ReactStars count={info.rate} size={24} color="yellow" />
                <p> (reviews)</p>
              </div>
              <div className="details__container__right__price">
                <span>${info.price}</span>
              </div>
              <div className="details__container__right__desc">
                <p>{info.dsc}</p>
              </div>
              <div className="details__container__right__info">
                <div className="details__container__right__info__country">
                  <p>
                    <span>Country: </span>
                    {info.country},
                  </p>
                </div>
                <div className="details__container__right__info__popular">
                  <p>
                    <span>Category: </span> {info.category}
                  </p>
                </div>
              </div>

              <div className="details__container__right__cart">
                <div className="details__container__right__cart__quantity">
                  <div
                    onClick={() => handleRemoveQuantity()}
                    className="details__container__right__cart__quantity__minus"
                  >
                    <BiMinus />
                  </div>
                  <div className="details__container__right__cart__quantity__num">
                    {quantity}
                  </div>
                  <div
                    onClick={() => handleAddQuantity()}
                    className="details__container__right__cart__quantity__plus"
                  >
                    <BiPlus />
                  </div>
                </div>

                <div
                  className="details__container__right__cart__btn"
                  onClick={handleAddCart}
                >
                  ADD TO CART
                </div>
                <div onClick={handleAddWishList} className="details__container__right__cart__wishlist">
                  <i class="bi bi-balloon-heart"></i>
                   <p>Add to wishlist</p>
                </div>
              </div>

              <div className="details__container__right__freeship">
                <div className="details__container__right__freeship__box">
                  <div className="details__container__right__freeship__box__logo">
                    <MdOutlineLocalShipping />
                  </div>
                  <p>Free shipping on orders on the 15th of every month</p>
                </div>
                <div className="details__container__right__freeship__box">
                  <div className="details__container__right__freeship__box__logo">
                    <BiPurchaseTagAlt />
                  </div>
                  <p>
                    You can return the item within 1 hour of use if you are not
                    satisfied
                  </p>
                </div>
                <div className="details__container__right__freeship__box">
                  <div className="details__container__right__freeship__box__logo">
                    <BiCheckShield />
                  </div>
                  <p>Customers can order from 7am to 10pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Comment id={id} info={info} setInfo={setInfo} />

        <RelatedProduct />
      </Helmet>
    </>
  );
};

export default Details;
