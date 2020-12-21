import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import HeroSection from '../../components/HeroSection';
import Iframe from 'react-iframe'
import { MapContainer, MapInfoContainer, MapInfo, MapInfo1, MapInfo2} from './ContactUsElements';

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
          <MapInfo/>
          <MapInfo1/>
          <MapInfo2/>
        </MapInfoContainer>
      </MapContainer>
     
        
    </>
  );
}

export default ContactUs;