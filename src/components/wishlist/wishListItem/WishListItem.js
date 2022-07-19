import React from "react";
import "./WishList.scss";
import { BiTrash } from "react-icons/bi";
import { useDispatch } from "react-redux"
import { removeWishList } from "../../../redux/wishlistReducer/WishListReducer";
import { toast } from "react-toastify"
const WishListItem = ({ item, key }) => {
  const dispatch = useDispatch();

  const handleRemoveWishList = () => {
    dispatch(removeWishList({
      ...item,
    }))
    return toast.success("Remove successfully products to wishlist")
  }
  
  return (
    <div className="wishlist__item" key={key}>
      <div className="wishlist__item__container">
        <div className="wishlist__item__container__image">
          <img src={item.img} alt="" />
        </div>
        <div className="wishlist__item__container__info">
          <h5>{item.name}</h5>
          <p>{item.dsc}</p>
          <span>${item.price}</span>
        </div>

        <div style={{
          paddingLeft: "20px",
          cursor: "pointer",
          color:" #cd3333",
        }} onClick={handleRemoveWishList} className="wishlist__item__container__remove">
            <BiTrash />
        </div>
      </div>
    </div>
  );
};

export default WishListItem;
