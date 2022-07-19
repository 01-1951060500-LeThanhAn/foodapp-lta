import React, { useEffect, useState } from "react";
import { BsChevronUp } from "react-icons/bs";
const ButtonScroll = () => {
  const [scroll, setScroll] = useState(false);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.scrollY >= 400) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      {scroll && (
        <div
          style={{
            position: "fixed",
            bottom: "50px",
            right: "50px",
            zIndex: "1000",
            transitionDelay: "1s",
          }}
        >
          <span
            style={{
              fontSize: "24px",
              backgroundColor: "#cd333a",
              color: "white",
              padding: "6px 10px",
              fontWeight: "700",
              borderRadius: "50%",
              cursor: "pointer",
            }}
            onClick={handleScrollTop}
          >
            <BsChevronUp />
          </span>
        </div>
      )}
    </>
  );
};

export default ButtonScroll;
