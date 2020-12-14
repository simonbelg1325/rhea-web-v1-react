import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import HeroSection from '../../components/HeroSection';
import InfoSection from '../../components/InfoSection';
import { enObjFour, enObjOne, enObjThree, enObjTwo, enObjFive } from '../Enhanced/Data';

function Enhanced() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const message = {
      title: 'Enhanced developments',
      header: 'RHEA NV',
  }
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection {...message}/>
      <InfoSection {...enObjOne} />
      <InfoSection {...enObjTwo} />
      <InfoSection {...enObjThree} />
      <InfoSection {...enObjFour} />
      <InfoSection {...enObjFive} />
    </>
  );
}

export default Enhanced;