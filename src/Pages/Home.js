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

import menue_1 from './../img/food1.png'
import menue_2 from './../img/food2.png'
import menue_3 from './../img/food3.png'
import menue_4 from './../img/food4.png'
import menue_5 from './../img/food5.png'
import menue_6 from './../img/food6.png'

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

    const todayMenue = [
        {
            foodItem: "Chicken Burger",
            price: "89.00",
            img: menue_1,
            timeToDeliver: "25 min",
            ingrediants: ['½ tbsp olive oil', '1 onion, peeled and finely chopped', '1 tsp mixed dried herbs', '1 egg, beaten', '4 slices mature Cheddar (optional)']
        },
        {
            foodItem: "Special Beef Burger",
            price: "95.00",
            img: menue_2,
            timeToDeliver: "25 min",
            ingrediants: ['½ tbsp olive oil', '1 onion, peeled and finely chopped', '1 tsp mixed dried herbs', '1 egg, beaten', '4 slices mature Cheddar (optional)']
        },
        {
            foodItem: "Chicken Fry Pack",
            price: "74.00",
            img: menue_3,
            timeToDeliver: "25 min",
            ingrediants: ['½ tbsp olive oil', '1 onion, peeled and finely chopped', '1 tsp mixed dried herbs', '1 egg, beaten', '4 slices mature Cheddar (optional)']
        },
        {
            foodItem: "Hotte Sendwise",
            price: "25.00",
            img: menue_4,
            timeToDeliver: "25 min",
            ingrediants: ['½ tbsp olive oil', '1 onion, peeled and finely chopped', '1 tsp mixed dried herbs', '1 egg, beaten', '4 slices mature Cheddar (optional)']
        },
        {
            foodItem: "Vegetable Roll",
            price: "18.00",
            img: menue_5,
            timeToDeliver: "25 min",
            ingrediants: ['½ tbsp olive oil', '1 onion, peeled and finely chopped', '1 tsp mixed dried herbs', '1 egg, beaten', '4 slices mature Cheddar (optional)']
        },
        {
            foodItem: "French Fry",
            price: "16.00",
            img: menue_6,
            timeToDeliver: "25 min",
            ingrediants: ['½ tbsp olive oil', '1 onion, peeled and finely chopped', '1 tsp mixed dried herbs', '1 egg, beaten', '4 slices mature Cheddar (optional)']
        }
    ]

    return (
        <>
            <HomeHeader />
            <TodaySpecial />
            <HomeSecondaryHeadingConainer>
                <HeaderSecondary  data={seconadryHeadingData} />
            </HomeSecondaryHeadingConainer>
            <Menue data={todayMenue} />
            <TodayOffer />
            <Carousel/>
            <VideoAd />
            <ToTopBtn show={showBtn} />
        </>
     );
}
 
export default Home;