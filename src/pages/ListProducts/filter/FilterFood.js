import React from "react";
import {  useDispatch } from "react-redux"
import { filterProducts } from "../../../redux/filterReducer/filterReducer"
const FilterFood = ({ data }) => {
  const dispatch = useDispatch();
  
  return (
    <div className="catalog__container__left__filter__box" >
      <div className="catalog__container__left__filter__box__image">
        <img src={data.image} alt="" />
      </div>
      <div onClick={() => dispatch(filterProducts(data.category))} className="catalog__container__left__filter__box__btn">
        <p className="catalog__container__left__filter__box__item">
          {data.title}
        </p>
      </div>
    </div>
  );
};

export default FilterFood;
