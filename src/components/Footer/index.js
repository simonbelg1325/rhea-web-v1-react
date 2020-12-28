import React from 'react';
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  NavLogo
} from './FooterElements';
import Logo from '../../images/rhea-logo-1.png'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <NavLogo>
              <img src={Logo} alt="logo" style={{height:'50%', width: "100%", backgroundColor: "#fff"}}/>
            </NavLogo>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to='/'>Home</FooterLink>
              <FooterLink to='/maintenance'>Maintenance</FooterLink>
              <FooterLink to='/legacy'>Legacy</FooterLink>
              <FooterLink to='/enhanced'>Enhanced</FooterLink>
              <FooterLink to='/references'>References</FooterLink>
              <FooterLink to='/contactUs'>Contact</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
