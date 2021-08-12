import * as nav from './NavbarElements';
import { useState } from 'react';

import LogoSrc from '../../img/logo.png';
import { MdQueryBuilder } from "react-icons/md";
import { BiMenu } from "react-icons/bi";


const Navbar = () => {

    const [expand, setExpand] = useState(true)

    return (
        
            <nav.NavbarContainer>
                
                <nav.NavbarBrad>
                <nav.NavbarBrandImage src={ LogoSrc}/>
                    <nav.NavbarBrandTextContainer>
                        <nav.NavbrandText color={'#c5331f'}><MdQueryBuilder/> Open Now</nav.NavbrandText>
                        <nav.NavbrandText color={'#a0cc3a'}>8AM - 10PM</nav.NavbrandText>
                    </nav.NavbarBrandTextContainer>
                </nav.NavbarBrad>

                {expand && <nav.NavLinks animate={{y:0}} initial={{y:-100}} >
                    <nav.NavLink to='/'>Home</nav.NavLink>
                    <nav.NavLink to='/about'>About</nav.NavLink>
                    <nav.NavLink to='/blog'>Blog</nav.NavLink>
                    <nav.NavLink to='/contact'>Contact</nav.NavLink>

                    <nav.NavNumberConainer>
                        <nav.NavNumber>+94 76 646 924</nav.NavNumber>
                    </nav.NavNumberConainer>

                </nav.NavLinks>}
            
            <nav.NavbarExpand onClick={() => {
                if (expand) {
                    setExpand(false);
                } else {
                    setExpand(true);
                }
                }}>
                    <nav.NavbarExpandIcon>
                        <BiMenu/>
                    </nav.NavbarExpandIcon>
                </nav.NavbarExpand>

            </nav.NavbarContainer>
        
     );
}
 
export default Navbar;