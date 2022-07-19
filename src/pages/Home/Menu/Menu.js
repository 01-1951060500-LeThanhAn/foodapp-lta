import React from "react";

import "swiper/css";
import category from "../../../config/category";
import "../../../styles/Menu.scss"

const Menu = () => {

  return (
    <div className="menu">
      <div className="menu__category">
        <div className="menu__category__title">
          <h2>HOW TO ORDER?</h2>
        </div>

        <div className="menu__category__list">
        
            {category.map((item, index) => (
            
                <div  className="menu__category__list__box" key={index}>
                  <div className="menu__category__list__box__image">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="menu__category__list__box__id">
                    <span>{item.id}</span>
                  </div>
                 
                  <div className="menu__category__list__box__title">
                    <p>{item.title}</p>
                  </div>
                </div>
         
            ))}
        
        </div>
      </div>
    </div>
  );
};

export default Menu;
