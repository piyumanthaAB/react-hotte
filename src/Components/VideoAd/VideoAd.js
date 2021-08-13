import * as V from './VideoAdElements';
import { CustomHeading, CustomSpan } from "./../Headings/Headings";
import { BsFillPlayFill } from "react-icons/bs";
const VideoAd = () => {
    return (
        <>
           <V.VideoAd>
                <V.VideoAdLeft>
                    <CustomHeading size={"5rem"} weight={"bold"} color={"white"} space={""} >
                        We Make Tasty  <CustomSpan size={"5rem"} weight={"bold"} color={"#0a0626"} space={""} >Food Everyday</CustomSpan>
                    </CustomHeading>
                    <CustomHeading size={"1.6rem"} weight={"normal"} color={"white"} space={""} >
                    If you are going to use aa passage of you need to be sure there isn't anything embarrassing hidden in the middle of text. 
                    </CustomHeading>
                </V.VideoAdLeft>

                <V.VideoAdRight>
                    <V.VideoAdPlayBtn>
                        <BsFillPlayFill color={"white"} />
                    </V.VideoAdPlayBtn>
                    <CustomSpan size={"5rem"} weight={"bold"} color={"white"} space={""} >20 Minues Intro</CustomSpan>
                </V.VideoAdRight>
            </V.VideoAd> 
        </>
     );
}
 
export default VideoAd;