import * as T from './HomePageElements';
import { CustomHeading ,CustomSpan,ColorSpan} from './../Headings/Headings';
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


                    <T.TodaySpecialTitle>
                        Today's Special <br/> <ColorSpan>Surprise For You</ColorSpan> 
                    </T.TodaySpecialTitle>


                    <T.TodaySpecialDesc>
                        It is a long established fact that a will distracted readable content of a page
                        when looking at its the layout using Lorem Ipsum is that it has a normal distribution
                        <ColorSpan> as
                        opposed to using making it look like.</ColorSpan>
                    </T.TodaySpecialDesc>

                    <T.TodaySpecialOrderContainer>
                        
                        <T.TodaySpecialPriceContainer>
                            <T.TodaySpecialPrice>
                                <T.TodaySpecialPrice_$>$</T.TodaySpecialPrice_$>
                                89.00
                            </T.TodaySpecialPrice>
                            <T.TodaySpecialPriceSubText>
                                <MdQueryBuilder/> 25 min away
                            </T.TodaySpecialPriceSubText>
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