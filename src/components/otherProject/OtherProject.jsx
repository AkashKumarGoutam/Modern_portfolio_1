import React from "react";
import "./OtherProject.css";
import other1_pic from "../../assets/other1_pic.png";
import other2_pic from "../../assets/other2_pic.png";
import other3_pic from "../../assets/other3_pic.png";
import other4_pic from "../../assets/other4_pic.png";

function OtherProject() {
  return (
    <div className="px-20">
      <div className="flex">
        <div>
          <h1 className="text-8xl uppercase">Other Projects</h1>          
        </div>
        <div className="relative">
          
          <img src={other1_pic} alt="img" className="relative pt-12"/>
          <img src={other2_pic} alt="img" className=""/>
        </div>
        <div>
        <img src={other4_pic} alt="img" />
        <img src={other3_pic} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default OtherProject;
