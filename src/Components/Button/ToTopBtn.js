import * as B from './ButtnElements';
import { FaLongArrowAltUp } from "react-icons/fa";

import { animateScroll as scroll } from "react-scroll";


const ToTopBtn = (props) => {
    return (
        <>
            {props.show && <B.BacktoTop onClick={() => {
                scroll.scrollToTop({
                    duration: 100,
                    delay: 0,
                    smooth: "linear",
                })
            }}>
                <FaLongArrowAltUp />
            </B.BacktoTop>}
        </>
    );
}
 
export default ToTopBtn;