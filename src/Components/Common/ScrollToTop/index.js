import React, { useState } from "react";
import { useDarkMode } from "../../../Context/DarkMode";

const ScrollToTop = ({ isOpen }) => {
  const darkMode = useDarkMode();

  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", checkScrollTop);
  }

  return (
    <div className="scrolltotop-div">
      <i
        className={`fas fa-chevron-circle-up ${
          showScroll
            ? `${
                darkMode
                  ? "scrollTop dark-scrolltop"
                  : "scrollTop light-scrolltop"
              } ${isOpen && "scroll-none"}`
            : "scroll-none"
        }`}
        onClick={scrollTop}
      ></i>
    </div>
  );
};

export default ScrollToTop;
