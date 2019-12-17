import React from "react";
import './HomePage.css';
import _ from "lodash";
import Fade from "react-reveal/Fade";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";


class HomePage extends React.Component {
  render() {
    return (
      <div className="home-page">
        <Toolbar className="tool-bar">
          <Typography variant="h6" className="tool-bar-tab" >
            Resume
          </Typography>
        </Toolbar>
        <div className="block">
          <Fade top>
            <h1 className="title">{`block 1`}</h1>
          </Fade>
        </div>
        <div className="block">
          <Fade top>
            <h1 className="title">{`block 2`}</h1>
          </Fade>
        </div>
      </div>
    );
  }
}

export default HomePage;