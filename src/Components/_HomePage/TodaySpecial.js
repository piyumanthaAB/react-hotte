import * as T from './HomePageElements';
import { CustomHeading ,CustomSpan} from './../Headings/Headings';
import specialImg from './../../img/Todayspecialimg.png';
import donut from './../../img/donut.png';
import { MdQueryBuilder } from "react-icons/md";

import { useState } from 'react';

const TodaySpecial = () => {

    const [qty, setQty] = useState(1);

    const HandleQty = (val,op) => {
        if (op === '+' && val<5) {
            setQty(val + 1);
        } else if (op==='-' && val>1) {
            setQty(val - 1);
        }
    }

    return (
        <>
            <T.TodaySpecialContainer>
                <T.TodaySpecialLeft>
                    <T.TodaySpecialLeftImg src={specialImg} />
                </T.TodaySpecialLeft>
                <T.TodaySpecialRight>
                    
                    <T.TodaySpecialRightImgContainer>
                        <T.TodaySpecialRightImg src={ donut}/>
                    </T.TodaySpecialRightImgContainer>

                    <CustomHeading margin={"2rem 0"} weight={"700"} size="4.4rem" lineHeight={"1.2"} color={"#0a0626"} >
                        Today’s Special <CustomSpan weight={"700"} size="4.4rem" lineHeight={"1.2"} color={"#ff702a"}>Surprise For You</CustomSpan> 
                    </CustomHeading>

                    <CustomHeading margin={"0  0 2rem"} weight={"500"} size="1.4rem" lineHeight={"1.6"} color={"#494442"}>
                        It is a long established fact that a will distracted readable content of a page when looking at its
                        the layout using Lorem Ipsum is that it has a normal distribution
                        <CustomSpan weight={"500"} size="1.4rem" lineHeight={"1.6"}color={"#ff702a"}> as opposed to using making it look like.</CustomSpan> 
                        
                    </CustomHeading>

                    <T.TodaySpecialOrderContainer>
                        
                        <T.TodaySpecialPriceContainer>
                            <CustomHeading weight={"700"} size="3rem" color={"#ff702a"}>
                                <CustomSpan weight={"700"} size="2rem" color={"#ff702a"}>$</CustomSpan> 
                                89.00
                            </CustomHeading>
                            <CustomHeading weight={"300"} size="1.3rem" color={"#494442"}><MdQueryBuilder/> 25 min away</CustomHeading>
                        </T.TodaySpecialPriceContainer>


                        <T.TodaySpecialQtyContainer>
                            
                            <T.TodaySpecialQtyText>
                                <T.QtyAddRemove onClick={()=>{HandleQty(qty,'+')}}>+</T.QtyAddRemove>
                                <T.Qty>0{ qty}</T.Qty>
                                <T.QtyAddRemove onClick={()=>{HandleQty(qty,'-')}}>-</T.QtyAddRemove>
                            </T.TodaySpecialQtyText>

                        </T.TodaySpecialQtyContainer>
                        <T.TodaySpecialOrderBtnContainer>
                            <T.OrderBtn>Order Now</T.OrderBtn>
                        </T.TodaySpecialOrderBtnContainer>
                    </T.TodaySpecialOrderContainer>


                </T.TodaySpecialRight>
            </T.TodaySpecialContainer>
        </>
     );
}
 
export default TodaySpecial;