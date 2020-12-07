import React from 'react';

import Video from '../../videos/video.mp4';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP
} from './HeroElements';

function HeroSection({title, header}) {

  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>{header}</HeroH1>
        <HeroP>{title}</HeroP>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
