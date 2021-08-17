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
        <i class="fi-rr-arrow-small-up scrollTop" onClick={scrollTop} style={{ height: 40, display: showScroll ? 'flex' : 'none' }}></i>
    );
}

export default ScrollToTop;