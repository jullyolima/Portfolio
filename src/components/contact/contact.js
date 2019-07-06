import React from "react";


class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
  
      }
    }

    render() {
        return (
            <div id="contactBox" className="modal">
            <div id="contactContainer" className="modal-content">
            <span className="close">&times;</span>
            <div className="projectsTitle">Contact Me</div>
            <div id="contactInner">

              <div className="contactLinkBox">
                <h6 className="projectsDesc">LinkedIn</h6>
                <a className="projectsAnchor" href="https://linkedin.com/in/jullyo-lima-553baa172" target="_blank">My Profile</a>
              </div>

              <br></br>

              <div className="contactLinkBox">
                <h6 className="projectsDesc">Github</h6>
                <a className="projectsAnchor" href="https://github.com/jullyolima" target="_blank">My Github Profile</a>
              </div>

              <br></br>

              <div className="contactLinkBox">
                <h6 className="projectsDesc">Email</h6>
                <a href="mailto:jullyolima@hotmail.com?Subject=Hello%20Jullyo" target="_top">Email Me</a>
              </div>

            </div>

          </div>
        </div>
        )
    }



}

export default Contact;