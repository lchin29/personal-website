import React from "react";
import './HomePage.css';
import _ from "lodash";
import Fade from "react-reveal/Fade";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AboutMe from "./AboutMe";
import Resume from "./Resume";


class HomePage extends React.Component {
  render() {
    return (
      <div className="home-page">
        <Toolbar className="tool-bar">
          <Typography variant="h6" className="tool-bar-tab" >
            LINDSEY CHIN
          </Typography>
        </Toolbar>
        <AboutMe/>
        <Resume/>
      </div>
    );
  }
}

export default HomePage;