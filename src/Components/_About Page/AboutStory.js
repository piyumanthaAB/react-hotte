import * as A from './AboutPageElements';
import Img from './../../img/about_img.png'
import { ColorSpan } from '../Headings/Headings';



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

                        <A.AboutStoryHeading>
                            {props.Title || <>Hot<ColorSpan>te</ColorSpan>  have 30+ years of experience.</>}
                        </A.AboutStoryHeading>

                        <A.AboutStoryText>
                        {props.P1 || <>Lorem ipsum dolor sit amet, consectetuer adipiscing elit dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat turpis.
                            Integer rutrum ante eu lacus. Vestibulum libero nisl, porta vel scelerisque eget, malesuada at, neque.</>}
                        </A.AboutStoryText>
                        <A.AboutStoryText>
                        {props.P2 || <>Lorem ipsum dolor sit amet, consectetuer adipiscing elit dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat turpis.
                            Integer rutrum ante eu lacus. Vestibulum libero nisl, porta vel scelerisque eget, malesuada at, neque.</>}
                        </A.AboutStoryText>
                        
                        

                   

                    </A.AboutStoryLeftContent>

                </A.AboutStoryLeft>

                <A.AboutStoryRight>
                    <A.AboutImageContainer>

                        <A.AboutImage src={Img} />
                    </A.AboutImageContainer>
                </A.AboutStoryRight>

            </A.AboutStoryContainer>
        </>
     );
}
 
export default AboutStory;