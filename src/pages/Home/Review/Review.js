import React, { useEffect } from "react";
import review from "../../../config/reviewTitle";
import "../../../styles/Review.scss"
import AOS from "aos"
import "aos/dist/aos.css"
const Review = () => {
 
  useEffect(() => {
    AOS.init({
      duration: 3000
    })
    AOS.refresh();
}, [])

  const bg =
    "https://previews.123rf.com/images/alexraths/alexraths1607/alexraths160700005/61852074-delicious-hamburgers-with-french-fries-on-dark-background.jpg?fj=1";
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        height: "100vh",
        backgroundSize: "cover",
      }}
      className="review"
    >
      <div className="review__container">
        <div className="review__container__list">
          {review.map((item, index) => (
            <div key={item.id} data-aos={"fade-up"} className="review__container__list__item">
              <div className="review__container__list__item__index">
                <span>{item.id}</span>
              </div>
              <div className="review__container__list__item__title">
                <h3>{item.title}</h3>
              </div>
              <div className="review__container__list__item__desc">
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
