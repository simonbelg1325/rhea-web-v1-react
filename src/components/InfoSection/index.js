import React from 'react';
import ReactPlayer from 'react-player/youtube'
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrap,
  Img,
  Header
} from './InfoElements';

const InfoSection = ({
  lightBg,
  imgStart,
  topLine,
  lightText,
  headline,
  description,
  img,
  alt,
  id,
  header,
  primary,
  darkText,
  videoUrl,
  video,
  moreDesc,
  moreHeader
}) => {
//<div><div>{header}</div><Subtitle key={i} darkText={darkText}>{description[item]}</Subtitle></div>
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                {moreDesc ? Object.keys(description).map((item, i) => (
                  <div>
                    <Header>{moreHeader ?header[item] : ''}</Header>
                    <Subtitle key={i} darkText={darkText}>{description[item]}</Subtitle>
                  </div>
                )) : <Subtitle darkText={darkText}>{description}</Subtitle>}
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
              {video ? <ReactPlayer url={videoUrl} width='100%' controls='true' /> : <Img src={img} alt={alt} style={{width: '100%'}}/> }
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
