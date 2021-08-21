import styled from "styled-components";
import { Link as ScrollLink } from 'react-scroll';
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

    /* styled for screen size 1400px or less */
    @media screen and (max-width:1400px){
        padding: 5rem 15rem;
    }
   
    /* styled for screen size 1200px or less */
    @media screen and (max-width:1200px){
        padding: 5rem 8rem;
        /* max-height: 120vh; */

    }
    /* styled for screen size 1200px or less */
    @media screen and (max-width:1000px){
        min-height: unset;
        /* max-height: 120vh; */

    }
    /* styled for screen size 500px or less */
    @media screen and (max-width:500px){
        padding: 5rem 5rem;

    }
    /* styled for screen size 400px or less */
    @media screen and (max-width:400px){
        padding: 5rem 3rem;

    }

`

export const HomeHeaderLeft = styled.div`
    flex: 0 1 48%;
    /* min-height: 50vh; */
    position: relative;
    z-index: 2;
    /* display: flex; */
    /* flex-direction: column; */
    /* justify-content: center; */
    padding: 15rem 0 0;
    @media screen and (max-width:760px){
        flex: 0 1 100%;
        padding: 12rem 0 0;

    }
    
`;


export const HomeHeaderRight = styled.div`
    flex: 0 1 48%;
    min-height: 50vh;
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: center;

    align-items: center;
    @media screen and (max-width:760px){
        flex: 0 1 0%;
    }
`;

export const HomeHeaderRightImg = styled.img`
    width: 80%;

    @media screen and (max-width:1200px){
        width: 70%;
    }

    @media screen and (max-width:760px){
        display: none;
    }
    
`;
export const HomeHeaderBubbleImg = styled.img`
    width: 12%;
    position: absolute;
    top: 63%;
    left: 3%;
    z-index: 2;

    @media screen and (max-width:1400px){
        top: 73%;
        left: 3%;


    }

    @media screen and (max-width:1000px){
        display: none;

    }
    
`;
export const HomeHeaderTitle = styled.p`
    font-size: 8.7rem;
    color: white;
    font-weight: 700;
    line-height: 1.2;
    padding: 1rem 0;



    @media screen and (max-width:1200px){
        font-size: 6.7rem;

    }
    @media screen and (max-width:1000px){
        font-size: 5.7rem;

    }

    @media screen and (max-width:760px){
        font-size: 7.7rem;
    }
    @media screen and (max-width:600px){
        font-size: 5.7rem;
    }

    @media screen and (max-width:400px){
        font-size: 4.7rem;
    }
`
export const HomeHeaderSubText = styled.p`
    font-weight: 400;
    font-size: 1.6rem;
    color: white;
    padding: 2rem 0;

    @media screen and (max-width:1200px){
        font-size: 1.4rem;

    }
    @media screen and (max-width:1000px){
        font-size: 1.2rem;

    }

    @media screen and (max-width:400px){
        font-size: 1.1rem;
    }
`

export const HomeHeaderColoredSpan = styled.span`
    color: #ec5a12;
`
export const HomeHeaderUnderlinedSpan = styled.span`
    font-weight: 300;
    border-bottom: 2px solid #ec5a12;
    
