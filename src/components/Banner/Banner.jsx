import React from "react";
import { bgPro } from "../../config/slider";
import  imageBk  from "../../asset/images/imageBk.jpg"
import "../../styles/Banner.scss";
const Banner = ({ title }) => {
  return (
    <div className="slider__container">
      <div
        className="slider__container__item"
        style={{
          background: `url(${imageBk})`,
          // height: "70vh",
          // backgroundSize: "cover",
          // width: "100%",
          // margin: "0",
          // padding: "0",
          // position: "relative",
        }}
      >
        <h2
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "35px",
            color: "white",
            margin: "auto",
          }}
        >
          {title}{" "}
        </h2>
      </div>
    </div>
  );
};

export default Banner;
