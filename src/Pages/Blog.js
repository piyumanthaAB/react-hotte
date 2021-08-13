import Header from "../Components/Header/Header";
import HeaderSecondary from "../Components/Header/HeaderSecondary";
import VideoAd from "../Components/VideoAd/VideoAd";

import { IoMdHappy } from "react-icons/io";
import { IoFastFoodOutline } from "react-icons/io5";
import { RiExchangeDollarLine } from "react-icons/ri";

const Blog = () => {
    
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
    return (
        <>
            <Header mainTitle={"Blog"} secondaryTitle={"Blog"} />
            <HeaderSecondary data={ seconadryHeadingData}/>
            <VideoAd />
        </>
    );
}
 
export default Blog;