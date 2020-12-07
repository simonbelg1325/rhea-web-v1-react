import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import HeroSection from '../../components/HeroSection';
import InfoSection from './InfoSection';
import { homeObjOne , homeObjTwo, homeObjThree, homeObjfour } from '../Home/InfoSection/Data';
import Services from '../../components/Services';

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const message = {
      title: 'Because your data matters',
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
      <InfoSection {...homeObjfour} />
      <Services/>
    </>
  );
}

export default Home;