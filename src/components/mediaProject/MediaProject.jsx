import React from 'react'
import mediaPic from "../../assets/media_project_pic.jpg"

function MediaProject() {
  return (
    <div className='px-8'>
      <div className='flex justify-center pt-32'>
        <div className='w-[60%]'>
            <h1 className='uppercase text-8xl'>Media project</h1>
            <div className='flex justify-center gap-12 py-12'>             
                    <div className='pt-6'>
                            <h1 className='text-2xl'>SocialCave</h1>
                            <h1 className='text-2xl uppercase py-4'>Freelance Clients</h1>
                        <div className='pl-12'>
                            <ul className='uppercase text-2xl list-disc'>
                                <li className='underline'>Caprinos</li>
                                <li className='underline'>WeFix and trade</li>
                                <li className='underline'>7Stoppers</li>
                                <li className='underline'>aamrai.com</li>
                                <li >modanci.com</li>
                                <li >punjab sweets</li>
                                <li >Invitation designs</li>
                                
                            </ul>
                        </div>
                    </div>
               
                    <div className='pt-20'>
                            <h1 className='text-2xl'>3XM Productions</h1>
                            <h1 className='text-2xl uppercase py-4'>projects<br/>(2022-2023)</h1>
                        <div className='pl-12'>
                            <ul className='uppercase text-2xl list-disc'>
                                <li >salt and vigenar</li>
                                <li >rose elegance</li>
                                <li >888 vapes</li>
                                <li >sds jewellers</li>
                                <li >modanci.com</li>
                                <li >Furniture hub</li>
                                <li >GYm erp system</li>
                                
                            </ul>
                        </div>
                    </div>
                
                    <div className='pt-32'>
                            <h1 className='text-2xl'>Neuromonk LTD</h1>
                            <h1 className='text-2xl uppercase py-4'>projects<br/>(2019-2022)</h1>
                        <div className='pl-12'>
                            <ul className='uppercase text-2xl list-disc'>
                                <li >servicelane.com</li>
                                <li >no8y.com</li>
                                <li >yahoo coaching</li>
                                <li >vm fitness</li>
                                <li >devgadmango.com</li>                                
                            </ul>
                        </div>
                    </div>
            </div>
        </div>
        <div className='w-[20%] pt-40'>
            <img src={mediaPic} alt='img'/>
        </div>
      </div>
    </div>
  )
}

export default MediaProject
