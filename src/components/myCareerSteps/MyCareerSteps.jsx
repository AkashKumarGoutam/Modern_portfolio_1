import React from 'react'
import careerPic from "../../assets/career_pic.jpg"

function MyCareerSteps() {
  return (
    <div>
      <div>
        <h1 className='text-8xl '>My Career steps</h1>
        <div>
            <div>
                <img src={careerPic} alt='img' className='' style={{ width:"500px" , height:"150px" , }}/>
                <ul>
                    <li></li>
                </ul>
            </div>
            <div></div>
            <div></div>
        </div>
      </div>
    </div>
  )
}

export default MyCareerSteps
