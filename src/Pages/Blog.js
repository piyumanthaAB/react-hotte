import Header from "../Components/Header/Header";
import HeaderSecondary from "../Components/Header/HeaderSecondary";
import VideoAd from "../Components/VideoAd/VideoAd";
import BlogCards from "../Components/_Blog Page/BlogCards";

import { BlogCardImg } from "../Components/_Blog Page/BlogPageElements";

import { IoMdHappy } from "react-icons/io";
import { IoFastFoodOutline } from "react-icons/io5";
import { RiExchangeDollarLine } from "react-icons/ri";

import img_1 from './../img/blog1.png'
import img_2 from './../img/blog2.png'
import img_3 from './../img/blog3.png'
import img_4 from './../img/blog4.png'
import img_5 from './../img/blog5.png'
import img_6 from './../img/blog6.png'
import img_7 from './../img/blog7.png'
import img_8 from './../img/blog8.png'
import img_9 from './../img/blog9.png'

import ToTopBtn from "../Components/Button/ToTopBtn";
import useShowBtn  from './../Hooks/useShowBtn';

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

    const blogPosts = [
        {
            image: <BlogCardImg src={img_1} />,
            title: "Here are the best online reservation systems.",
            details: "Lorem ipsum dolor sit amet consecter adipiscing elit dictum magna laoreet malesuada at neque.",
            date:"22 August 2022",
            id:1
        },
        {
            image: <BlogCardImg src={img_2} />,
            title: "You can integrate saved of customer information.",
            details: "Lorem ipsum dolor sit amet consecter adipiscing elit dictum magna laoreet malesuada at neque.",
            date:"22 August 2022",
            id:2
        },
        {
            image: <BlogCardImg src={img_3} />,
            title: "As you do your research, there are some key.",
            details: "Lorem ipsum dolor sit amet consecter adipiscing elit dictum magna laoreet malesuada at neque.",
            date:"22 August 2022",
            id:3
        },
        {
            image: <BlogCardImg src={img_4} />,
            title: "Here are the best online reservation systems.",
            details: "Lorem ipsum dolor sit amet consecter adipiscing elit dictum magna laoreet malesuada at neque.",
            date:"22 August 2022",
            id:4
        },
        {
            image: <BlogCardImg src={img_5} />,
            title: "You can integrate saved of customer information.",
            details: "Lorem ipsum dolor sit amet consecter adipiscing elit dictum magna laoreet malesuada at neque.",
            date:"22 August 2022",
            id:5
        },
        {
            image: <BlogCardImg src={img_6} />,
            title: "As you do your research, there are some key.",
            details: "Lorem ipsum dolor sit amet consecter adipiscing elit dictum magna laoreet malesuada at neque.",
            date:"22 August 2022",
            id:6
        },
        {
            image: <BlogCardImg src={img_7} />,
            title: "Here are the best online reservation systems.",
            details: "Lorem ipsum dolor sit amet consecter adipiscing elit dictum magna laoreet malesuada at neque.",
            date:"22 August 2022",
            id:7
        },
        {
            image: <BlogCardImg src={img_8} />,
            title: "You can integrate saved of customer information.",
            details: "Lorem ipsum dolor sit amet consecter adipiscing elit dictum magna laoreet malesuada at neque.",
            date:"22 August 2022",
            id:8
        },
        {
            image: <BlogCardImg src={img_9} />,
            title: "As you do your research, there are some key.",
            details: "Lorem ipsum dolor sit amet consecter adipiscing elit dictum magna laoreet malesuada at neque.",
            date:"22 August 2022",
            id:9
        }
    ]

    const showBtn = useShowBtn();

    return (
        <>
            <Header mainTitle={"Blog"} secondaryTitle={"Blog"} />
            <HeaderSecondary data={seconadryHeadingData} />
            <BlogCards blogs={blogPosts} />
            <VideoAd />
            <ToTopBtn show={showBtn} />
        </>
    );
}
 
export default Blog;