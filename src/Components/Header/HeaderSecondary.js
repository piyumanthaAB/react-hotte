import * as S from './HeaderSecondaryElements';



const HeaderSecondary = (props) => {

    const renderIcon = (icon) => {
        return icon;
    }
    return (
        <>
            <S.SecondaryHomeContainer border_r={props.radius} >
                
                

                {props.data.map((el,idx) => {
                    
                    return (
                        <S.SecondaryInfoElement key={idx} data-aos="zoom-in-left" data-aos-anchor-placement="top-bottom">
                    
                            <S.SecondaryIcon>
                                {renderIcon(el.icon)}
                            </S.SecondaryIcon>
                            <S.SecondaryDetails>
                                
                                <S.SecondaryDetailsTitle> {el.mainTitle} </S.SecondaryDetailsTitle>
                                {/* <CustomHeading size={"1.4rem"} weight={"normal"} color={"white"} space={""} > {el.secondTitle} </CustomHeading> */}
                                <S.SecondaryDetailsDesc>{el.secondTitle}</S.SecondaryDetailsDesc>
                                {el.thirdTitle &&<S.SecondaryDetailsDesc>{el.thirdTitle}</S.SecondaryDetailsDesc> }
                            </S.SecondaryDetails>

                        </S.SecondaryInfoElement>
                    );
                })}
                
                

            </S.SecondaryHomeContainer>

        </>
     );
}
 
export default HeaderSecondary;