import { ButtonContainerA } from './ButtnElements';

const ButtonA = (props) => {
    return (
        <>
            <ButtonContainerA size={props.size} href={props.href}>
                {props.btnText}
            </ButtonContainerA>
        </>
     );
}
 
export default ButtonA;