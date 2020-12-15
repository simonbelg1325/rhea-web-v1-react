import React from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-3.svg';
import Icon3 from '../../images/svg-5.svg';
import Icon7 from '../../images/svg-7.svg';
import Icon8 from '../../images/svg-8.svg';
import Icon9 from '../../images/svg-9.svg';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements';

const Services = ({header, title1, title2, title3, title4, title5, title6, msg1, msg2, msg3, msg4, msg5, msg6}) => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>{header}</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>{title1}</ServicesH2>
          <ServicesP>
          {msg1}
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>{title2}</ServicesH2>
          <ServicesP>
          {msg2}
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>{title3}</ServicesH2>
          <ServicesP>
          {msg3}
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon9} />
          <ServicesH2>{title4}</ServicesH2>
          <ServicesP>
          {msg4}
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon8} />
          <ServicesH2>{title5}</ServicesH2>
          <ServicesP>
          {msg5}
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon7} />
          <ServicesH2>{title6}</ServicesH2>
          <ServicesP>
          {msg6}
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
