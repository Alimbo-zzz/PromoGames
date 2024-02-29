import React, { useState } from "react";
import { StyledScroll } from "@/styles/components/StyledHeader";

const ScrollUp = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (window.innerWidth >= 431) {
      if (scrolled > 900) {
        setVisible(true);
      } else if (scrolled <= 900) {
        setVisible(false);
      }
    } else {
      if (scrolled > 400) {
        setVisible(true);
      } else if (scrolled <= 400) {
        setVisible(false);
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <StyledScroll
      onClick={scrollToTop}
      style={{ display: visible ? "flex" : "none" }}
    >
    Наверх
      <svg
        width="26"
        height="68"
        viewBox="0 0 26 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26 20.6914C24.2929 20.0438 22.7172 19.3314 21.2727 18.5543C19.7626 17.7771 18.351 16.9029 17.0379 15.9314L17.0379 68L8.96212 68L8.96212 15.9314C7.64899 16.8381 6.2702 17.68 4.82576 18.4571C3.31566 19.2343 1.70707 19.9467 5.65307e-07 20.5943L6.53347e-07 13.2114C4.79293 9.19619 8.43687 4.79238 10.9318 1.30361e-07L15.1667 1.80861e-07C17.5303 4.79238 21.1414 9.19619 26 13.2114L26 20.6914Z"
          fill="#222"
        />
      </svg>
    </StyledScroll>
  );
};

export default ScrollUp;
