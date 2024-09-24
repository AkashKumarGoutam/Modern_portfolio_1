import React from 'react'
import HeroSection from '../../components/heroSection/HeroSection'
import AboutSection from '../../components/aboutSection/AboutSection'
import MyWork from '../../components/myWork/MyWork'
import MediaProject from '../../components/mediaProject/MediaProject'
import OtherProject from '../../components/otherProject/OtherProject'
import SkillAndExpertise from '../../components/SkillsAndExpertise/SkillAndExpertise'
import MyCareerSteps from '../../components/myCareerSteps/MyCareerSteps'

function Home() {
  return (
    <div >
      <HeroSection/>
      <AboutSection/>
      <MyWork/>
      <MediaProject/>
      <OtherProject/>
      <SkillAndExpertise/>
      <MyCareerSteps/>
    </div>
  )
}

export default Home
