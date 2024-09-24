import React from 'react'
import skillPic from "../../assets/skill_pic.jpg"
function SkillAndExpertise() {
  return (
    <div className='py-40 px-60'>
      <div className='flex justify-center gap-12'>
        <div className='w-[50%] pt-32 relative'>
            <h1 className='uppercase text-8xl px-4 absolute'><span className='px-12'>Skill &</span><br/> Expertise</h1>
            <h1></h1>
            <img src={skillPic} alt='img' className='w-[100%] pt-40' />
        </div>
        <div className='w-[60%] px-40'>
            <div>
                <h1 className='text-2xl py-4'>Strategic Digital Transformation</h1>
                <ul className='uppercase text-xl px-12 list-disc'>
                    <li>kl;ojlkkl</li>
                    <li>kl;ojlkkl</li>
                    <li>kl;ojlkkl</li>
                    <li>kl;ojlkkl</li>
                    <li>kl;ojlkkl</li>
                    <li>kl;ojlkkl</li>
                </ul>
            </div>
            <div>
                <h1 className='text-2xl py-4'>Strategic Digital Transformation</h1>
                <ul className='uppercase text-xl px-12 list-disc'>
                    <li>kl;ojlkkl</li>
                    <li>kl;ojlkkl</li>
                    <li>kl;ojlkkl</li>
                    <li>kl;ojlkkl</li>
                    <li>kl;ojlkkl</li>
                    <li>kl;ojlkkl</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SkillAndExpertise
