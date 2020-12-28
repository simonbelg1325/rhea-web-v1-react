import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import HeroSection from '../../components/HeroSection';
import References from '../../components/ReferencesSection';
import Footer from '../../components/Footer';

function Maintenance() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const message = {
      title: 'They already trust us',
      header: 'RHEA NV',
  }

  const refMessage = {
    header : 'They already trust us'
  }
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection {...message}/>
      <References {...refMessage} />
      <Footer />
    </>
  );
}

export default Maintenance;