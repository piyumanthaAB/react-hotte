import * as A from './AboutPageElements';
import Img from './../../img/about_img.png'
import { CustomHeading,CustomSpan } from '../Headings/Headings';



const AboutStory = (props) => {

    

    return (
        <>
            <A.AboutStoryContainer>
               
                <A.AboutStoryLeft>
                    <A.AboutStoryLeftContent>
                        <A.AboutStoryTitleRow>
                            <A.AboutStoryTitleBtn onClick={props.handleStory}> The Story</A.AboutStoryTitleBtn>
                            <A.AboutStoryTitleBtn onClick={props.handleMission}> Our Mission</A.AboutStoryTitleBtn>
                            <A.AboutStoryTitleBtn onClick={props.handleVision}> Our Vision</A.AboutStoryTitleBtn>
                        </A.AboutStoryTitleRow>
                        
                        <CustomHeading size={"4.2rem"} weight={"bold"} padding={"0 1rem"}>
                            {props.Title || <>Hot<CustomSpan size={"4.2rem"} weight={"bold"} color={"#ff702a"}>te</CustomSpan> have 25+ years of experience.</>}
                        </CustomHeading>

                        <CustomHeading margin={"1rem 0 2rem 0"} size={"1.5rem"} weight={"normal"}>
                            {props.P1 || <>Lorem ipsum dolor sit amet, consectetuer adipiscing elit dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat turpis.
                            Integer rutrum ante eu lacus. Vestibulum libero nisl, porta vel scelerisque eget, malesuada at, neque.</>}
                        </CustomHeading>
                        <CustomHeading size={"1.5rem"} weight={"normal"}>
                            {props.P2 ||<>Lorem ipsum dolor sit amet, consectetuer adipiscing elit dictum magna. Sed laoreet aliquam leo.
                            Ut tellus dolor, dapibus eget cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat.</>}
                        </CustomHeading>

                    </A.AboutStoryLeftContent>

                </A.AboutStoryLeft>

                <A.AboutStoryRight>
                    <A.AboutImage src={Img} />
                </A.AboutStoryRight>

            </A.AboutStoryContainer>
        </>
     );
}
 
export default AboutStory;