import React from 'react'
import About from '../About'
import Contact from '../Contact'
import CV from '../CV'
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
    <CV/>
    <Project/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default CompWrap