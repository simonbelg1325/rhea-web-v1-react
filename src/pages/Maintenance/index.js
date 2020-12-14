import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import HeroSection from '../../components/HeroSection';
import InfoSection from '../../components/InfoSection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../Maintenance/Data';

function Maintenance() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const message = {
      title: 'Maintenance & Support',
      header: 'RHEA NV',
  }
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection {...message}/>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
    </>
  );
}

export default Maintenance;