import React, { useEffect, useRef, useState } from "react";
import "./Search.scss";
import ReactLoading from "react-loading";
import ProductItem from "../../../components/ProductItem/ProductItem";
import { useSelector } from "react-redux";
import {
  getSelectedCategory,
  getSelectedRate,
} from "../../../redux/filterReducer/filterReducer";
const Search = ({ product, searchItem, resultsFound }) => {
  const selectCategory = useSelector(getSelectedCategory);
  const selectRate = useSelector(getSelectedRate);
  const [data, setData] = useState(product);
  const pageRef = useRef(null);
  const [done, setDone] = useState(false);

 
  useEffect(() => {
    setTimeout(() => {
      setData(product);
      setDone(true);
    }, 1000);
  }, [product]);

  return (
    <>
    
      {resultsFound ? (
        <div className="results__found">
          {!done ? (
            <div className="loading">
              <ReactLoading
                type={"spin"}
                color={"#c33d3a"}
                height={70}
                width={70}
              />
            </div>
          ) : (
            <div ref={pageRef} className="product">
              <div className="product__grid">
                {data
                  .filter((value) => {
                    if (searchItem === "") {
                      return value;
                    } else {
                      return value.name
                        .toLowerCase()
                        .includes(searchItem.toLowerCase());
                    }
                  })
                  .filter((product) => {
                    if (selectCategory === "all") return true;

                    return selectCategory === product.category;
                  })
                  .filter((product) => {
                    if (selectRate === 3) return true;
                    return selectRate === product.rate;
                  })
                  .map((item, index) => (
                    <ProductItem data={item} key={index} />
                  ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <h3>rewriwerfehnehne</h3>
      )}
    </>
  );
};

export default Search;
