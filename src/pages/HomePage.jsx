import React from "react";

import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TypeWriterEffect from "react-typewriter-effect";

const HomePage = () => {
  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          Hi, I am <span>Hushibul</span>
        </h1>
        <p className="h-sub-text">
          I am Hushibul and I am a full stack developer. I have been working
          with the front-end technology for 2 years. I recently started working
          with backend system. I love learning with new technologies and like to
          master them.
        </p>
        <div className="icons">
          <a
            href="https://www.facebook.com/profile.php?id=100010265560624"
            className="icon-holder"
          >
            <FontAwesomeIcon icon={faFacebook} className="icon fb" />
          </a>
          <a href="https://github.com/Hushibul" className="icon-holder">
            <FontAwesomeIcon icon={faGithub} className="icon gh" />
          </a>
          <a
            href="https://www.linkedin.com/in/md-hushibul-haque-09b9ab1bb/"
            className="icon-holder"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon ln" />
          </a>
        </div>
      </header>
    </div>
  );
};

export default HomePage;
