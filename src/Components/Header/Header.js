import { CustomHeading,CustomSpan } from '../Headings/Headings';
import * as H from './HeaderElements';
import SideImg from './../../img/bubble.png';

const Header = (props) => {
    return (
        <>
            <H.HeaderContainer>
                <H.HeaderCaptionContainer>
                    <CustomHeading size={"5rem"} weight={"bolder"} color={"white"} space={""} >
                        {props.mainTitle} 
                    </CustomHeading>
                    <CustomHeading size={"1.5rem"} weight={"normal"} color={"white"} space={""} >
                        Home {'>>'} <CustomSpan size={"1.5rem"} weight={"normal"} color={"#ff702a"} space={""} >{ props.secondaryTitle}</CustomSpan>
                    </CustomHeading>
                    

                </H.HeaderCaptionContainer>
                <H.HeaderSideImage src={SideImg} />
            </H.HeaderContainer>
        </>
     );
}
 
export default Header;