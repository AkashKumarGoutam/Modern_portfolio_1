import React from "react";
import aboutPic from "../../assets/about_pic.jpg"
function AboutSection() {
  return (
    <div>
      <div className="flex gap-6 justify-around px-48">
        <div className="">
          <h1 className="text-8xl uppercase py-10">
            A Little <br /> About Me
          </h1>
          <div className="text-2xl w-[100%] pl-6">
            <p>
              I am a Technology enthusiast and its graduate, with Master’s in
              International Business and Marketing Management from Oxford. Keen
              on growing knowledge in any technology oriented organisation to
              become a Subject Matter Expert in the field.
            </p>
            <br />
            <p>
              With 3+ years of work experience, I am seeking challenging roles
              under analysis or management, where I can churn my experience from
              technology, marketing and business management, to bring fruitful
              insights and deliverables. Critical thinking and data driven
              orientation best describes my approach in problem solving
              environments.
            </p><br/>
            <p>
              I have a very keen interest in the developing landscape of AI and
              its generative power. Embracing Artificial Intelligence to enhance
              working abilities and leveraging it in the work culture, is the
              new way to move ahead.
            </p>
          </div>
        </div>
        <div>
          <div>
            <img src={aboutPic} alt="img" className="-rotate-6 py-40"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
