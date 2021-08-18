import * as C from './CarouselElements';
import { CustomHeading,CustomSpan } from './../Headings/Headings';

import Slider from "react-slick";

import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

import { BsArrowRightShort,BsArrowLeftShort } from "react-icons/bs";

import img_1 from './../../img/customer1.png';
import img_2 from './../../img/customer2.png';
import img_3 from './../../img/customer3.png';
import img_4 from './../../img/customer4.png';

const Carousel = () => {

    const NextArrow = ({ onClick }) => {
      
        return (
            
            <C.CarouselArrowRight onClick={
                () => {
                    onClick();
                }
            }>
                <BsArrowRightShort/>
            </C.CarouselArrowRight>
        );
      };
    const PrevArrow = ({ onClick }) => {
      
        return (
            
            <C.CarouselArrowLeft  onClick={
                () => {
                    onClick();
                }
            }>
               <BsArrowLeftShort /> 
            </C.CarouselArrowLeft>
        );
      };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    
    return (
        <>
            <C.CarouselContainer>
                <CustomHeading margin={"0 0 3rem"} color={"#0a0626"} size={"3.8rem"} weight={"700"} >
                    Some of Our Satisfied
                    <CustomSpan color={"#fd6f2a"} size={"3.8rem"} weight={"700"}> Customers.</CustomSpan>

                    <C.CarouselRow>
                        
                        <C.CarouselLeft>
                            <C.CarouselSideImg src={img_1} />
                            <C.CarouselSideImg src={img_2} />
                        </C.CarouselLeft>
                        
                        <C.CarouselWrapper>
                            <Slider {...settings}>
                                
                                <C.CarouselSlide>
                                    <C.CarouselCardImg src={img_1} />
                                    <CustomHeading margin={"0 0 1rem"} size={"1.4rem"} color={"#807670"} >
                                        If you are going to use a passage of cren you need to isn't anything embarrassing hidden in the middle of text
                                        generators Internet tend repeat predefined chunks as necessary making this the first true
                                        generator on the Internet.
                                    </CustomHeading>
                                    <CustomHeading weight={"700"} size={"2rem"} color={"#0a062"}>Kristyn Hairston</CustomHeading>
                                    <CustomHeading size={"1.4rem"} color={"#807670"} >Happy Customer</CustomHeading>
                                </C.CarouselSlide>
                                
                                <C.CarouselSlide>
                                    <C.CarouselCardImg src={img_2} />
                                    <CustomHeading margin={"0 0 1rem"} size={"1.4rem"} color={"#807670"} >
                                        If you are going to use a passage of cren you need to isn't anything embarrassing hidden in the middle of text
                                        generators Internet tend repeat predefined chunks as necessary making this the first true
                                        generator on the Internet.
                                    </CustomHeading>
                                    <CustomHeading weight={"700"} size={"2rem"} color={"#0a062"}>Antor Biswas</CustomHeading>
                                    <CustomHeading size={"1.4rem"} color={"#807670"} >Happy Customer</CustomHeading>
                                </C.CarouselSlide>
                                
                                <C.CarouselSlide>
                                    <C.CarouselCardImg src={img_3} />
                                    <CustomHeading margin={"0 0 1rem"} size={"1.4rem"} color={"#807670"} >
                                        If you are going to use a passage of cren you need to isn't anything embarrassing hidden in the middle of text
                                        generators Internet tend repeat predefined chunks as necessary making this the first true
                                        generator on the Internet.
                                    </CustomHeading>
                                    <CustomHeading weight={"700"} size={"2rem"} color={"#0a062"}>Marie Hairston</CustomHeading>
                                    <CustomHeading size={"1.4rem"} color={"#807670"} >Happy Customer</CustomHeading>
                                </C.CarouselSlide>
                                
                                <C.CarouselSlide>
                                    <C.CarouselCardImg src={img_4} />
                                    <CustomHeading margin={"0 0 1rem"} size={"1.4rem"} color={"#807670"} >
                                        If you are going to use a passage of cren you need to isn't anything embarrassing hidden in the middle of text
                                        generators Internet tend repeat predefined chunks as necessary making this the first true
                                        generator on the Internet.
                                    </CustomHeading>
                                    <CustomHeading weight={"700"} size={"2rem"} color={"#0a062"}>Hannah Hairston</CustomHeading>
                                    <CustomHeading size={"1.4rem"} color={"#807670"} >Happy Customer</CustomHeading>
                                </C.CarouselSlide>
                                
                                
                                
                                
                            </Slider>
                        </C.CarouselWrapper>
                        
                        <C.CarouselRight>
                            <C.CarouselSideImg src={img_3} />
                            <C.CarouselSideImg src={img_4} />
                        </C.CarouselRight>
                    
                    </C.CarouselRow>
                    
                </CustomHeading>
            </C.CarouselContainer>
        </>
    );
}
 
export default Carousel;