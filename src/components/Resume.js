import React from "react";
import Fade from "react-reveal/Fade";
import "./Resume.css";
import { Button } from "@material-ui/core";

class Resume extends React.Component {
  render() {
    return (
      <div className="resume">
        <Fade top>
          <div className="title">Experience</div>
          <div className="content">
            <div className="header">
              PowerAdvocate
            </div>
            <div className="bullet">
              ●	Developed an internal admin platform for importing data and managing schemas to 
              configure data displays on client-facing platform using a microservice architecture, 
              Node.js, AWS, and React
            </div>
            <div className="bullet">
              ●	Implemented data model filtering feature for client-facing platform 
              using Java, Spring, React, Oracle and AWS
            </div>
            <div className="bullet">
              ●	Created new full-stack onboarding workshop for arriving co-ops 
              using React, Java, Spring Boot and MySQL
            </div>
            <Button className="technologies">Node.js</Button>
          </div>
        </Fade>
      </div>
    );
  }
}

export default Resume;