import React from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import Logo from '../../images/rhea-logo-1.png';
import { animateScroll as scroll } from 'react-scroll';
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = ({ toggle }) => {

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo onClick={toggleHome} to='/'>
              <img src={Logo} alt="logo" style={{height:'50px', width: "30%"}}/>
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars style={{color:'#00a8e9'}}/>
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to="/">HOME</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/maintenance" >MAINTENANCE</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/legacy">LEGACY</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/enhanced">ENHANCED</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/references">REFERENCES</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/contactUs">CONTACT US</NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/helpdesk">HELPDESK</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
