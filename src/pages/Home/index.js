import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import HeroSection from '../../components/HeroSection';
import InfoSection from '../../components/InfoSection';
import { homeObjOne , homeObjTwo, homeObjThree, homeObjfour } from '../Home/Data';
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

  const serviceMessage = {
    header : 'Our Services',
    title1 : 'EXPERIENCE',
    title2 : 'COST EFFECTIVE',
    title3 : 'BEST IN CLASS',
    title4 : 'OPEN',
    title5 : 'FUTURE PROOF',
    title6 : 'SECURE',
    msg1 : '20 years of experience regarding development of data rendering systems and support on third party applications',
    msg2 : 'With our modular approach, cost for developments are drastically reduced',
    msg3 : 'Use of global defined (and used) coding standards based on MS technology',
    msg4 : 'Open applicative and digital framework design for integration with existing digital frameworks or applications',
    msg5 : 'Latest technological adaptation in regards of the development of proprietary and open applications/digital frameworks to ensure future evolutions are still compatible',
    msg6 : 'Build upon state of the art security protocols to ensure extra layers of security whatever the application or other source added to the intelligent data infrastructure',

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
      <Services {...serviceMessage}/>
    </>
  );
}

export default Home;