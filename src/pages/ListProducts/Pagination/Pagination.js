import React from "react";
import "./Pagination.scss";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
const Pagination = (props) => {
  const {
    totalPageProduct,
    currentPage,
    paginateNumberPage,
    changeCurrentPage,
    maxProductPage,
  } = props;

  const numberpage = [];

  for (let i = 1; i < totalPageProduct / maxProductPage; i++) {
    numberpage.push(i);
  }
 
  const updatePage = (type) => {
    changeCurrentPage(type);
  };
  return (
    <>
      <div className="page">
        <div className="page__number">
          <div
            className="page__number__left"
            onClick={() => updatePage("LEFT")}
          >
            <AiOutlineLeft />
          </div>

          {numberpage.map((item, index) => (
            <span
              className={
                currentPage === item
                  ? "page__number__item active"
                  : "page__number__item"
              }
              key={index}
              onClick={() => paginateNumberPage(item)}
            >
              {item}
            </span>
          ))}
          <div
            className="page__number__right"
            onClick={() => updatePage("RIGHT")}
          >
            <AiOutlineRight />
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagination;
