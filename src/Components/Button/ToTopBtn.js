import * as B from './ButtnElements';
import { FaLongArrowAltUp } from "react-icons/fa";

import { animateScroll as scroll } from "react-scroll";


const ToTopBtn = (props) => {
    return (
        <>
            {props.show && <B.BacktoTop onClick={()=>{scroll.scrollToTop()}}>
                <FaLongArrowAltUp/>
            </B.BacktoTop>}
        </>
     );
}
 
export default ToTopBtn;