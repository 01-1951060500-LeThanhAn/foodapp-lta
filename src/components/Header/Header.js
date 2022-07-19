import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import mainNav from "../../config/menu";
import "../../styles/Home.scss";
import { Badge } from "@material-ui/core";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import "swiper/css";
import WishList from "../../components/wishlist/WishList";

import "../../styles/Header.scss";
import { useSelector } from "react-redux";
import { useUserAuth } from "../../context/UserAuthContext";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
const Header = () => {
  

  const { logOut, user } = useUserAuth();
  const [show, setShow] = useState(false);

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err.message);
    }
  };

  const [navbar, setNavbar] = useState(false);
  const [open, setOpen] = useState(false);

  let cartItems  = useSelector((state) => state.cartItems.value);
  
  const [totalProduct, setTotalProduct] = useState(0);
  useEffect(() => {
   
    const quantityPro = cartItems.reduce(
      (total, item) => total + Number(item.quantity),
      0
    );
   
    setTotalProduct(quantityPro);
   
  }, [cartItems]);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <div className="container">
        <div className="slider">
          <div className={navbar ? "slider__header active" : "slider__header"}>
            <div className="slider__header__left">
              <div className="slider__header__left__logo">
                <img
                  src="https://img.freepik.com/free-vector/pack-flat-catering-logo-templates_23-2148995073.jpg?size=338&ext=jpg&ga=GA1.1.1805439351.1646970420"
                  alt=""
                />
              </div>
              {mainNav.map((item, index) => (
                <div className="slider__header__left__item" key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </div>
              ))}
            </div>
            <div className="slider__header__right">
              <div className="slider__header__right__cart">
                <Link to="/cart">
                  <Badge badgeContent={totalProduct} color="primary">
                    <ShoppingCartOutlinedIcon
                      style={{
                        fontSize: "30px",
                        color: "rgba(255,255,255,0.8)",
                      }}
                    />
                  </Badge>
                </Link>
              </div>
              {user ? (
                <>
                  <img
                    style={{
                      width: "45px",
                      height: "45px",
                      borderRadius: "50%",
                      cursor: "pointer",
                      position: "relative",
                    }}
                    onClick={() => setShow(!show)}
                    src={user.photoURL}
                    alt=""
                  />
                  <div
                    className={
                      show
                        ? "slider__header__right__hide active"
                        : "slider__header__right__hide "
                    }
                  >
                    <h5>{user.displayName}</h5>
                    <p
                      style={{
                        textDecoration: "none",
                        fontSize: "18px",
                        color: "white",
                        fontWeight: "600",
                        cursor: "pointer",
                      }}
                      onClick={() => setOpen(!open)}
                    >
                      Wishlist
                    </p>
                    <button onClick={handleLogOut}>LogOut</button>
                  </div>
                </>
              ) : (
                <div className="slider__header__right___user">
                  <Link to="/login">
                    <AccountCircleOutlinedIcon
                      style={{
                        fontSize: "40px",
                        color: "rgba(255,255,255,0.8)",
                      }}
                    />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="wishlist">
        <div
          className={open ? "wishlist__wrapper active " : "wishlist__wrapper"}
        >
          <div className="wishlist__wrapper__container">
            <div
              onClick={() => setOpen(!open)}
              className="wishlist__wrapper__overlay"
            ></div>
            <WishList />
          </div>

          <div
            onClick={() => setOpen(!open)}
            style={{ color: "black" }}
            className="wishlist__wrapper__close"
          >
            <i onClick={() => setOpen(!open)} class="bi bi-x-lg"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
