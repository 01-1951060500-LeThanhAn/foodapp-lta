import React, { useEffect, useState } from "react";
import Helmet from "../../components/Helmet/Helmet";
import { AiOutlineSearch } from "react-icons/ai";
import { filterFood, filterRate } from "../../config/Filter";
import "../../styles/ListProducts.scss";
import axios from "axios";
import "../../styles/Header.scss";
import FilterFood from "./filter/FilterFood";
import { API_key } from "../../config/keyAPI";
import Search from "./Search/Search";
import Pagination from "./Pagination/Pagination";
import FilterRate from "./filter/FilterRate";

import Banner from "../../components/Banner/Banner.jsx"
import FilterPrice from "./filter/FilterPrice";
const ListProducts = () => { 
  const [searchItem, setSearchItem] = useState("");
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxProductPage, setMaxCurrentPage] = useState(16);

  const [selectedPrice, setSelectedPrice] = useState([10, 300]);
  const [resultsFound, setResultFound] = useState(true);

  const [show, setShow] = useState(false)
  
  const applyFilters = () => {
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];
    // Price Filter

    const updatedList = products.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );

    setProducts(updatedList);
    setCurrentPage(1)
    // !updatedList.length ? setResultFound(false) : setResultFound(true);
  };

  const changePrice = (e, value) => {
    setSelectedPrice(value);
  };

  const fetchFood = async () => {
    try {
      const response = await axios.get(`${API_key}/foods_products_list`);
      setProducts(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchFood();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [selectedPrice]);

  const sortByAsc = () => {
    const sorted = [...products].sort((a, b) => a.price - b.price);
    setProducts(sorted);
  };

  const sortByDesc = () => {
    const sorted = [...products].sort((a, b) => b.price - a.price);
    setProducts(sorted);
  };

  useEffect(() => {
    sortByDesc();
    sortByAsc()
  }, []);

 

  //Get currentPage

  const indexOfLastProduct = currentPage * maxProductPage;
  const indexOfFirstProduct = indexOfLastProduct - maxProductPage;

  const currentProduct = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  //Get page Number

  const paginateNumberPage = (numberpage) => {
    setCurrentPage(numberpage);
  };

  const changeCurrentPage = (type) => {
    if (type === "RIGHT") {
      if (Math.ceil(products.length / maxProductPage) === currentPage) {
        return;
      } else {
        setCurrentPage(currentPage + 1);
      }
    } else {
      setCurrentPage(currentPage - 1 < 1 ? 1 : currentPage - 1);
    }
  };

  //Get filter products__box
  // const getFilterProducts = (data) => {
  //   const productsFilter = products.filter((item) => item.category === data);
  //   setProducts(productsFilter);
  // };

  // const getFilterProductsRate = (data) => {
  //   const productsFilterRate = products.filter((item) => item.rate === data);
  //   setProducts(productsFilterRate);
  // };

  return (
    <Helmet title="Sản phẩm">
     
      <Banner title="Best foods Category" />

      <div className="catalog">
        <div className="catalog__container">
          <div className="catalog__container__left">
            <div className="catalog__container__left__filter">
              <div className="catalog__container__left__filter__title">
                <h3>Danh mục sản phẩm </h3>
              </div>

              {filterFood.map((item, index) => (
                <FilterFood data={item} key={index} />
              ))}
              <div className="catalog__container__left__filter__title">
                <h3>Đánh giá </h3>
              </div>

              {filterRate.map((item, index) => (
                <FilterRate item={item} key={index} />
              ))}

              <div className="catalog__container__left__filter__title">
                <h3>Giá sản phẩm</h3>
              </div>
              <FilterPrice changePrice={changePrice} value={selectedPrice} />
            </div>
          </div>

          <div className="catalog__container__right">
            <div className="catalog__container__right__box">
              <div className="catalog__container__right__box__search">
                <input
                  type="text"
                  placeholder="Search here..."
                  onChange={(e) => setSearchItem(e.target.value)}
                  value={searchItem}
                />
                <div className="catalog__container__right__box__search__icon">
                  <AiOutlineSearch />
                </div> 
              </div>

              <div className="catalog__container__right__box__sort">
                {/* <select onChange={(e) => setSortType(e.target.value)}>
                  <option disabled selected value="">
                    Sort by
                  </option>
                  <option value="lowest">
                    Price: Lowest
                  </option>
                  <option  value="highest">
                    Price: Highest
                  </option>
                </select> */}
                <span onClick={() => setShow(!show)}>Featured</span>
                <ul className={show ? "active" : ""}>
                  <li onClick={sortByAsc}>Price High to Low</li>
                  <li onClick={sortByDesc}>Price: Low to High</li>
                  
                </ul>

              </div>
            </div>
            <div className="catalog__container__right__products">
              <Search
                setResultFound={setResultFound}
                products={products}
                resultsFound={resultsFound}
                product={currentProduct}
                searchItem={searchItem}
              
              />
            </div>

            <Pagination
              totalPageProduct={products.length}
              currentPage={currentPage}
              paginateNumberPage={paginateNumberPage}
              changeCurrentPage={changeCurrentPage}
              maxProductPage={maxProductPage}
            />
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default ListProducts;
