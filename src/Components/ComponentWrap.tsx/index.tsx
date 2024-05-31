import React from 'react'
import MainReview from '../../Review/MainReview '
import About from '../About'
import Education from '../Education'
import Experience from '../Experience'
import Footer from '../Footer'
import Main from '../Main'
import Project from '../Project'
import Skill from '../Skill'
import styled from 'styled-components'

const CompWrap = () => {
  return (
    <>
      <FixedBackground>
        <Main />
      </FixedBackground >
      <ContentSection>
        <About />
        <Skill />
        <Education />
        <Experience />
        <Project />
        <MainReview />
        <Footer />
    </ContentSection>
    </>
  )
}

export default CompWrap
const FixedBackground = styled.div`
  position: fixed;
  width: calc(100% - 300px);
  height: 100%;
  overflow: hidden;
  z-index: -1;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
const ContentSection = styled.div`
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px); 
  margin-top:100vh;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;