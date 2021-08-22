import * as C from './CarouselElements';
import {ColorSpan } from './../Headings/Headings';

import Slider from "react-slick";


import { BsArrowRightShort,BsArrowLeftShort } from "react-icons/bs";

import img_1 from './../../img/customer1.png';
import img_2 from './../../img/customer2.png';
import img_3 from './../../img/customer3.png';
import img_4 from './../../img/customer4.png';

const Carousel = (props) => {

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
        autoplay:true
    };
    
    return (
        <>
            <C.CarouselContainer>
                    <C.CarouselOuterTitle>Some of Our Satisfied <ColorSpan> Customers.</ColorSpan> </C.CarouselOuterTitle>

                    <C.CarouselRow>
                        
                        <C.CarouselLeft>
                            <C.CarouselSideImg src={img_1} />
                            <C.CarouselSideImg src={img_2} />
                        </C.CarouselLeft>
                        
                        <C.CarouselWrapper>
                            <Slider {...settings}>
                                
                                {props.data.map((el, idx) => {
                                    return (
                                        <C.CarouselSlide key={idx}>
                                            <C.CarouselCardImg src={el.img} />
                                            <C.CarouselInnerText>
                                                {el.desc}
                                            </C.CarouselInnerText>
                                    
                                            <C.CarouselInnerTitle>{ el.name}</C.CarouselInnerTitle>
                                            <C.CarouselInnerText>
                                                Happy Customer
                                            </C.CarouselInnerText>
                                        </C.CarouselSlide>
                                    );
                                })}
                            
                            </Slider>
                        </C.CarouselWrapper>
                        
                        <C.CarouselRight>
                            <C.CarouselSideImg src={img_3} />
                            <C.CarouselSideImg src={img_4} />
                        </C.CarouselRight>
                    
                    </C.CarouselRow>
                    
                
            </C.CarouselContainer>
        </>
    );
}
 
export default Carousel;