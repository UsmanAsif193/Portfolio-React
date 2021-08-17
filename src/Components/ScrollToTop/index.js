import React, { useState } from 'react';
import './ScrollToTop.css';


const ScrollToTop = () => {

    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false)
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', checkScrollTop)

    return (
        <div className="scrolltotop-div">
            <i className={`fi-rr-arrow-small-up ${showScroll ? 'scrollTop' : 'scrollnone'}`} onClick={scrollTop} ></i>
        </div>
    );
}

export default ScrollToTop;