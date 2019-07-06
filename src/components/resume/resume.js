import React from "react";


class Resume extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
  
      }
    }

    render() {
        return (
            <div id="resumeBox" className="modal">
          <div id="resumeContainer" className="modal-content">
            <span className="close">&times;</span>
            <div className="projectsTitle">My Resume</div>

            <div id="resumeInner">
            <a href={require('../main/assets/Resume.pdf')} target="_blank" download>Download My Resume (PDF) </a>
            </div>
          </div>
        </div>
        )
    }



}

export default Resume;