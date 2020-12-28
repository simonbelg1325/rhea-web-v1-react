import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import HeroSection from '../../components/HeroSection';
import InfoSection from '../../components/InfoSection';
import { mainObjOne, mainObjThree, mainObjTwo, mainObjFour, mainObjFive, mainObjSix } from '../Maintenance/Data';
import Footer from '../../components/Footer';

function Maintenance() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const message = {
      title: 'Maintenance & Support',
      header: 'RHEA NV',
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection {...message}/>
      <InfoSection {...mainObjOne} />
      <InfoSection {...mainObjTwo} />
      <InfoSection {...mainObjThree} />
      <InfoSection {...mainObjFour} />
      <InfoSection {...mainObjFive} />
      <InfoSection {...mainObjSix} />
      <Footer />
    </>
  );
}

export default Maintenance;