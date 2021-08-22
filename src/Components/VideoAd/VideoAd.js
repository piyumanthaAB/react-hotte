import * as V from './VideoAdElements';
import { ColorSpan } from "./../Headings/Headings";
import { BsFillPlayFill } from "react-icons/bs";
const VideoAd = () => {
    return (
        <>
           <V.VideoAd>
                <V.VideoAdLeft>
                    <V.VideoAdTitle>
                    We Make Tasty <ColorSpan color={"#0a0626"}> Food Everyday</ColorSpan> 
                    </V.VideoAdTitle>
                    <V.VideoAdTitleDesc>
                    If you are going to use aa passage of you need to be sure there isn't anything embarrassing hidden in the middle of text.
                    </V.VideoAdTitleDesc>
                </V.VideoAdLeft>

                <V.VideoAdRight>
                    <V.VideoAdPlayBtn>
                        <BsFillPlayFill color={"white"} />
                    </V.VideoAdPlayBtn>
                    <V.VideoAdTitle>20 Minutes Intro</V.VideoAdTitle>
                </V.VideoAdRight>
            </V.VideoAd> 
        </>
     );
}
 
export default VideoAd;