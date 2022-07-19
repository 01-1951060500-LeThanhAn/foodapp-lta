import React from "react";
import { useSelector } from "react-redux";
import WishListItem from "./wishListItem/WishListItem";
import { getWishList } from "../../redux/wishlistReducer/WishListReducer";

const WishList = () => {
  const wishList = useSelector(getWishList);
 
  return ( 
    <>
      <div style={{
        paddingLeft: "20px",
        color: "#292929",
        fontSize: "26px",
       
      }} className="title">
        <h2 style={{ margin: "0"}}>WishList</h2>
      </div>
      {wishList &&
        (wishList.length > 0 ? (
          <div className="wishlist">
            <div className="wishlist__container">
              {wishList.map((item, index) => (
                <WishListItem item={item} key={index} />
              ))}
            </div>
          </div>
        ) : (
          <h3 style={{
            paddingLeft: "20px",
            color: "#292929"
          }}>You don't have wishlist product</h3>
        ))}
    </>
  );
};

export default WishList;
