import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { animateScroll as scroll } from "react-scroll";


const ScrollToTop = ({children}) => {

    const { pathname } = useLocation();

    useEffect(() => {
        scroll.scrollToTop({
            duration: 100,
            delay: 0,
            smooth: "linear"
        });
    }, [pathname]);

    return children;
}

export default ScrollToTop;