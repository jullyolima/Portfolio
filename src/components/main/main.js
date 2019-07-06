import React from "react";
import "./main.css"
import Contact from "../contact/contact"
import Projects from "../projects/projects"
import Resume from "../resume/resume"

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













        {/* ------------------------------------Welcome Screen Box---------------------------------- */}
        <div id="welcomeBox" className="modal">
          <div id="welcomeBoxContent" className="modal-content">
            <span className="close">&times;</span>
            <p className="boxText">Welcome to my interactive portfolio, my name is Jullyo Lima and I am an aspiring Web Developer.</p>
            <br></br>
            <p className="boxText">Use the Arrow keys to move around the map and go to the different houses to learn more about me,
               to look at my projects, and to find my contact information!</p>
          </div>
        </div>

        {/* ------------------------------------Resume Box---------------------------------- */}
        <Resume></Resume>

        {/* ------------------------------------Projects Box---------------------------------- */}
        <Projects></Projects>

        {/* ------------------------------------About Me Box---------------------------------- */}
        <div id="aboutMeBox" className="modal">
          <div className="modal-content">
            <span className="close">&times;</span>
            <p>About Me</p>
          </div>
        </div>

        {/* ------------------------------------Contact Me Box---------------------------------- */}
        <Contact></Contact>








      </div>
    )
  }




}


export default Main;