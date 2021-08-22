import Header from "../Components/Header/Header";
import Button from "../Components/Button/Button";
import VideoAd from "../Components/VideoAd/VideoAd";
import * as E from './../Components/_Error Page/ErrorPageElements';
import { CustomHeading, CustomSpan,ColorSpan } from "../Components/Headings/Headings";
import ErrorImage from './../img/404_Error.png'

import ToTopBtn from "../Components/Button/ToTopBtn";
import useShowBtn  from './../Hooks/useShowBtn';

const Error = () => {

    const showBtn = useShowBtn();
    return (
        <>
            <Header mainTitle={"404_Error"} secondaryTitle={"404-error"} />
            <E.ErrorMessage>
                <E.ErrorImg src={ErrorImage} />
               
                <E.ErrorTitle>
                    Sorry,
                    <ColorSpan color={"#767676"}> This page is not found</ColorSpan>
                </E.ErrorTitle>
                <E.ErrorParagraph>
                There are many variations of passages of Lorem Ipsum available but majority have suffered alteration injected humour
                </E.ErrorParagraph>
                <Button btText={'<< Back to Home'}  to='/'/>
                
            </E.ErrorMessage>
            <VideoAd />
            <ToTopBtn show={showBtn} />
            
        </>
     );
}
 
export default Error;