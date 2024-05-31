import React from 'react'
import MainReview from '../../Review/MainReview '
import About from '../About'
import Contact from '../Contact'
import Education from '../Education'
import Experience from '../Experience'
import Footer from '../Footer'
import Main from '../Main'
import Project from '../Project'
import Skill from '../Skill'

const CompWrap = () => {
  return (
    <>
    <Main/>
    <About/>
    <Skill/>
    <Education/>
    <Experience/>
    <Project/>
    <Contact/>
    <MainReview />
    <Footer/>
    </>
  )
}

export default CompWrap