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
              <p className="boxText">Use the Arrow keys to move around the map and go to the different houses to learn more about me,
                 to look at my projects, and to find my contact information!</p>
            </div>
            </div>
        )
    }



}

export default Welcome;