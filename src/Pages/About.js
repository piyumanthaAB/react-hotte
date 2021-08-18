import { useState } from 'react';
import { CustomSpan } from './../Components/Headings/Headings';
import Header from "../Components/Header/Header";
import VideoAd from "../Components/VideoAd/VideoAd";
import HeaderSecondary from "../Components/Header/HeaderSecondary";
import AboutStory from "../Components/_About Page/AboutStory";
import AboutChefs from '../Components/_About Page/AboutChefs';

import { IoMdHappy } from "react-icons/io";
import { IoFastFoodOutline } from "react-icons/io5";
import { RiExchangeDollarLine } from "react-icons/ri";

import chef_1 from './../img/chefs1.png';
import chef_2 from './../img/chefs2.png';
import chef_3 from './../img/chefs3.png';
import chef_4 from './../img/chefs4.png';
import chef_5 from './../img/chefs5.png';
import chef_6 from './../img/chefs6.png';

import { AboutChefsImg } from './../Components/_About Page/AboutPageElements';
import ToTopBtn from "../Components/Button/ToTopBtn";

import useShowBtn  from './../Hooks/useShowBtn';

const About = () => {

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

    

    const [Title, setTitle] = useState("");
    const [P1, setP1] = useState("");
    const [P2, setP2] = useState("");


    const handleMission = () => {
        setTitle(<>Hot<CustomSpan size={"4.2rem"} weight={"bold"} color={"#ff702a"}>te</CustomSpan> have 23+ years of experience.</>);
        setP1(
            <>Lorem ipsum dolor sit amet, consectetuer adipiscing elit dictum magna. Sed laoreet aliquam leo.
                Ut tellus dolor, dapibus eget cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat.</>
        );
        setP2(
            <>Lorem ipsum dolor sit amet, consectetuer adipiscing elit dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat turpis.
                            Integer rutrum ante eu lacus. Vestibulum libero nisl, porta vel scelerisque eget, malesuada at, neque.</>
        )
    }

    const handleStory = () => {
        setTitle(<>Hot<CustomSpan size={"4.2rem"} weight={"bold"} color={"#ff702a"}>te</CustomSpan> have 30+ years of experience.</>);
        setP1("");
        setP2("");
    }

    const handleVision = () => {
        setTitle("");
        setP1("");
        setP2("");
    }

    const chefsData = [
        {
            name: "Sanlia Weiss",
            p1: "Ferment of libero osit amet conse tetuer adiing elit dictum magna laoreet aliquam leo. Ut tellus dolor dapibus eget cursus eleifend.",
            p2: "Ferment of libero osit amet conse tetuer adiing elit dictum magna laoreet aliquam leo. Ut tellus dolor dapibus eget cursus eleifend.",
            image: <AboutChefsImg src={ chef_1}/>,
            url_fb: "https://facebook.com",
            url_pi: "https://www.pinterest.com",
            url_dr: "https://dribbble.com",
            url_tw:"https://twitter.com/?lang=en"
        },
        {
            name: "Maren Britt",
            p1: "Ferment of libero osit amet conse tetuer adiing elit dictum magna laoreet aliquam leo. Ut tellus dolor dapibus eget cursus eleifend.",
            p2:"Ferment of libero osit amet conse tetuer adiing elit dictum magna laoreet aliquam leo. Ut tellus dolor dapibus eget cursus eleifend.",
            image: <AboutChefsImg src={ chef_2}/>,
            url_fb: "https://facebook.com",
            url_pi: "https://www.pinterest.com",
            url_dr: "https://dribbble.com",
            url_tw:"https://twitter.com/?lang=en"
        },
        {
            name: "Sanlia Weiss",
            p1: "Ferment of libero osit amet conse tetuer adiing elit dictum magna laoreet aliquam leo. Ut tellus dolor dapibus eget cursus eleifend.",
            p2:"Ferment of libero osit amet conse tetuer adiing elit dictum magna laoreet aliquam leo. Ut tellus dolor dapibus eget cursus eleifend.",
            image: <AboutChefsImg src={ chef_3}/>,
            url_fb: "https://facebook.com",
            url_pi: "https://www.pinterest.com",
            url_dr: "https://dribbble.com",
            url_tw:"https://twitter.com/?lang=en"
        },
        {
            name: "Sanlia Weiss",
            p1: "Ferment of libero osit amet conse tetuer adiing elit dictum magna laoreet aliquam leo. Ut tellus dolor dapibus eget cursus eleifend.",
            p2:"Ferment of libero osit amet conse tetuer adiing elit dictum magna laoreet aliquam leo. Ut tellus dolor dapibus eget cursus eleifend.",
            image: <AboutChefsImg src={ chef_4}/>,
            url_fb: "https://facebook.com",
            url_pi: "https://www.pinterest.com",
            url_dr: "https://dribbble.com",
            url_tw:"https://twitter.com/?lang=en"
        },
        {
            name: "Sanlia Weiss",
            p1: "Ferment of libero osit amet conse tetuer adiing elit dictum magna laoreet aliquam leo. Ut tellus dolor dapibus eget cursus eleifend.",
            p2:"Ferment of libero osit amet conse tetuer adiing elit dictum magna laoreet aliquam leo. Ut tellus dolor dapibus eget cursus eleifend.",
            image: <AboutChefsImg src={ chef_5}/>,
            url_fb: "https://facebook.com",
            url_pi: "https://www.pinterest.com",
            url_dr: "https://dribbble.com",
            url_tw:"https://twitter.com/?lang=en"
        },
        {
            name: "Sanlia Weiss",
            p1: "Ferment of libero osit amet conse tetuer adiing elit dictum magna laoreet aliquam leo. Ut tellus dolor dapibus eget cursus eleifend.",
            p2:"Ferment of libero osit amet conse tetuer adiing elit dictum magna laoreet aliquam leo. Ut tellus dolor dapibus eget cursus eleifend.",
            image: <AboutChefsImg src={ chef_6}/>,
            url_fb: "https://facebook.com",
            url_pi: "https://www.pinterest.com",
            url_dr: "https://dribbble.com",
            url_tw:"https://twitter.com/?lang=en"
        }
    ]

    const showBtn = useShowBtn();

    return (
        <>
            <Header mainTitle={"About"} secondaryTitle={"About"} />
            <HeaderSecondary data={seconadryHeadingData} />
            <AboutStory Title={Title} P1={P1} P2={P2} handleMission={handleMission} handleStory={ handleStory} handleVision={handleVision} />
            <AboutChefs data={chefsData} />
            <VideoAd />
            <ToTopBtn show={showBtn} />
        </>    
     );
}
 
export default About;