import Header from "../Components/Header/Header";
import VideoAd from "../Components/VideoAd/VideoAd";
import HeaderSecondary from "../Components/Header/HeaderSecondary";
import ContactForm from "../Components/_Contact Page/ContactForm";

import { BiPhoneCall,BiMailSend } from "react-icons/bi";
import { MdLocationOn} from "react-icons/md";

import ToTopBtn from "../Components/Button/ToTopBtn";
import useShowBtn  from './../Hooks/useShowBtn';

const Cotact = () => {

    const seconadryHeadingData = [
        {
            mainTitle: "Call Now",
            secondTitle: "+00 863 578 774 ",
            thirdTitle:"+88 725 705 344",
            icon:<BiPhoneCall color="white"/>

        },
        {
            mainTitle: "Email Us",
            secondTitle: "support@gmail.com",
            thirdTitle:"hotte24@gmail.com",
            icon:<BiMailSend color="white"/>

        },
        {
            mainTitle: "Call Now",
            secondTitle: "Landline, from Huntingn",
            thirdTitle:"Beach,CA(state),USA",
            icon:<MdLocationOn color="white"/>

        }
    ]

    
    
    const showBtn = useShowBtn();
    
    return (
        <>
            <Header mainTitle={"Contact"} secondaryTitle={"Contact"} />
            <HeaderSecondary data={seconadryHeadingData} />
            <ContactForm/>
            <VideoAd />
            <ToTopBtn show={showBtn} />

        </>
     );
}
 
export default Cotact;