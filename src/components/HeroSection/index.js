import React from "react";
import HeroBgAnimation from "../HeroBgAnimation";
import {
  HeroContainer,
  HeroBg,
  HeroLeftContainer,
  Img,
  HeroRightContainer,
  HeroInnerContainer,
  TextLoop,
  Title,
  Span,
  SubTitle,
  ResumeButton,
  ExperienceText,
} from "./HeroStyle";
import HeroImg from "../../images/mohamedbahirhussain.jpeg";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";

const HeroSection = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <Title>
              Hi, I am <br /> {Bio.name}
            </Title>
            <TextLoop>
              I am
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <ExperienceText>
              <span>4+</span> Years of Hands on Experience
            </ExperienceText>

            <SubTitle>{Bio.description}</SubTitle>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
  <ResumeButton href={Bio.resume} target="_blank" rel="noopener noreferrer">
    Check Resume
  </ResumeButton>
  <ResumeButton href={Bio.experiences} target="_blank" rel="noopener noreferrer">
    Check Experience Letter
  </ResumeButton>
  <ResumeButton href={Bio.sce} target="_blank" rel="noopener noreferrer">
    Check Engineer Council Certificate
  </ResumeButton>
</div>

          </HeroLeftContainer>

          <HeroRightContainer id="Right">
            <Img src={HeroImg} alt="hero-image" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
