import Header from "../Components/Header/Header";
import VideoAd from "../Components/VideoAd/VideoAd";
import HeaderSecondary from "../Components/Header/HeaderSecondary";


import { BiPhoneCall,BiMailSend } from "react-icons/bi";
import { MdLocationOn} from "react-icons/md";

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

    const url='';
    

    return (
        <>
            <Header mainTitle={"Contact"} secondaryTitle={"Contact"} />
            <HeaderSecondary data={seconadryHeadingData} />
            
            <VideoAd />
        </>
     );
}
 
export default Cotact;