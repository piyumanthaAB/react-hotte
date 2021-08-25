import { ColorSpan } from '../Headings/Headings';
import * as H from './HeaderElements';
import SideImg from './../../img/bubble.png';

const Header = (props) => {

    const HeaderVariants = {

        hidden: {x:'-100vw'},
        visible: {
            x: 0,
            transition: {
                delay:.4
                // ease: 'easeInOut'
            }
        },
        
        exit: {
            x: '-100vw',
            transition: {
                // ease: 'easeInOut'
            }
        }
    }
    return (
        <>
            <H.HeaderContainer>
                <H.HeaderCaptionContainer variants={HeaderVariants} initial="hidden" animate="visible" exit="exit">
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
