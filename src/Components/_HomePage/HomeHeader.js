import * as H from './HomePageElements';
import { CustomHeading,CustomSpan } from '../Headings/Headings';
import rightImg from './../../img/burger1.png';
import bubble from './../../img/bubble.png'
import ButtonA from '../Button/ButtonA';


const HomeHeader = () => {
    return (
        <>
            <H.HomeHeaderContainer>
                <H.HomeHeaderLeft>
                    <CustomHeading lineHeight={"1.2"}  size={"8.7rem"} weight={ "700"} color={"white"}>
                        Take <CustomSpan size={"8.7rem"} weight={"700"} color={"#ec5a12"}>Food</CustomSpan> & 
                         <CustomSpan size={"8.7rem"} weight={ "700"} color={"#ec5a12"}> Let’s </CustomSpan>
                        <CustomSpan padding={"0 0 -2rem"}  bottomBorder={"3px solid #ec5a12"} textStyle={"underline #ec5a12"} size={"8.7rem"} weight={ "300"} color={"white"} > Go. </CustomSpan>
                    </CustomHeading>
                    <CustomHeading margin={"3rem 0"} size={"1.6rem"} weight={ "400"} color={"white"}>
                        Have any food on your mind? <CustomSpan size={"1.6rem"} weight={ "400"} color={" #ec5a12"}>Just order now!</CustomSpan> 
                    </CustomHeading>
                    
                    <ButtonA size={"1.5rem"} href="" btnText="Today's Menue >>" />
                </H.HomeHeaderLeft>
                <H.HomeHeaderBubbleImg src={bubble} />
                <H.HomeHeaderRight>
                    <H.HomeHeaderRightImg src={ rightImg}/>
                </H.HomeHeaderRight>
            </H.HomeHeaderContainer>
            
        </>
     );
}
 
export default HomeHeader;