import React from 'react'
import work1Pic from "../../assets/work1_pic.png"
import work2Pic from "../../assets/work2_pic.png"
import work3Pic from "../../assets/work3_pic.png"

function MyWork() {
  return (
    <div>
      <div>
        <div className='px-12'>
            <h1 className='text-8xl flex justify-center pt-32 pb-4 uppercase'>My Work</h1>
            <div className='flex justify-center gap-12'>
                <div className='w-[24%]'>
                    <div>
                        <img src={work1Pic} alt='img'/>
                    </div>
                    <div>
                        <h1 className='text-2xl font-semibold'>Wefix and Trade</h1>
                        <h1 className='text-xl'>created for The mobile repair expert shop for their social handles.</h1>
                    </div>
                </div>
                <div className='w-[28%] pt-20'>
                    <div>
                        <img src={work2Pic} alt='img'/>
                    </div>
                    <div>
                        <h1 className='text-2xl font-semibold'>Wefix and Trade</h1>
                        <h1 className='text-xl'>created for The mobile repair expert shop for their social handles.</h1>
                    </div>
                </div>
                <div className='w-[25%]'>
                    <div>
                        <img src={work3Pic} alt='img'/>
                    </div>
                    <div>
                        <h1 className='text-2xl font-semibold'>Wefix and Trade</h1>
                        <h1 className='text-xl'>created for The mobile repair expert shop for their social handles.</h1>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MyWork
