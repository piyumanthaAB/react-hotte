import * as M from './HomePageElements';

import { CustomHeading, CustomSpan,ColorSpan } from './../Headings/Headings';

import { MdQueryBuilder } from "react-icons/md";


const Menue = (props) => {
    return (
        <>
            <M.MenueContainer id="menue">
                <M.MenueTitleContainer>
                    <M.MenueTitle>
                        Regular Menu’s of <ColorSpan> Hotte. </ColorSpan> 
                    </M.MenueTitle>
                    <M.MenueTitleDesc>
                        There are many variations of passages of Lorem Ipsum available but majority have suffered alteration injected humour
                    </M.MenueTitleDesc>

                    
                </M.MenueTitleContainer>
                <M.MenueCardsContainer>
                    {props.data.map((el, idx) => {
                        return (
                            
                                <M.MenueCard key={idx}>
                                    <M.MenueImageContainer>
                                        <M.MenueImage src={el.img} />
                                    </M.MenueImageContainer>

                                    <M.MenueIngrediantsContainer>
                                        <M.MenueIngrediantsTitle>Ingrediants</M.MenueIngrediantsTitle>
                                        {el.ingrediants.map((el, ing) => {
                                            return (
                                                
                                                    <M.MenueIngrediantsItems key={ing}>{el}</M.MenueIngrediantsItems>
                                                
                                            )
                                        })}
                                        
                                        
                                    </M.MenueIngrediantsContainer>

                                    <M.MenueOrderContainer>
                                        <M.MenueOrderRowTitle>{el.foodItem}</M.MenueOrderRowTitle>
                                        <M.MenueOrderBtnRow>
                                            <M.MenueOrderBtnRowLeft>
                                                <M.MenueOrderPriceSubText ><MdQueryBuilder /> {el.timeToDeliver} away</M.MenueOrderPriceSubText>
                                                <M.MenueOrderPrice>
                                                    <M.MenueOrderPrice_$>$</M.MenueOrderPrice_$>
                                                    {el.price}
                                                </M.MenueOrderPrice>
                                            </M.MenueOrderBtnRowLeft>
                                            <M.MenueOrderBtnRowRight>
                                                <M.MenueOrderBtn>Order Now</M.MenueOrderBtn>
                                            </M.MenueOrderBtnRowRight>
                                        </M.MenueOrderBtnRow>
                                    </M.MenueOrderContainer>

                                </M.MenueCard>

                            
                        )
                    })}
                    
                    
                    
                    
                    
                    
                    
                    
                </M.MenueCardsContainer>
            </M.MenueContainer>
        </>
     );
}
 
export default Menue;