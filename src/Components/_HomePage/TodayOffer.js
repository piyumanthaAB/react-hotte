import * as T from './HomePageElements';
import { MdQueryBuilder } from "react-icons/md";
import { CustomSpan, CustomHeading } from '../Headings/Headings';

import offer from './../../img/offerimg.png';

const TodayOffer = () => {
    return (
        <>
            <T.TodaysOfferContainer>
                <T.TodaysOfferLeft>
                    <CustomHeading margin={"0 0 1rem"} size={"6rem"} weight={"700"} color={"white"} > Today's
                        <CustomSpan size={"6rem"} weight={"700"} color={"#ff702a"}> Offers.</CustomSpan>
                    </CustomHeading>
                    <CustomHeading size={"1.6rem"} weight={"500"} color={"#dccece"} lineHeight={"1.4"}> 
                        It is a long established fact that a will distracted readable content of a page when looking the layout
                    </CustomHeading>
                    <T.TodaysOfferDesc>
                    <CustomHeading size={"1.6rem"} weight={"500"} color={"#b6a9a9"} lineHeight={"1.4"}> 
                            There are many variations passages of Lorem Ipsum available, but the majority have suffered alteration in form,
                            by injected humour randomised words which don't look even slightly believable.
                    </CustomHeading>
                    </T.TodaysOfferDesc>
                    <T.TodaysOfferOrderRow>
                        <T.TodayOfferOrderLeft>
                        <CustomHeading weight={"700"} size="4rem" color={"#ff702a"}>
                                <CustomSpan weight={"700"} size="2rem" color={"#ff702a"}>$</CustomSpan> 
                                89.00
                            </CustomHeading>
                            <CustomHeading weight={"500"} size="1.4rem" color={"#a09894"}><MdQueryBuilder/> 25 min away</CustomHeading>
                        </T.TodayOfferOrderLeft>
                        <T.TodayOfferOrderRight>
                            <T.TodaysOfferOrderBtn>Order Now</T.TodaysOfferOrderBtn>
                        </T.TodayOfferOrderRight>
                    </T.TodaysOfferOrderRow>
                </T.TodaysOfferLeft>
                <T.TodaysOfferRight>
                    <T.TodaysOfferRightImg src={offer }/>
                </T.TodaysOfferRight>
            </T.TodaysOfferContainer>
        </>
     );
}
 
export default TodayOffer;