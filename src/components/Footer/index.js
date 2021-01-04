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
import Logo from '../../images/Rhea-Logo-Final-L.png'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
      <FooterLinkTitle>About Us</FooterLinkTitle>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLink to="/" >Home</FooterLink>
              <FooterLink to="/maintenance" >Maintenance</FooterLink>
              <FooterLink to="/legacy" >Legacy</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLink to="/enhanced" >Enhanced</FooterLink>
              <FooterLink to="/references" >References</FooterLink>
              <FooterLink to="/contactUs" >Contact</FooterLink>
            </FooterLinkItems>
            <NavLogo to="/">
              <img src={Logo} alt="logo" style={{height:'100%', width: "95%", padding: '20px'}}/>
            </NavLogo>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
