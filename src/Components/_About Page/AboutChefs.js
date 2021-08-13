import { CustomHeading,CustomSpan } from '../Headings/Headings';
import * as A from './AboutPageElements';
import { FooterIcon,FooterIconsContainer} from './../Footer/FooterElements';

import chef_1 from './../../img/chefs1.png';

import { FaFacebookF,FaPinterestP,FaDribbble,FaTwitter } from "react-icons/fa";

const AboutChefs = (props) => {
    return (
        <>
            <A.AboutChefsContainer>
                

                <A.AboutChefsTitle>
                    <CustomHeading size={"3.8rem"} weight={"bold"} >
                        Special & Awarded Chefs of {' '}
                        <CustomSpan size={"3.8rem"}  weight={"bold"} color={"#ff702a"} >Hotte</CustomSpan> 
                    </CustomHeading>
                    <CustomHeading size={"1.5rem"} margin={"1rem 0"}>
                    There are many variations of passages of Lorem Ipsum available but majority have suffered alteration injected humour
                    </CustomHeading>
                </A.AboutChefsTitle>

                <A.AboutChefsCardContainer>
                    
                    <A.AboutChefsCardRow>
                        
                    {
                        props.data.map((chef, idx) => {
                            return (
                                <>
                                <A.AboutChefsCard key={idx}>
                            
                            <A.AboutChefsCardImgContainer>
                                            
                                            <>{chef.image}</>
                            </A.AboutChefsCardImgContainer>

                            <A.AboutChefsCardRight>
                                <A.AboutChefsName>Sanlia Weiss</A.AboutChefsName>
                                <CustomHeading size={"1.3rem"} weight={"600"} >Awarded Chef</CustomHeading>
                                <CustomHeading size={"1.3rem"} color={"#494442"} margin={".8rem 0  "} >
                                    Ferment of libero osit amet conse tetuer adiing elit dictum magna laoreet aliquam leo.
                                    Ut tellus dolor dapibus eget cursus eleifend.
                                </CustomHeading>
                                <CustomHeading size={"1.3rem"} color={"#494442"} margin={".8rem 0  "} >
                                    Ferment of libero osit amet conse tetuer adiing elit dictum magna laoreet aliquam leo.
                                    Ut tellus dolor dapibus eget cursus eleifend.
                                </CustomHeading>
                                <FooterIconsContainer>
                                    <FooterIcon rotate={"true"} size={"1.5rem"} onClick={()=>window.location="https://facebook.com"} color={"#d4e2f8"}>
                                        <FaFacebookF color={ "#115dd6"}/>
                                    </FooterIcon>
                                    <FooterIcon rotate={"true"} size={"1.5rem"} onClick={()=>window.location="https://www.pinterest.com/"} color={"#ffdfe1"}>
                                        <FaPinterestP color={"#ec2734" }/>
                                    </FooterIcon>
                                    <FooterIcon rotate={"true"} size={"1.5rem"} onClick={()=>window.location="https://dribbble.com/"} color={"#f8dae5"}>
                                        <FaDribbble color={ "#ec5f95"}/>
                                    </FooterIcon>
                                    <FooterIcon rotate={"true"} size={"1.5rem"} onClick={()=>window.location="https://twitter.com/?lang=en"} color={"#cfedff"}>
                                        <FaTwitter color={"#1da1f2" }/>
                                    </FooterIcon>
                                </FooterIconsContainer>
                            </A.AboutChefsCardRight>

                        </A.AboutChefsCard>
                                </>
                            )
                        })
                    }
                        
                    </A.AboutChefsCardRow>
                </A.AboutChefsCardContainer>
            </A.AboutChefsContainer>
        </>
     );
}
 
export default AboutChefs;