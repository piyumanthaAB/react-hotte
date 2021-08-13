import * as B from './ButtnElements';

const Button = (props) => {
    return (
        <>
            <B.ButtonContainer to={props.to}>
                {props.btText}
            </B.ButtonContainer>
        </>
     );
}
 
export default Button;