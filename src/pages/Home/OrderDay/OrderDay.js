import React from "react";
import CountUp from "react-countup";
import "../../../styles/OrderDay.scss";
const OrderDay = () => {
  const bg =
    "https://c8.alamy.com/comp/PCYNC4/three-hamburger-with-beef-meat-burger-and-fresh-vegetables-on-dark-background-tasty-food-PCYNC4.jpg";
  return (
    <div
      style={{
        background: `url(${bg})`,
        height: "100vh",
        width: "100%",
        backgroundSize: "cover",
        backgroundAttachment: "fixed"
      }}
      className="count"
    >
      <div className="countup">
        <div className="countup__container">
          <div className="countup__container__list">
            <div className="countup__container__list__item">
              <CountUp start={0} end={3000} delay={0} duration={30}>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                    <div className="countup__container__list__item__title">
                      <h2>Cups of Tea</h2>
                    </div>
                  </div>
                )}
              </CountUp>
            </div>
            <div className="countup__container__list__item">
              <CountUp start={0} end={300} delay={0} duration={40}>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                    <div className="countup__container__list__item__title">
                      <h2>Orders Everyday</h2>
                    </div>
                  </div>
                )}
              </CountUp>
            </div>
            <div className="countup__container__list__item">
              <CountUp start={0} end={100} delay={0} duration={30}>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                    <div className="countup__container__list__item__title">
                      <h2>Skilled Professionals</h2>
                    </div>
                  </div>
                )}
              </CountUp>
            </div>
            <div className="countup__container__list__item">
              <CountUp start={0} end={50} delay={0} duration={30}>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                    <div className="countup__container__list__item__title">
                      <h2>Pizzas at Hours</h2>
                    </div>
                  </div>
                )}
              </CountUp>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDay;
