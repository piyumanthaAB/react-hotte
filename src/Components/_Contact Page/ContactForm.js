import * as C from './ContactPageElements';
import { FormInput, FormTextArea, FormLabel,FormSubmitBtn,FormDropdown,FormDropdownOption } from './../Forms/FormElements';
import { CustomHeading,CustomSpan,ColorSpan } from '../Headings/Headings';

const ContactForm = () => {
    return (
        <>
            <C.ContactFormContainer>
                <C.ContactFormHeader>
                    <C.ContactFormTitle>
                        Make a Reservation And Enjoy  <ColorSpan> Fresh Food</ColorSpan>
                    </C.ContactFormTitle>
                    <C.ContactFormTitleDesc>
                        There are many variations of passages of Lorem Ipsum available but majority have suffered alteration injected humour
                    </C.ContactFormTitleDesc>
                </C.ContactFormHeader>
                <C.ContactForm>
                    <C.ContactFormTop>
                        <C.ContactFormGroup>
                            <FormLabel>Select Menue*</FormLabel>
                            <FormDropdown>
                                <FormDropdownOption selected>Chicken Fry</FormDropdownOption>
                                <FormDropdownOption>Chicken Burger</FormDropdownOption>
                                <FormDropdownOption>Chicken Curry</FormDropdownOption>
                                <FormDropdownOption>Beef Curry</FormDropdownOption>
                            </FormDropdown>
                        </C.ContactFormGroup>
                        <C.ContactFormGroup>
                            <FormLabel>Quantity*</FormLabel>
                            <FormInput type="number" border={"1px solid transparent"} placeholder={"05"} required />
                        </C.ContactFormGroup>
                        <C.ContactFormGroup>
                            <FormLabel>Date*</FormLabel>
                            <FormInput type="date" border={"1px solid transparent"} placeholder={"09-08-2020"} required />
                        </C.ContactFormGroup>
                        <C.ContactFormGroup>
                            <FormLabel>Time*</FormLabel>
                            <FormInput type="text" border={"1px solid transparent"} placeholder={"09 AM"} required />
                        </C.ContactFormGroup>
                    </C.ContactFormTop>
                    <CustomHeading weight={"600"} size={"1.8rem"} color={"#0a0626"}>Personal Infromation</CustomHeading>
                    <C.ContactFormBottom>
                        
                        <C.ContactFormGroup>
                            <FormLabel>Full Name*</FormLabel>
                            <FormInput type="text" border={"1px solid transparent"} placeholder={"Malinesa Alikrith"} required />
                        </C.ContactFormGroup>
                        <C.ContactFormGroup>
                            <FormLabel>Phone No*</FormLabel>
                            <FormInput type="number" border={"1px solid transparent"} placeholder={"+88 697 893"} required />
                        </C.ContactFormGroup>
                        <C.ContactFormGroup>
                            <FormLabel>Your Email*</FormLabel>
                            <FormInput type="email" border={"1px solid transparent"} placeholder={"support@gmail.com"} required />
                        </C.ContactFormGroup>
                        <C.ContactFormGroup>
                            <FormLabel>Address*</FormLabel>
                            <FormInput type="text" border={"1px solid transparent"} placeholder={"Lawrence, Michigan(MI), 49064"} required />
                        </C.ContactFormGroup>
                        <C.ContactFormGroupTextarea>
                            <FormLabel>Any Special Request?</FormLabel>
                            <FormTextArea border={"1px solid transparent"} rows={"10"} placeholder={"Type here"}></FormTextArea>
                        </C.ContactFormGroupTextarea>
                    </C.ContactFormBottom>
                    
                    <FormSubmitBtn margin={"0 auto"} borderRadius={"50rem"}>Book Now { '>>'}</FormSubmitBtn>
                </C.ContactForm>
            </C.ContactFormContainer>
        </>
     );
}
 
export default ContactForm;