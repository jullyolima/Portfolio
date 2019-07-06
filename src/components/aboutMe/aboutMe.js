import React from "react";


class AboutMe extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
  
      }
    }

    render() {
        return (
            <div id="aboutMeBox" className="modal">
          <div className="modal-content">
            <span className="close">&times;</span>
            <p>About Me</p>
          </div>
        </div>
        )
    }



}

export default AboutMe;