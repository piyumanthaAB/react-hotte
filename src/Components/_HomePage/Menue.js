import * as M from './HomePageElements';

import { CustomHeading, CustomSpan } from './../Headings/Headings';

import { MdQueryBuilder } from "react-icons/md";

import menu_1 from './../../img/food1.png';
import menu_2 from './../../img/food2.png';
import menu_3 from './../../img/food3.png';
import menu_4 from './../../img/food4.png';
import menu_5 from './../../img/food5.png';
import menu_6 from './../../img/food6.png';

const Menue = () => {
    return (
        <>
            <M.MenueContainer>
                <M.MenueTitleContainer>
                    
                    <CustomHeading lineHeight={"1.2"} size={"3.8rem"} weight={"700"} color={"#0a0626"}>
                        Regular Menu’s of 
                        <CustomSpan color={"#ff702a"} size={"3.8rem"} weight={"700"}>
                            { ' '}Hotte.
                        </CustomSpan>
                    </CustomHeading>

                    <CustomHeading padding={"2rem 5rem"} size={"1.4rem"} weight={"300"} color={"#494442"}>
                        There are many variations of passages of Lorem Ipsum available but majority have suffered alteration injected humour
                    </CustomHeading>

                </M.MenueTitleContainer>
                <M.MenueCardsContainer>
                    <M.MenueCard>
                        <M.MenueImageContainer>
                            <M.MenueImage src={menu_1} />
                        </M.MenueImageContainer>
                        <M.MenueIngrediantsContainer>
                            <CustomHeading size={"2.4rem"} color={"White"} weight={"bold"} margin={"0 0 1rem"} >Ingrediants</CustomHeading>
                            <CustomHeading size={"1.4rem"} color={"White"} weight={"normal"} margin={"0 0 .5rem"} >½ tbsp olive oil</CustomHeading>
                            <CustomHeading size={"1.4rem"} color={"White"} weight={"normal"} margin={"0 0 .5rem"} >1 onion, peeled and finely chopped</CustomHeading>
                            <CustomHeading size={"1.4rem"} color={"White"} weight={"normal"} margin={"0 0 .5rem"} >1 tsp mixed dried herbs</CustomHeading>
                            <CustomHeading size={"1.4rem"} color={"White"} weight={"normal"} margin={"0 0 .5rem"} >1 egg, beaten</CustomHeading>
                            <CustomHeading size={"1.4rem"} color={"White"} weight={"normal"} margin={"0 0 .5rem"} >4 slices mature Cheddar (optional)</CustomHeading>
                        </M.MenueIngrediantsContainer>
                        <M.MenueOrderContainer>
                        <CustomHeading size={"2.4rem"} weight={"700"} color={"#0a0626"}>
                            Chicken Burger
                            </CustomHeading>
                            <M.MenueOrderBtnRow>
                                <M.MenueOrderBtnRowLeft>
                                    <CustomHeading weight={"300"} size="1.3rem" color={"#494442"}><MdQueryBuilder/> 25 min away</CustomHeading>
                                    <CustomHeading weight={"700"} size="3rem" color={"#ff702a"}>
                                    <CustomSpan weight={"700"} size="2rem" color={"#ff702a"}>$</CustomSpan> 
                                    89.00
                                    </CustomHeading>
                                </M.MenueOrderBtnRowLeft>
                                <M.MenueOrderBtnRowRight>
                                    <M.MenueOrderBtn>Order Now</M.MenueOrderBtn>
                                </M.MenueOrderBtnRowRight>
                            </M.MenueOrderBtnRow>
                        </M.MenueOrderContainer>

                    </M.MenueCard>
                    <M.MenueCard>
                        <M.MenueImageContainer>
                            <M.MenueImage src={menu_2} />
                        </M.MenueImageContainer>
                        <M.MenueIngrediantsContainer>
                            <CustomHeading size={"2.4rem"} color={"White"} weight={"bold"} margin={"0 0 1rem"} >Ingrediants</CustomHeading>
                            <CustomHeading size={"1.4rem"} color={"White"} weight={"normal"} margin={"0 0 .5rem"} >½ tbsp olive oil</CustomHeading>
                            <CustomHeading size={"1.4rem"} color={"White"} weight={"normal"} margin={"0 0 .5rem"} >1 onion, peeled and finely chopped</CustomHeading>
                            <CustomHeading size={"1.4rem"} color={"White"} weight={"normal"} margin={"0 0 .5rem"} >1 tsp mixed dried herbs</CustomHeading>
                            <CustomHeading size={"1.4rem"} color={"White"} weight={"normal"} margin={"0 0 .5rem"} >1 egg, beaten</CustomHeading>
                            <CustomHeading size={"1.4rem"} color={"White"} weight={"normal"} margin={"0 0 .5rem"} >4 slices mature Cheddar (optional)</CustomHeading>
                        </M.MenueIngrediantsContainer>
                        <M.MenueOrderContainer>
                        <CustomHeading size={"2.4rem"} weight={"700"} color={"#0a0626"}>
                        Special Beef Burger
                            </CustomHeading>
                            <M.MenueOrderBtnRow>
                                <M.MenueOrderBtnRowLeft>
                                    <CustomHeading weight={"300"} size="1.3rem" color={"#494442"}><MdQueryBuilder/> 25 min away</CustomHeading>
                                    <CustomHeading weight={"700"} size="3rem" color={"#ff702a"}>
                                    <CustomSpan weight={"700"} size="2rem" color={"#ff702a"}>$</CustomSpan> 
                                    95.00
                                    </CustomHeading>
                                </M.MenueOrderBtnRowLeft>
                                <M.MenueOrderBtnRowRight>
                                    <M.MenueOrderBtn>Order Now</M.MenueOrderBtn>
                                </M.MenueOrderBtnRowRight>
                            </M.MenueOrderBtnRow>
                        </M.MenueOrderContainer>

                    </M.MenueCard>
                    <M.MenueCard>
                        <M.MenueImageContainer>
                            <M.MenueImage src={menu_3} />
                        </M.MenueImageContainer>
                        <M.MenueIngrediantsContainer>
                            <CustomHeading size={"2.4rem"} color={"White"} weight={"bold"} margin={"0 0 1rem"} >Ingrediants</CustomHeading>
                            <CustomHeading size={"1.4rem"} color={"White"} weight={"normal"} margin={"0 0 .5rem"} >½ tbsp olive oil</CustomHeading>
                            <CustomHeading size={"1.4rem"} color={"White"} weight={"normal"} margin={"0 0 .5rem"} >1 onion, peeled and finely chopped</CustomHeading>
                            <CustomHeading size={"1.4rem"} color={"White"} weight={"normal"} margin={"0 0 .5rem"} >1 tsp mixed dried herbs</CustomHeading>
                            <CustomHeading size={"1.4rem"} color={"White"} weight={"normal"} margin={"0 0 .5rem"} >1 egg, beaten</CustomHeading>
                            <CustomHeading size={"1.4rem"} color={"White"} weight={"normal"} margin={"0 0 .5rem"} >4 slices mature Cheddar (optional)</CustomHeading>
                        </M.MenueIngrediantsContainer>
                        <M.MenueOrderContainer>
                        <CustomHeading size={"2.4rem"} weight={"700"} color={"#0a0626"}>
                        Chicken Fry Pack
                            </CustomHeading>
                            <M.MenueOrderBtnRow>
                                <M.MenueOrderBtnRowLeft>
                                    <CustomHeading weight={"300"} size="1.3rem" color={"#494442"}><MdQueryBuilder/> 25 min away</CustomHeading>
                                    <CustomHeading weight={"700"} size="3rem" color={"#ff702a"}>
                                    <CustomSpan weight={"700"} size="2rem" color={"#ff702a"}>$</CustomSpan> 
                                    74.00
                                    </CustomHeading>
                                </M.MenueOrderBtnRowLeft>
                                <M.MenueOrderBtnRowRight>
                                    <M.MenueOrderBtn>Order Now</M.MenueOrderBtn>
                                </M.MenueOrderBtnRowRight>
                            </M.MenueOrderBtnRow>
                        </M.MenueOrderContainer>

                    </M.MenueCard>
                    <M.MenueCard>
                        <M.MenueImageContainer>
                            <M.MenueImage src={menu_4} />
                        </M.MenueImageContainer>
                        <M.MenueIngrediantsContainer>
                            <CustomHeading size={"2.4rem"} color={"White"} weight={"bold"} margin={"0 0 1rem"} >Ingrediants</CustomHeading>
                            <CustomHeading size={"1.4rem"} color={"White"} weight={"normal"} margin={"0 0 .5rem"} >½ tbsp olive oil</CustomHeading>
                            <CustomHeading size={"1.4rem"} color={"White"} weight={"normal"} margin={"0 0 .5rem"} >1 onion, peeled and finely chopped</CustomHeading>
                            <CustomHeading size={"1.4rem"} color={"White"} weight={"normal"} margin={"0 0 .5rem"} >1 tsp mixed dried herbs</CustomHeading>
                            <CustomHeading size={"1.4rem"} color={"White"} weight={"normal"} margin={"0 0 .5rem"} >1 egg, beaten</CustomHeading>
                            <CustomHeading size={"1.4rem"} color={"White"} weight={"normal"} margin={"0 0 .5rem"} >4 slices mature Cheddar (optional)</CustomHeading>
                        </M.MenueIngrediantsContainer>
                        <M.MenueOrderContainer>
                        <CustomHeading size={"2.4rem"} weight={"700"} color={"#0a0626"}>
                            Hotte Sendwise
                            </CustomHeading>
                            <M.MenueOrderBtnRow>
                                <M.MenueOrderBtnRowLeft>
                                    <CustomHeading weight={"300"} size="1.3rem" color={"#494442"}><MdQueryBuilder/> 25 min away</CustomHeading>
                                    <CustomHeading weight={"700"} size="3rem" color={"#ff702a"}>
                                    <CustomSpan weight={"700"} size="2rem" color={"#ff702a"}>$</CustomSpan> 
                                    25.00
                                    </CustomHeading>
                                </M.MenueOrderBtnRowLeft>
                                <M.MenueOrderBtnRowRight>
                                    <M.MenueOrderBtn>Order Now</M.MenueOrderBtn>
                                </M.MenueOrderBtnRowRight>
                            </M.MenueOrderBtnRow>
                        </M.MenueOrderContainer>

                    </M.MenueCard>
                    <M.MenueCard>
                        <M.MenueImageContainer>
                            <M.MenueImage src={menu_5} />
                        </M.MenueImageContainer>
                        <M.MenueIngrediantsContainer>
                            <CustomHeading size={"2.4rem"} color={"White"} weight={"bold"} margin={"0 0 1rem"} >Ingrediants</CustomHeading>
                            <CustomHeading size={"1.4rem"} color={"White"} weight={"normal"} margin={"0 0 .5rem"} >½ tbsp olive oil</CustomHeading>
                            <CustomHeading size={"1.4rem"} color={"White"} weight={"normal"} margin={"0 0 .5rem"} >1 onion, peeled and finely chopped</CustomHeading>
                            <CustomHeading size={"1.4rem"} color={"White"} weight={"normal"} margin={"0 0 .5rem"} >1 tsp mixed dried herbs</CustomHeading>
                            <CustomHeading size={"1.4rem"} color={"White"} weight={"normal"} margin={"0 0 .5rem"} >1 egg, beaten</CustomHeading>
                            <CustomHeading size={"1.4rem"} color={"White"} weight={"normal"} margin={"0 0 .5rem"} >4 slices mature Cheddar (optional)</CustomHeading>
                        </M.MenueIngrediantsContainer>
                        <M.MenueOrderContainer>
                        <CustomHeading size={"2.4rem"} weight={"700"} color={"#0a0626"}>
                            Vegetable Roll
                            </CustomHeading>
                            <M.MenueOrderBtnRow>
                                <M.MenueOrderBtnRowLeft>
                                    <CustomHeading weight={"300"} size="1.3rem" color={"#494442"}><MdQueryBuilder/> 25 min away</CustomHeading>
                                    <CustomHeading weight={"700"} size="3rem" color={"#ff702a"}>
                                    <CustomSpan weight={"700"} size="2rem" color={"#ff702a"}>$</CustomSpan> 
                                    18.00
                                    </CustomHeading>
                                </M.MenueOrderBtnRowLeft>
                                <M.MenueOrderBtnRowRight>
                                    <M.MenueOrderBtn>Order Now</M.MenueOrderBtn>
                                </M.MenueOrderBtnRowRight>
                            </M.MenueOrderBtnRow>
                        </M.MenueOrderContainer>

                    </M.MenueCard>
                    <M.MenueCard>
                        <M.MenueImageContainer>
                            <M.MenueImage src={menu_6} />
                        </M.MenueImageContainer>
                        <M.MenueIngrediantsContainer>
                            <CustomHeading size={"2.4rem"} color={"White"} weight={"bold"} margin={"0 0 1rem"} >Ingrediants</CustomHeading>
                            <CustomHeading size={"1.4rem"} color={"White"} weight={"normal"} margin={"0 0 .5rem"} >½ tbsp olive oil</CustomHeading>
                            <CustomHeading size={"1.4rem"} color={"White"} weight={"normal"} margin={"0 0 .5rem"} >1 onion, peeled and finely chopped</CustomHeading>
                            <CustomHeading size={"1.4rem"} color={"White"} weight={"normal"} margin={"0 0 .5rem"} >1 tsp mixed dried herbs</CustomHeading>
                            <CustomHeading size={"1.4rem"} color={"White"} weight={"normal"} margin={"0 0 .5rem"} >1 egg, beaten</CustomHeading>
                            <CustomHeading size={"1.4rem"} color={"White"} weight={"normal"} margin={"0 0 .5rem"} >4 slices mature Cheddar (optional)</CustomHeading>
                        </M.MenueIngrediantsContainer>
                        <M.MenueOrderContainer>
                        <CustomHeading size={"2.4rem"} weight={"700"} color={"#0a0626"}>
                        French Fry
                            </CustomHeading>
                            <M.MenueOrderBtnRow>
                                <M.MenueOrderBtnRowLeft>
                                    <CustomHeading weight={"300"} size="1.3rem" color={"#494442"}><MdQueryBuilder/> 25 min away</CustomHeading>
                                    <CustomHeading weight={"700"} size="3rem" color={"#ff702a"}>
                                    <CustomSpan weight={"700"} size="2rem" color={"#ff702a"}>$</CustomSpan> 
                                    16.00
                                    </CustomHeading>
                                </M.MenueOrderBtnRowLeft>
                                <M.MenueOrderBtnRowRight>
                                    <M.MenueOrderBtn>Order Now</M.MenueOrderBtn>
                                </M.MenueOrderBtnRowRight>
                            </M.MenueOrderBtnRow>
                        </M.MenueOrderContainer>

                    </M.MenueCard>
                    
                    
                    
                </M.MenueCardsContainer>
            </M.MenueContainer>
        </>
     );
}
 
export default Menue;