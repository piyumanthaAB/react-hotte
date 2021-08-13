import Header from "../Components/Header/Header";
import Button from "../Components/Button/Button";
import VideoAd from "../Components/VideoAd/VideoAd";
import * as E from './../Components/_Error Page/ErrorPageElements';
import { CustomHeading, CustomSpan } from "../Components/Headings/Headings";
import ErrorImage from './../img/404_Error.png'

const Error = () => {
    return (
        <>
            <Header mainTitle={"404_Error"} secondaryTitle={"404-error"} />
            <E.ErrorMessage>
                <E.ErrorImg src={ErrorImage} />
                <CustomHeading size={"2rem"} weight={"400"} color={"#0a0626"} space={""} >
                    Sorry,  
                    <CustomSpan size={"2.5rem"} weight={"500"} color={"#767676"} space={""} > This page is not found</CustomSpan>
                </CustomHeading>
                <E.ErrorParagraph>
                There are many variations of passages of Lorem Ipsum available but majority have suffered alteration injected humour
                </E.ErrorParagraph>
                <Button btText={'<< Back to Home'} />
                
            </E.ErrorMessage>
            <VideoAd/>
            
        </>
     );
}
 
export default Error;