import * as H from './HomePageElements';
import rightImg from './../../img/burger1.png';
import bubble from './../../img/bubble.png'


const HomeHeader = () => {

    const MenueBtnVariants = {
        hidden: {
            opacity: 0,
            x: '-100vw'
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.5,
                type: 'spring',
                mass: 0.4,
                damping: 8
            }
        },
        hover: {
            scale: 1.01,
            boxShadow: "0px 0px 8px rgb(251,104,40)"
        }
    }


    return (
        
        <H.HomeHeaderContainer >
            <H.HomeHeaderLeft>
                <H.HomeHeaderTitle>
                    Take <H.HomeHeaderColoredSpan>Food</H.HomeHeaderColoredSpan>  & <H.HomeHeaderColoredSpan>Let’s </H.HomeHeaderColoredSpan>
                    <H.HomeHeaderUnderlinedSpan>Go.</H.HomeHeaderUnderlinedSpan>
                </H.HomeHeaderTitle>
                <H.HomeHeaderSubText>
                    Have any food on your mind? <H.HomeHeaderColoredSpan>Just order now!</H.HomeHeaderColoredSpan>
                </H.HomeHeaderSubText>
                    
                <H.HomeHeaderLinkBtnContainer
                    variants={MenueBtnVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                >
                    <H.HomeHeaderLinkBtn to="menue">
                        Today's Menue {'>>'}
                    </H.HomeHeaderLinkBtn>
                </H.HomeHeaderLinkBtnContainer>
                    

            </H.HomeHeaderLeft>
            <H.HomeHeaderBubbleImg src={bubble} />
            <H.HomeHeaderRight>
                <H.HomeHeaderRightImg src={rightImg} />
            </H.HomeHeaderRight>
        </H.HomeHeaderContainer>
            
        
    );
}
 
export default HomeHeader;