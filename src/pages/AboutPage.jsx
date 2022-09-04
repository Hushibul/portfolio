import React from "react";

import SkillSection from "../components/SkillSection";
import ImageSection from "../components/ImageSection";
// import ServiceSection from '../components/ServiceSection';
import Title from "../components/Title";
// import design from '../img/design.svg';
// import intelligence from '../img/intelligence.svg';
// import gamedev from '../img/game-dev.svg';

const AboutPage = () => {
  return (
    <div className="AboutPage">
      <Title title={"About Me"} span={"About Me"} />
      <ImageSection />
      <Title title={"My Skills"} span={"My Skills"} />
      <div className="skillsContainer">
        <SkillSection skill={"HTML"} progress={"70%"} width={"60%"} />
        <SkillSection skill={"CSS"} progress={"60%"} width={"60%"} />
        <SkillSection skill={"Javascript"} progress={"60%"} width={"60%"} />
        <SkillSection skill={"React Js"} progress={"60%"} width={"60%"} />
        <SkillSection skill={"Node Js"} progress={"30%"} width={"30%"} />
        <SkillSection skill={"Express"} progress={"50%"} width={"50%"} />
      </div>

      {/* <Title title={'Services'} span={'Services'} />
        <div className="servives-container">
            <ServiceSection image={design} title={'Web design'} 
            text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
            />
            <ServiceSection image={intelligence} title={'Artificial Intelligence'} 
            text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
            />
            <ServiceSection image={gamedev} title={'Game Development'} 
            text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
            />

            
        </div> */}
    </div>
  );
};

export default AboutPage;
