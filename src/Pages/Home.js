import VideoAd from "../Components/VideoAd/VideoAd";
import HomeHeader from "../Components/_HomePage/HomeHeader";
import TodaySpecial from "../Components/_HomePage/TodaySpecial";
import HeaderSecondary from './../Components/Header/HeaderSecondary';
import Menue from "../Components/_HomePage/Menue";
import { HomeSecondaryHeadingConainer } from './../Components/_HomePage/HomePageElements';
import TodayOffer from "../Components/_HomePage/TodayOffer";
import Carousel from "../Components/Carousel/Carousel";
import ToTopBtn from "../Components/Button/ToTopBtn";

import { IoMdHappy } from "react-icons/io";
import { IoFastFoodOutline } from "react-icons/io5";
import { RiExchangeDollarLine } from "react-icons/ri";

import useShowBtn  from './../Hooks/useShowBtn';


const Home = () => {

    const seconadryHeadingData = [
        {
            mainTitle: "Choose Food",
            secondTitle: "It is a long establed fact will distracted readable looking at layou. ",
            icon:<IoFastFoodOutline color="white"/>

        },
        {
            mainTitle: "Place Order",
            secondTitle: "It is a long establed fact will distracted readable looking at layou.",
            icon:<RiExchangeDollarLine color="white"/>

        },
        {
            mainTitle: "Receive & Go",
            secondTitle: "It is a long establed fact will distracted readable looking at layou.",
            icon:<IoMdHappy color="white"/>

        }
    ]

    const showBtn = useShowBtn();

    

    return (
        <>
            <HomeHeader />
            <TodaySpecial />
            <HomeSecondaryHeadingConainer>
                <HeaderSecondary borderRadius={"1rem"} padding={"2rem 10rem"} data={seconadryHeadingData} />
            </HomeSecondaryHeadingConainer>
            <Menue />
            <TodayOffer />
            <Carousel/>
            <VideoAd />
            <ToTopBtn show={showBtn} />
        </>
     );
}
 
export default Home;