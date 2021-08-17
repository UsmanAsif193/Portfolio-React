import React, { useState } from 'react';
import { useDarkMode } from '../../Context/DarkMode';
import './ScrollToTop.css';


const ScrollToTop = () => {
    const darkMode = useDarkMode()

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
            <i className={`fi-rr-arrow-small-up ${showScroll ? `${darkMode ? 'scrollTop dark-scrolltop' : 'scrollTop light-scrolltop'}` : 'scrollnone'}`} onClick={scrollTop} ></i>
        </div>
    );
}

export default ScrollToTop;