import React, { useState, useEffect } from 'react';
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
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo onClick={toggleHome} to='/'>
              <img src={Logo} alt="logo" style={{height:'50px', width: "30%"}}/>
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars style={{color:'#00a8e9'}}/>
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to='/'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                  scrollNav={scrollNav}
                >
                  HOME
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='maintenance'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                  scrollNav={scrollNav}
                >
                  MAINTENANCE
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='legacy'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                  scrollNav={scrollNav}
                >
                  LEGACY
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='enhanced'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                  scrollNav={scrollNav}
                >
                  ENHANCED
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='references'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                  scrollNav={scrollNav}
                >
                  REFERENCES
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='contactUs'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                  scrollNav={scrollNav}
                >
                  CONTACT US
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to='/signin'>HELPDESK</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
