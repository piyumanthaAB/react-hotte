import * as F from './ConactFormElements';
import * as FC from './FormElements';
import { CustomHeading,CustomSpan } from '../Headings/Headings';

const ContactForm = (props) => {
    return (
        <>
            <F.ContactFormContainer>
                
                <F.ContactFormMessage>
                    <CustomHeading size={"3.4rem"}  weight={"bold"}>
                        Make a Reservation And <br />Enjoy  
                        <CustomSpan color={ "#ff702a"} size={"3.4rem"} weight={"bold"}> 
                            {" "} Fresh Food
                        </CustomSpan> 
                    </CustomHeading>
                    <CustomHeading size={"1.5rem"} >
                        There are many variations of passages of Lorem Ipsum available but majority have suffered alteration injected humour
                    </CustomHeading>
                </F.ContactFormMessage>

                <F.ContactForm>
                    
                    

                </F.ContactForm>
            </F.ContactFormContainer>
        </>
     );
}
 
export default ContactForm;