`

export const HomeHeaderLinkBtn = styled(ScrollLink)`
    max-width: max-content;
    padding: .8rem 2.2rem;
    border-radius: 50rem;
    border: 2px solid transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: white;
    font-size: 1.5rem;
    text-decoration: none;
    background-image: linear-gradient(to right,#fb6828, #cc0e15);
    backface-visibility: hidden;

    transition: all .2s;

    &:hover{
        background-image:linear-gradient(to right,transparent, transparent) ;
        border: 2px solid #fb6828;
        color: #fb6828;
    }

    @media screen and (max-width:1000px){
        font-size: 1.2rem;
    }
    @media screen and (max-width:600px){
        font-size: 1rem;
    }
`;

//==================================== Header Elements End =================================

//==================================== Today Special Elements Start =================================

export const TodaySpecialContainer = styled.div`
    min-height: 70vh;
    background-color: white;
    /* background-color: yellow; */
    display: flex;
    padding: 5rem 20rem;
    justify-content: space-between;

     /* styled for screen size 1400px or less */
     @media screen and (max-width:1400px){
        padding: 5rem 10rem;
    }
   
    /* styled for screen size 1200px or less */
    @media screen and (max-width:1200px){
        padding: 5rem 7rem;
        /* max-height: 120vh; */

    }
    @media screen and (max-width:900px){
        padding: 5rem 5rem;
        /* max-height: 120vh; */

    }

    @media screen and (max-width:760px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media screen and (max-width:500px){
        padding: 5rem 2rem;


    }
`
export const TodaySpecialLeft = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0 1 48%;
    @media screen and (max-width:1100px){
        flex: 0 1 40%;

    }
    
`;
export const TodaySpecialLeftImg = styled.img`
    width: 55%;
    @media screen and (max-width:1200px){
        width: 70%;

    }
    @media screen and (max-width:1200px){
        width: 40%;

    }
    

`;

export const TodaySpecialRight = styled.div`
    flex: 0 1 48%;
    background-color: #feeee7;
    border-radius: 1rem;
    padding: 4rem ;
    text-align: center;
    /* display: flex; */
    @media screen and (max-width:1200px){
        padding: 2rem;
        /* max-height: 120vh; */
    }

    @media screen and (max-width:1100px){
        flex: 0 1 58%;

    }
    @media screen and (max-width:760px){
        width: 70%;

    }
    @media screen and (max-width:600px){
        width: 90%;

    }

    @media screen and (max-width:500px){
        width: 100%;

    }
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

    @media screen and (max-width:500px){
        width: 18%;

    }
`

export const TodaySpecialRightImg = styled.img`
    width: 100%;
    
`;

export const TodaySpecialTitle = styled.p`
    font-weight: 700;
    font-size: 4.4rem;
    color: #0a0626;
    line-height: 1.2;
    margin: 2rem 0;

    @media screen and (max-width:1200px){
       font-size: 3.9rem;
    }
    @media screen and (max-width:900px){
       font-size: 3.3rem;
    }
    @media screen and (max-width:500px){
       font-size: 2.8rem;
    }

    @media screen and (max-width:400px){
       font-size: 2.5rem;
    }


`
export const TodaySpecialDesc = styled.p`
    font-weight: 500;
    font-size: 1.4rem;
    color: #494442;
    margin: 2rem 0;

    @media screen and (max-width:1200px){
       font-size: 1.3rem;
    }
    @media screen and (max-width:900px){
       font-size: 1.1rem;
    }
    @media screen and (max-width:500px){
       font-size: 1rem;
    }

`

export const TodaySpecialOrderContainer = styled.div`
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border-radius: 1rem;
    min-height: 15vh;
    padding: 2rem 1rem;

    @media screen and (max-width:1200px){
        padding:  1rem 1rem 1.5rem;
    }

    @media screen and (max-width:400px){
        flex-direction: column;
        justify-content: center;
        align-items: center;


    }
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
export const TodaySpecialPrice = styled.p`
    color: #ff702a;
    font-weight: 700;
    font-size: 3rem;
    @media screen and (max-width:1200px){
       font-size: 2rem;
    }
    @media screen and (max-width:500px){
       font-size:1.5rem;
    }

    @media screen and (max-width:400px){
       font-size: 2rem;
    }
    
`

export const TodaySpecialPrice_$ = styled.span`
    color: #ff702a;
    font-weight: 700;
    font-size: 2.3rem;
    @media screen and (max-width:1200px){
       font-size: 1.7rem;
    }
    @media screen and (max-width:500px){
       font-size: 1.3rem;
    }

    @media screen and (max-width:400px){
       font-size: 1.5rem;
    }
    
`

export const TodaySpecialPriceSubText = styled.p`
    font-size: 1.3rem;
    font-weight: 300;
    color: #494442;
    @media screen and (max-width:1200px){
       font-size: 1.1rem;
    }
    @media screen and (max-width:500px){
       font-size: 1rem;
    }
    
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

    @media screen and (max-width:500px){
        width: 5rem;
        height: 5rem;
    }

    @media screen and (max-width:400px){
        margin-bottom: 2rem;
        width: 6rem;
        height: 6rem;
    }
    
    
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
    @media screen and (max-width:500px){
       font-size: 1.5rem;
    }
    @media screen and (max-width:400px){
       font-size: 2rem;
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

    @media screen and (max-width:1200px){
        flex: 0 1 35%;

    }

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

    @media screen and (max-width:900px){
       font-size: 1.3rem;
    }
    @media screen and (max-width:500px){
       font-size: 1rem;
    }
    @media screen and (max-width:400px){
       font-size: 1.1rem;
    }
`



//==================================== Today Special Elements End =================================

//==================================== Secondary Heading Elements Start =================================

export const HomeSecondaryHeadingConainer = styled.div`
    padding: 2rem 20rem;
    /* background-color: red; */

    @media screen and (max-width:1400px){
        padding: 5rem 10rem;
    }

     /* styled for screen size 1200px or less */
     @media screen and (max-width:1200px){
        padding: 5rem 7rem;
        /* max-height: 120vh; */

    }
    @media screen and (max-width:900px){
        padding: 1rem 5rem;
        

    }
    @media screen and (max-width:760px){
        padding: 1rem 5rem;
        
        display: flex; 
        justify-content: center;
        align-items: center;

    }
    @media screen and (max-width:500px){
        padding: 1rem 2rem;

    }
`

//==================================== Secondary Heading Elements End =================================


//==================================== Menue Elements Start =================================

export const MenueContainer = styled.div`
    width: 100%;
    /* min-height: 50vh; */
    /* max-height: 50%; */
    padding: 2rem 20rem;

    @media screen and (max-width:1400px){
        padding: 5rem 10rem;
    }
    @media screen and (max-width:900px){
        padding: 1rem 5rem;
        

    }
    @media screen and (max-width:760px){
        padding: 1rem 5rem;
        
        /* display: flex; 
        justify-content: center;
        align-items: center;
        flex-direction: column; */

    }
    @media screen and (max-width:500px){
        padding: 1rem 2rem;

    }
`;

export const MenueTitleContainer = styled.div`
    width: 40%;
    text-align: center;
    min-height: 20vh;
    margin: 0 auto;

    @media screen and (max-width:1000px){
       width: 50%;
    }
    @media screen and (max-width:760px){
       width: 60%;
    }
    @media screen and (max-width:600px){
       width: 70%;
    }
    @media screen and (max-width:600px){
       width: 80%;
    }
    
`;

export const MenueTitle = styled.p`
    font-size: 3.8rem;
    line-height: 1.2;
    font-weight: 700;
    color: #0a0626;
    @media screen and (max-width:600px){
        font-size: 3.3rem;
    }
    @media screen and (max-width:400px){
        font-size: 2.8rem;
    }
`

export const MenueTitleDesc = styled.p`
    font-size: 1.4rem;
    color: #494442;
    margin: 2rem 0;

    @media screen and (max-width:600px){
        font-size: 1.2rem;
    }
    @media screen and (max-width:400px){
        font-size: 1.1rem;
    }

`

export const MenueCardsContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    /* background-color: red; */
    padding: 5rem 2rem;

    @media screen and (max-width:760px){
        display: flex; 
        justify-content: center;
        align-items: center;
        flex-direction: column;

    }

    @media screen and (max-width:500px){
        padding: 5rem 0rem;
    }
    @media screen and (max-width:400px){
        /* width: 100%; */
    }
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

    @media screen and (max-width:1200px){
        flex: 0 1 48%;
    }
    @media screen and (max-width:760px){
        width: 70%;
    }
    @media screen and (max-width:600px){
        width: 85%;
    }
    @media screen and (max-width:500px){
        width: 95%;
    }
    @media screen and (max-width:400px){
        width: 100%;
    }
    
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

    @media screen and (max-width:760px){
        opacity: .75;
    }
`
export const MenueIngrediantsTitle = styled.p`
    font-size: 2.4rem;
    font-weight: bold;
    color: white;
`
export const MenueIngrediantsItems = styled.p`
    font-size: 1.4rem;
    font-weight: normal;
    color: white;
    margin: .3rem 0;
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
    /* opacity: 0; */
`;



export const MenueOrderContainer = styled.div`
    width: 100%;
    /* height: 20%; */
    border-radius: 1rem;
    background-color: white;
    /* display: flex; */
    padding: 2rem;
    margin: 2rem 0 0;
`;

export const MenueOrderBtnRow = styled.div`
    flex: 0 1 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const MenueOrderRowTitle = styled.p`
    color: #0a0626;
    font-size: 2.4rem;
    font-weight: 700;
`

export const MenueOrderPrice = styled.p`
    color: #ff702a;
    font-weight: 700;
    font-size: 3rem;
    @media screen and (max-width:1200px){
       font-size: 2.5rem;
    }
    @media screen and (max-width:500px){
       font-size:2rem;
    }

    @media screen and (max-width:400px){
       font-size: 2.2rem;
    }
    
`

export const MenueOrderPrice_$ = styled.span`
    color: #ff702a;
    font-weight: 700;
    font-size: 2.3rem;
    @media screen and (max-width:1200px){
       font-size: 1.7rem;
    }
    @media screen and (max-width:500px){
       font-size: 1.3rem;
    }

    @media screen and (max-width:400px){
       font-size: 1.5rem;
    }
    
`

export const MenueOrderPriceSubText = styled.p`
    font-size: 1.3rem;
    font-weight: 300;
    color: #494442;
    @media screen and (max-width:1200px){
       font-size: 1.1rem;
    }
    @media screen and (max-width:500px){
       font-size: 1rem;
    }
    
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

    @media screen and (max-width:400px){
       font-size: 1.2rem;
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