import React from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-3.svg';
import Icon3 from '../../images/svg-5.svg';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>EXPERIENCE</ServicesH2>
          <ServicesP>
          20 years of experience regarding development of data rendering systems and support on third party applications
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>COST EFFECTIVE</ServicesH2>
          <ServicesP>
          With our modular approach, cost for developments are drastically reduced
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>BEST IN CLASS</ServicesH2>
          <ServicesP>
          Use of global defined (and used) coding standards based on MS technology
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>OPEN</ServicesH2>
          <ServicesP>
          Open applicative and digital framework design for integration with existing digital frameworks or applications
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>FUTURE PROOF</ServicesH2>
          <ServicesP>
          Latest technological adaptation in regards of the development of proprietary and open applications/digital frameworks to ensure future evolutions are still compatible
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>SECURE</ServicesH2>
          <ServicesP>
          Build upon state of the art security protocols to ensure extra layers of security whatever the application or other source added to the intelligent data infrastructure
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
