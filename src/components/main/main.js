import React from "react";
import "./main.css"
import Welcome from "../welcome/welcome"
import Contact from "../contact/contact"
import Projects from "../projects/projects"
import Resume from "../resume/resume"
import AboutMe from "../aboutMe/aboutMe"

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
        <p className="player" alt="You" ></p>

        {/* The Houses */}
        <img className="resume" alt="Resume" src={require('./assets/resumeHouse.png')}></img>
        <img className="projects" alt="Projects" src={require('./assets/projectsHouse.png')}></img>
        <img className="contact" alt="Contact Info" src={require('./assets/contactHouse.png')}></img>
        <img className="aboutMe" alt="About Me" src={require('./assets/aboutmeHouse.png')}></img>


        {/* ------------------------------------Welcome Screen Box---------------------------------- */}
        <Welcome></Welcome>

        {/* ------------------------------------House Boxes---------------------------------- */}
        <Resume></Resume>

        <Projects></Projects>

        <AboutMe></AboutMe>

        <Contact></Contact>

      </div>
    )
  }




}


export default Main;