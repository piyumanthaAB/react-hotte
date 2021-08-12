import Header from "../Components/Header/Header";
import Button from "../Components/Button/Button";
import * as E from './../Components/_Error Page/ErrorPageElements';
import { CustomHeading, CustomSpan } from "../Components/Headings/Headings";
import { BsFillPlayFill } from "react-icons/bs";
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
                <Button btText={ '<< Back to Home'}/>
            </E.ErrorMessage>
            <E.ErrorAd>
                <E.ErrorAdLeft>
                    <CustomHeading size={"5rem"} weight={"bold"} color={"white"} space={""} >
                        We Make Tasty  <CustomSpan size={"5rem"} weight={"bold"} color={"#0a0626"} space={""} >Food Everyday</CustomSpan>
                    </CustomHeading>
                    <CustomHeading size={"1.6rem"} weight={"normal"} color={"white"} space={""} >
                    If you are going to use aa passage of you need to be sure there isn't anything embarrassing hidden in the middle of text. 
                    </CustomHeading>
                </E.ErrorAdLeft>

                <E.ErrorAdRight>
                    <E.ErrorAdPlayBtn>
                        <BsFillPlayFill color={"white"} />
                    </E.ErrorAdPlayBtn>
                    <CustomSpan size={"5rem"} weight={"bold"} color={"white"} space={""} >20 Minues Intro</CustomSpan>
                </E.ErrorAdRight>
            </E.ErrorAd>
        </>
     );
}
 
export default Error;