import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import HeroSection from '../../components/HeroSection';
import Iframe from 'react-iframe';
import { ImLocation } from 'react-icons/im';
import { IoIosMail } from 'react-icons/io';
import { FaPhone } from 'react-icons/fa';
import { MapContainer, MapInfoOne, MapInfoTwo, MapInfoThree, MapInfoContainer, MapInfoDiv, MapIcon, MapInfo, MapText } from './ContactUsElements';
import Footer from '../../components/Footer';

function ContactUs() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const message = {
      title: 'Contact us',
      header: 'RHEA NV',
  }
  
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection {...message}/>
      <MapContainer>
        <Iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.187262276086!2d4.440141651401925!3d51.141897779476494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3f088a9108e51%3A0x2445fe8fdc25ad70!2sVeldkant%2035a%2C%202550%20Kontich!5e0!3m2!1sen!2sbe!4v1608556458557!5m2!1sen!2sbe" 
          width="100%" 
          height="600px" 
          frameborder="0" 
          allowfullscreen="" 
          aria-hidden="false" 
          tabindex="0">
        </Iframe>
        <MapInfoContainer>
          <MapInfoDiv>
            <MapInfoOne>
              <MapInfo>
                <MapIcon>
                  <ImLocation />
                </MapIcon>
                <MapText>Veldkant 35A, 2550 Kontich</MapText>
              </MapInfo>
            </MapInfoOne>
            <MapInfoTwo>
              <MapInfo>
                <MapIcon>
                  <IoIosMail />
                </MapIcon>
              </MapInfo>
              <MapText>info@rhea.be</MapText>
            </MapInfoTwo>
            <MapInfoThree>
              <MapInfo>
                <MapIcon>
                  <FaPhone />
                </MapIcon>
                <MapText>03 880 85 89</MapText>
              </MapInfo>
            </MapInfoThree>
          </MapInfoDiv>
        </MapInfoContainer>
      </MapContainer>
      <Footer />
        
    </>
  );
}

export default ContactUs;