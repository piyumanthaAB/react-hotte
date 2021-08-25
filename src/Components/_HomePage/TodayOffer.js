import * as T from './HomePageElements';
import { MdQueryBuilder } from "react-icons/md";
import { CustomSpan, CustomHeading,ColorSpan } from '../Headings/Headings';



import offer from './../../img/offerimg.png';

const TodayOffer = () => {


    return (
        
        <T.TodaysOfferContainer data-aos="fade-up"
            data-aos-anchor-placement="top-center">
            <T.TodaysOfferLeft>
                <T.TodaysOfferTitle>Today's
                    <ColorSpan> Offers.</ColorSpan>
                </T.TodaysOfferTitle>
                <T.TodaysOfferText>It is a long established fact that a will distracted readable content of a page when looking the layout</T.TodaysOfferText>
                <T.TodaysOfferDesc>
                    <T.TodaysOfferText>
                        There are many variations passages of Lorem Ipsum available, but the majority have suffered alteration in form, by injected humour randomised words which don't look even slightly believable.
                    </T.TodaysOfferText>
                </T.TodaysOfferDesc>
                <T.TodaysOfferOrderRow>
                    <T.TodayOfferOrderLeft>
                        <CustomHeading weight={"700"} size="4rem" color={"#ff702a"}>
                            <CustomSpan weight={"700"} size="2rem" color={"#ff702a"}>$</CustomSpan>
                            89.00
                        </CustomHeading>
                        <CustomHeading weight={"500"} size="1.4rem" color={"#a09894"}><MdQueryBuilder /> 25 min away</CustomHeading>
                    </T.TodayOfferOrderLeft>
                    <T.TodayOfferOrderRight>
                        <T.TodaysOfferOrderBtn>Order Now</T.TodaysOfferOrderBtn>
                    </T.TodayOfferOrderRight>
                </T.TodaysOfferOrderRow>
            </T.TodaysOfferLeft>
            <T.TodaysOfferRight>
                <T.TodaysOfferRightImg src={offer} />
            </T.TodaysOfferRight>
        </T.TodaysOfferContainer>
        
    );
}
 
export default TodayOffer;