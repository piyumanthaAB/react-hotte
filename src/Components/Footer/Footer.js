import { useState,useEffect } from 'react';

import * as F from './FooterElements';
import { CustomHeading } from '../Headings/Headings';

import LogoSrc from '../../img/logo.png';
import Underline from '../../img/border.png';

import { FaFacebookF,FaPinterestP,FaDribbble,FaTwitter,FaPhoneAlt,FaMailBulk } from "react-icons/fa";
import { MdEditLocation} from "react-icons/md";

const Footer = () => {
    const d = new Date();

    const [day, setDay] = useState('');

    setInterval(() => {
        const d = new Date();
        
        switch (d.getDay()) {
            case 0:
                setDay('sunday');
                break;
            case 1:
                setDay('monday');
                break;
            case 2:
                setDay('tuesday');
                break;
            case 3:
                setDay('wednesday');
                break;
            case 4:
                setDay('thursday');
                break;
            case 5:
                setDay('friday');
                break;
            case 6:
                setDay('saturday');
                break;
        
            default:
                break;
        }
    }, 1000);

    

    return (
        <>
            <F.FooterContainer>
                
                <F.FooterMain>
                
                    <F.FooterSocialMedia>
                        <F.FooterLogoContainer>
                            <F.FooterLogo src={LogoSrc} />
                        </F.FooterLogoContainer>
                        <F.FooterP color={'#494442'}>
                            If you are going to use a passage of need to be sure there isn't anything hidden in the middle text.
                        </F.FooterP>
                        <F.FooterP color={'#ff702a'}>
                            If you are going to use a passage of need to be sure there isn't
                        </F.FooterP>
                        <F.FooterIconsContainer>
                            <F.FooterIcon rotate={"true"} size={"1.5rem"} onClick={()=>window.location="https://facebook.com"} color={"#d4e2f8"}>
                                <FaFacebookF color={ "#115dd6"}/>
                            </F.FooterIcon>
                            <F.FooterIcon rotate={"true"} size={"1.5rem"} onClick={()=>window.location="https://www.pinterest.com/"} color={"#ffdfe1"}>
                                <FaPinterestP color={"#ec2734" }/>
                            </F.FooterIcon>
                            <F.FooterIcon rotate={"true"} size={"1.5rem"} onClick={()=>window.location="https://dribbble.com/"} color={"#f8dae5"}>
                                <FaDribbble color={ "#ec5f95"}/>
                            </F.FooterIcon>
                            <F.FooterIcon rotate={"true"} size={"1.5rem"} onClick={()=>window.location="https://twitter.com/?lang=en"} color={"#cfedff"}>
                                <FaTwitter color={"#1da1f2" }/>
                            </F.FooterIcon>
                        </F.FooterIconsContainer>
                    </F.FooterSocialMedia>

                    <F.FooterContactUs>
                        
                        <CustomHeading color={"#0a0626"} size={"2rem"} weight={"500"} space={null} >
                            Contact Us
                        </CustomHeading>

                        <F.FooterContactUsUnderline src={Underline }/>

                        <F.FooterContactUsCard>
                            <F.FooterIcon size={"2.2rem"} color={"#ffdfe1"}>
                                <FaPhoneAlt color={ "#ff702a"}/>
                            </F.FooterIcon>
                            <F.FooterContactUsDetailsWrapper>
                                <F.FooterContactUsDetails>
                                    +880 659 468
                                </F.FooterContactUsDetails>
                                <F.FooterContactUsDetails>
                                    +02 697 86456
                                </F.FooterContactUsDetails>
                            </F.FooterContactUsDetailsWrapper>
                            
                            
                        </F.FooterContactUsCard>

                        <F.FooterContactUsCard>
                            <F.FooterIcon size={"2.2rem"} color={"#ffdfe1"}>
                                    <FaMailBulk color={ "#ff702a"}/>
                            </F.FooterIcon>
                            <F.FooterContactUsDetailsWrapper>
                                <F.FooterContactUsDetails>
                                    support@gmail.com
                                </F.FooterContactUsDetails>
                                <F.FooterContactUsDetails>
                                    hotte24@gmail.com
                                </F.FooterContactUsDetails>
                            </F.FooterContactUsDetailsWrapper>
                        </F.FooterContactUsCard>

                        <F.FooterContactUsCard>
                            <F.FooterIcon size={"2.2rem"} color={"#ffdfe1"}>
                                <MdEditLocation color={ "#ff702a"}/>
                            </F.FooterIcon>
                            <F.FooterContactUsDetailsWrapper>
                                <F.FooterContactUsDetails>
                                    855 Road, Brooklyn Street New York 
                                </F.FooterContactUsDetails>
                                <F.FooterContactUsDetails>
                                    600, Baraboo, Wisconsin(WI)
                                </F.FooterContactUsDetails>
                            </F.FooterContactUsDetailsWrapper>
                        </F.FooterContactUsCard>
                            
                    </F.FooterContactUs>
                    
                    <F.FooterOpenHours>
                        <CustomHeading color={"#0a0626"} size={"2.5rem"} weight={"500"} space={null} >
                            Opening hours:
                        </CustomHeading>

                        <F.FooterOpenHrsRow select={(day === 'sunday') ? true:false}>
                            <F.FooterP>Sunday</F.FooterP>
                            <F.FooterP>---------------</F.FooterP>
                            <CustomHeading color={"#ff1800"} size={"1.4rem"} weight={"500"} space={null} >
                            Closing Day
                            </CustomHeading>
                        </F.FooterOpenHrsRow>
                        
                        <F.FooterOpenHrsRow select={(day === 'monday') ? true:false}>
                            <F.FooterP>Monday</F.FooterP>
                            <F.FooterP>---------------</F.FooterP>
                            <F.FooterP>
                                8AM - 10PM
                            </F.FooterP>
                        </F.FooterOpenHrsRow>
                        
                        <F.FooterOpenHrsRow select={(day === 'tuesday') ? true:false}>
                            <F.FooterP>Tuesday</F.FooterP>
                            <F.FooterP>---------------</F.FooterP>
                            <F.FooterP>
                                8AM - 10PM
                            </F.FooterP>
                        </F.FooterOpenHrsRow>
                        
                        <F.FooterOpenHrsRow select={(day === 'wednesday') ? true:false}>
                            <F.FooterP>Wednesday</F.FooterP>
                            <F.FooterP>---------------</F.FooterP>
                            <F.FooterP>
                                8AM - 10PM
                            </F.FooterP>
                        </F.FooterOpenHrsRow>
                        
                        <F.FooterOpenHrsRow select={(day === 'thursday') ? true:false}>
                            <F.FooterP>Thursday</F.FooterP>
                            <F.FooterP>---------------</F.FooterP>
                            <F.FooterP>
                                8AM - 10PM
                            </F.FooterP>
                        </F.FooterOpenHrsRow>
                        
                        <F.FooterOpenHrsRow select={(day === 'friday') ? true:false}>
                            <F.FooterP>Friday</F.FooterP>
                            <F.FooterP>---------------</F.FooterP>
                            <F.FooterP>
                                8AM - 10PM
                            </F.FooterP>
                        </F.FooterOpenHrsRow>
                        
                        <F.FooterOpenHrsRow select={(day === 'saturday') ? true:false}>
                            <F.FooterP>Saturday</F.FooterP>
                            <F.FooterP>---------------</F.FooterP>
                            <F.FooterP>
                                8AM - 10PM
                            </F.FooterP>
                        </F.FooterOpenHrsRow>

                    </F.FooterOpenHours>

                </F.FooterMain>




                <F.FooterSecondary>
                    <F.FooterCopyRight>
                        Copyright {d.getFullYear()}. All right Reserved
                    </F.FooterCopyRight>
                    <F.FooterTerms>
                        <F.FooterLink to='/error'>
                            Terms & Conditions
                        </F.FooterLink>
                        <F.FooterSpan>|</F.FooterSpan>
                        <F.FooterLink to='/error'>
                            Privacy Policy
                        </F.FooterLink>
                        
                    </F.FooterTerms>
                </F.FooterSecondary>
          
            </F.FooterContainer>
        </>
     );
}
 
export default Footer;