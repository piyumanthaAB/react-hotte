import { ButtonContainerA } from './ButtnElements';

const ButtonA = (props) => {
    return (
        <>
            <ButtonContainerA size={props.size} to={props.to}>
                {props.btnText}
            </ButtonContainerA>
        </>
     );
}
 
export default ButtonA;