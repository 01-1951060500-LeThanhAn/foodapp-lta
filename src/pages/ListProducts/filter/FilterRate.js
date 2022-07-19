import React from "react";
import { filterRate } from "../../../redux/filterReducer/filterReducer";
import { useDispatch } from "react-redux"
const FilterRate = ({item}) => {

  const dispatch = useDispatch();

  return (
    <div onClick={() => dispatch(filterRate(item.rate))} className="catalog__container__left__filter__rate" key={item.id}>
      <div className="catalog__container__left__filter__rate__title">
        {item.title}
      </div>
      <div className="catalog__container__left__filter__rate__desc">
        <p>{item.desc}</p>
      </div>
    </div>
  );
};

export default FilterRate;
