import * as nav from './NavbarElements';
import { useState,useEffect } from 'react';

import LogoSrc from '../../img/logo.png';
import { MdQueryBuilder } from "react-icons/md";
import { BiMenu } from "react-icons/bi";


const Navbar = () => {

    const [expandNav, setExpandNav] = useState("");
    const [openNow, setOpenNow] = useState('.....');

    setInterval(() => {
        const d = new Date();
        if (d.getHours() >= 22 || d.getHours() < 8) {
            setOpenNow('Closed');
        } else {
            if (d.getDay() !== 0) {
                setOpenNow('Open')
            } else {
                setOpenNow('Closed');
                
            }
        }
    }, 10);

    useEffect(() => {
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                setNavbarColor("#222");
            } else {
                setNavbarColor("");
            }
        })
    }, []);

    const [navbarColor, setNavbarColor] = useState("");

    const HandleNavExpand = () => {
        setExpandNav(!expandNav);
    }

    const HandleNavClose = () => {
        if (expandNav) {
            setExpandNav(false);
        }
    }

    return (
        
        <nav.NavbarContainer color={navbarColor}>
            
            
                
            <nav.NavbarBrad>
                <nav.NavbarBrandImage src={LogoSrc} />
                <nav.NavbarBrandTextContainer>
                    <nav.NavbrandText color={"#c5331f"}><MdQueryBuilder /> {openNow} Now</nav.NavbrandText>
                    <nav.NavbrandText color={"#a0cc3a"}>8AM - 10PM</nav.NavbrandText>
                </nav.NavbarBrandTextContainer>
            </nav.NavbarBrad>

            <nav.NavLinks animate={{ y: 0 }} initial={{ y: -100 }} >
                <nav.NavLink to='/'>Home</nav.NavLink>
                <nav.NavLink to='/about'>About</nav.NavLink>
                <nav.NavLink to='/blog'>Blog</nav.NavLink>
                <nav.NavLink to='/contact'>Contact</nav.NavLink>

                <nav.NavNumberConainer>
                    <nav.NavNumber>+94 76 646 924</nav.NavNumber>
                </nav.NavNumberConainer>

            </nav.NavLinks>
            
            <nav.NavbarExpand onClick={HandleNavExpand}>
                <nav.NavbarExpandIcon>
                    <BiMenu />
                </nav.NavbarExpandIcon>
            </nav.NavbarExpand>
            
            {expandNav && <nav.NavbarDropdownContainer animate={{ y: 0 }} initial={{ y: -100 }}>
                <nav.NavLink onClick={HandleNavClose} to='/'>Home</nav.NavLink>
                <nav.NavLink onClick={HandleNavClose} to='/about'>About</nav.NavLink>
                <nav.NavLink onClick={HandleNavClose} to='/blog'>Blog</nav.NavLink>
                <nav.NavLink onClick={HandleNavClose} to='/contact'>Contact</nav.NavLink>

                <nav.NavNumberConainer>
                    <nav.NavNumber>+94 76 646 924</nav.NavNumber>
                </nav.NavNumberConainer>

            </nav.NavbarDropdownContainer>}

        </nav.NavbarContainer>
        
    );
}
 
export default Navbar;