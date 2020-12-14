import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import HeroSection from '../../components/HeroSection';
import InfoSection from '../../components/InfoSection';
import { legacyObjOne, legacyObjThree, legacyObjTwo, legacyObjFour, legacyObjFive } from '../Legacy/Data';

function Legacy() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const message = {
      title: 'Legacy applications',
      header: 'RHEA NV',
  }
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection {...message}/>
      <InfoSection {...legacyObjOne} />
      <InfoSection {...legacyObjTwo} />
      <InfoSection {...legacyObjThree} />
      <InfoSection {...legacyObjFour} />
      <InfoSection {...legacyObjFive} />
    </>
  );
}

export default Legacy;