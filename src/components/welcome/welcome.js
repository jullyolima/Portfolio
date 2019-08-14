import React from "react";


class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div id="welcomeBox" className="modal">
        <div id="welcomeBoxContent" className="modal-content">
          <span className="close">&times;</span>
          <p className="boxText">Welcome to my interactive portfolio, my name is Jullyo Lima and I am an aspiring Web Developer.</p>
          <br></br>
          <p className="boxText">I've created everything in this portfolio from scratch excluding the house and player sprites. I used a software called
          Tiled to create the tileset map in the background, and react.js to build this website. I hope you enjoy finding out more about me and thank you for stopping by!</p>
          <br></br>
          <p className="boxText">Use the Arrow keys to move around the map and go to the different houses to learn more about me,
                 to look at my projects, and to find my contact information!</p>
          <br></br>
          <button className="musicBtn">Music</button>
        </div>
      </div>
    )
  }



}

export default Welcome;