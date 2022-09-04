import React from "react";
import about from "../img/logos/about.jpg";
import cv from "../data/cv.pdf";

const ImageSection = () => {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={about} alt="" />
      </div>
      <div className="about-info">
        <h4>
          I am <span>Husibul</span>
        </h4>
        <p className="about-text">
          Hi, I am Hushibul and I am a full stact developer. I have been working
          with the front-end technoloy for 2 years. I recently started working
          with backend system. I love learning with new technologies and like to
          master them.
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Address</p>
            <p>Countries</p>
          </div>
          <div className="right-section">
            <p>: Md Hushibul Haque Bhuiya</p>
            <p>: 22</p>
            <p>: Bangladeshi</p>
            <p>: Bengali, English</p>
            <p>: Road 8, A Block, Uposhohor, Sylhet</p>
            <p>: Bangladesh</p>
          </div>
        </div>
        <a href={cv} download className="btn">
          Download Cv
        </a>
      </div>
    </div>
  );
};

export default ImageSection;
