import * as S from './HeaderSecondaryElements';
import {CustomHeading,CustomSpan} from './../Headings/Headings';



const HeaderSecondary = (props) => {

    const renderIcon = (icon) => {
        return icon;
    }
    return (
        <>
            <S.SecondaryHomeContainer  >
                
                

                {props.data.map((el,idx) => {
                    
                    return (
                        <S.SecondaryInfoElement key={idx}>
                    
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
                })};
                
                

            </S.SecondaryHomeContainer>

        </>
     );
}
 
export default HeaderSecondary;