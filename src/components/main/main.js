import React from "react";
import "./main.css"


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount = () => {


  }

  render() {
    return (
      <div className="canvas">

        {/* The User */}
        <img className="player" alt="You" src={require('./assets/ball.jpg')}></img>

        {/* The Houses */}
        <img className="resume" alt="Resume" src={require('./assets/resumeHouse.png')}></img>
        <img className="projects" alt="Projects" src={require('./assets/projectsHouse.png')}></img>
        <img className="contact" alt="Contact Info" src={require('./assets/contactHouse.png')}></img>
        <img className="aboutMe" alt="About Me" src={require('./assets/aboutmeHouse.png')}></img>














        <div id="welcomeBox" class="modal">
          <div class="modal-content">
            <span class="close">&times;</span>
            <p>hello</p>
          </div>
        </div>

        <div id="resumeBox" class="modal">
          <div class="modal-content">
            <p>hello</p>
          </div>
        </div>

        <div id="projectsBox" class="modal">
          <div class="modal-content">
            <p>hello</p>
          </div>
        </div>

        <div id="aboutMeBox" class="modal">
          <div class="modal-content">
            <p>hello</p>
          </div>
        </div>

        <div id="contactBox" class="modal">
          <div class="modal-content">
            <p>hello</p>
          </div>
        </div>








      </div>
    )
  }




}


export default Main;