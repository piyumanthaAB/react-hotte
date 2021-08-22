import { ColorSpan } from '../Headings/Headings';
import * as H from './HeaderElements';
import SideImg from './../../img/bubble.png';

const Header = (props) => {
    return (
        <>
            <H.HeaderContainer>
                <H.HeaderCaptionContainer>
                    <H.HeaderMainTitle> {props.mainTitle}  </H.HeaderMainTitle>
                   
                     
                    <H.HeaderSecondaryTitle>
                    Home {'>>'} <ColorSpan>{ props.secondaryTitle}</ColorSpan> 
                    </H.HeaderSecondaryTitle>

                </H.HeaderCaptionContainer>
                <H.HeaderSideImage src={SideImg} />
            </H.HeaderContainer>
        </>
     );
}
 
export default Header;