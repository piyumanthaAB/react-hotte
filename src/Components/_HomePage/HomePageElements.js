import styled from "styled-components";

import cover from './../../img/hotte_homebg.jpg';
import TodaysOfferCover from './../../img/offerbgimg.jpg';

//==================================== Header Elements Start =================================

export const HomeHeaderContainer = styled.div`
    min-height: 120vh;
    background-image: url(${cover});
    position: relative;
    background-position: center;
    background-size: cover;

    display: flex;
    justify-content: space-between;
    padding: 5rem 20rem;
    z-index: 0;


    &::before{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #000000e0;
        content: '';
        z-index: 1;
    }

`

export const HomeHeaderLeft = styled.div`
    flex: 0 1 48%;
    min-height: 50vh;
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
`;


export const HomeHeaderRight = styled.div`
    flex: 0 1 48%;
    min-height: 50vh;
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const HomeHeaderRightImg = styled.img`
    width: 80%;
    
`;
export const HomeHeaderBubbleImg = styled.img`
    width: 12%;
    position: absolute;
    top: 74%;
    left: 4%;
    z-index: 2;
    
`;

//==================================== Header Elements End =================================

//==================================== Today Special Elements Start =================================

export const TodaySpecialContainer = styled.div`
    min-height: 70vh;
    background-color: white;
    display: flex;
    padding: 5rem 20rem;
    justify-content: space-between;
`
export const TodaySpecialLeft = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0 1 48%;
`;
export const TodaySpecialLeftImg = styled.img`
    width: 55%;
`;

export const TodaySpecialRight = styled.div`
    flex: 0 1 48%;
    background-color: #feeee7;
    border-radius: 1rem;
    padding: 4rem ;
    text-align: center;
    /* display: flex; */
`;

export const TodaySpecialRightImgContainer = styled.div`
    display: flex;
    align-self: center;
    justify-content: center;
    width: 11%;
    align-items: center;
    padding: 1rem;
    background-color: white;
    border-radius: 1rem;
    transform: rotate(45deg);
    margin: 0 auto;
`

export const TodaySpecialRightImg = styled.img`
    width: 100%;
    
`;

export const TodaySpecialOrderContainer = styled.div`
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border-radius: 1rem;
    min-height: 15vh;
    padding: 2rem 1rem;
`
export const TodaySpecialPriceContainer = styled.div`
    flex: 0 1 30%;
    /* background-color: red; */
    min-height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1rem 0;
`
export const TodaySpecialQtyContainer=styled.div`
    width: 7rem;
    height: 7rem;
    background-color: #feeee7;
    min-height: 5vh;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    transform: rotate(45deg);
    
    
`
export const TodaySpecialQtyText = styled.div`
    display: flex;
    flex: 0 1 100%;
    justify-content: space-between;
    padding: 1rem;
    transform: rotate(45deg);
    
    & h4{
    transform: rotate(-90deg);

    }
    
`

export const Qty = styled.h2`
    transform: rotate(-90deg);
`

export const QtyAddRemove = styled.button`
    font-size: 2rem;
    background-color: transparent;
    border:none ;
    color: #494442;
    transform: rotate(-90deg);

    cursor: pointer;
    transition: all .3s;
    
    &:hover{
        color: #ff702a;
    }
    
`

export const TodaySpecialOrderBtnContainer = styled.div`
    flex: 0 1 30%;
    min-height: 5vh;
    border: none;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;

`;

export const OrderBtn = styled.button`
    font-size: 1.5rem;
    /* color: white; */
    background: #ff702a;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid transparent;
    outline: none;
    padding: 1rem 2rem;
    border-radius: 50rem;
    cursor: pointer;
    transition: all .3s;

    &:hover{
        border: 1px solid #ff702a;
        color: #ff702a;
        background-color: white;
    }
`



//==================================== Today Special Elements End =================================

//==================================== Secondary Heading Elements Start =================================

export const HomeSecondaryHeadingConainer = styled.div`
    padding: 2rem 20rem;
`

//==================================== Secondary Heading Elements End =================================


//==================================== Menue Elements Start =================================

export const MenueContainer = styled.div`
    width: 100%;
    /* min-height: 50vh; */
    /* max-height: 50%; */
    padding: 2rem 20rem;
`;

export const MenueTitleContainer = styled.div`
    width: 40%;
    text-align: center;
    min-height: 20vh;
    margin: 0 auto;
`;

export const MenueCardsContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    /* background-color: red; */
    padding: 5rem 2rem;

`;


export const MenueCard = styled.div`
    flex: 0 1 32%;
    background-color: #feeee7;
    border-radius: 1rem;
    margin: 1rem 0;
    padding: 1rem;
    position: relative;
    display: flex;
    flex-direction: column;
    /* min-height: 50vh; */


    
`;

export const MenueIngrediantsContainer = styled.div`
    width: 100%;
    border-radius: 1rem;
    background-image: linear-gradient(to right, #f65f26, #d41c18);
    padding: 3rem 2rem;
    
    opacity: 0;

    transition: all .3s;

    ${MenueCard}:hover & {
        opacity: .85;
    }
`


export const MenueImageContainer = styled.div`
    width: 100%;
    /* height: 40%; */
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    padding: 2rem;
    position: absolute;
    top: 0;
    left: 0;
`;

export const MenueImage = styled.img`
    width: 50%;
`;



export const MenueOrderContainer = styled.div`
    width: 100%;
    /* height: 20%; */
    border-radius: 1rem;
    background-color: white;
    /* display: flex; */
    padding: 2rem;
`;

export const MenueOrderBtnRow = styled.div`
    flex: 0 1 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const MenueOrderBtnRowLeft = styled.div`
    flex: 0 1 48%;
`

export const MenueOrderBtnRowRight = styled.div`
    flex: 0 1 48%;

`
export const MenueOrderBtn = styled.button`
    background-color:#feeee7 ;
    border-radius: 50rem;
    padding: 1rem 2rem;
    border:none ;
    font-weight: 600;
    cursor: pointer;
    transition: all .3s;

    &:hover{
        color: white;
        background-color: #fc802a;
    }
`

//==================================== Menue Elements End =================================


//==================================== Today's Offer Elements Start =================================

export const TodaysOfferContainer = styled.div`
    background-image: url(${TodaysOfferCover});
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 70vh;
    padding: 5rem 20rem;
    /* background-color: red; */
    display: flex;
`

export const TodaysOfferLeft = styled.div`
    flex: 0 1 48%;
`;

export const TodaysOfferRight = styled.div`
    flex: 0 1 48%;
    display: flex;
    padding: 4rem 0;
    justify-content: center;
    /* align-items: center; */

`;

export const TodaysOfferDesc = styled.div`
    flex: 1;
    margin: 2rem 0;
    padding: .5rem 0 .5rem 1.5rem;
    border-left: 2px solid #fc802a;
`
export const TodaysOfferOrderRow = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
`

export const TodayOfferOrderLeft = styled.div``;

export const TodayOfferOrderRight = styled.div`
    justify-content: center;
    display: flex;
    align-items: center;
`;

export const TodaysOfferOrderBtn = styled.button`
    font-size: 1.4;
    padding: 1rem 2rem;
    border-radius: 50rem;
    background-color: #ff702a;
    color: white;
    font-weight: 600;
    border: 1px solid transparent;
    cursor: pointer;
    transition: all .3s;

    &:hover{
        background-color: transparent;
        border: 1px solid #ff702a;
    }

`

export const TodaysOfferRightImg = styled.img`
    width: 40%;
    height: auto;
    align-self: baseline;
`

//==================================== Today's Offer Elements End =================================