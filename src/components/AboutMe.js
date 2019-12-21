import React from "react";
import Fade from "react-reveal/Fade";
import "./AboutMe.css";

class AboutMe extends React.Component {
  render() {
    return (
      <div className="about-me">
        <Fade top>
          <div className="title">{`Hello!`}</div>
          <div className="content">
            I'm Lindsey and I am a third year Computer Science and History Major at Northeastern University.
            I am a full-stack software developer with a leaning towards backend engineering.
          </div>
        </Fade>
      </div>
    );
  }
}

export default AboutMe;
