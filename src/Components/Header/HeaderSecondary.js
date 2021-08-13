import * as S from './HeaderSecondaryElements';
import {CustomHeading,CustomSpan} from './../Headings/Headings';



const HeaderSecondary = (props) => {

    const renderIcon = (icon) => {
        return icon;
    }
    return (
        <>
            <S.SecondaryContainer>
                
                

                {props.data.map((el,idx) => {
                    
                    return (
                        <S.SecondaryInfoElement key={idx}>
                    
                    <S.SecondaryIcon>
                        {renderIcon(el.icon)}
                    </S.SecondaryIcon>
                    <S.SecondaryDetails>
                            <CustomHeading size={"2.5rem"} weight={"bold"} color={"white"} space={""} > {el.mainTitle} </CustomHeading>
                            <CustomHeading size={"1.4rem"} weight={"normal"} color={"white"} space={""} > {el.secondTitle} </CustomHeading>
                            {el.thirdTitle && <CustomHeading size={"1.4rem"} weight={"normal"} color={"white"} space={""} > {el.thirdTitle} </CustomHeading>}
                    </S.SecondaryDetails>

                </S.SecondaryInfoElement>
                    )
                })}
                
                

            </S.SecondaryContainer>

        </>
     );
}
 
export default HeaderSecondary;