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
        <div id="resumeBox" className="modal">
          <div className="modal-content">
            <span className="close">&times;</span>
            <p>Resume</p>
          </div>
        </div>

        {/* ------------------------------------Projects Box---------------------------------- */}
        <div id="projectsBox" className="modal">

          <div id="projectsContent" className="modal-content">
            <span className="close">&times;</span>

            <h6 className="boxHeader">My Projects</h6>

            <div id="projectsContainer">

              <div className="projectsSection">
                {/* Make an object with the projects and loop through it in order to dynamically add more projects */}

                <h6 className="projectsTitle"></h6>
                <img className="projectsImg"></img>
                <p className="projectsDesc"></p>

              </div>


            </div>

          </div>

        </div>

        {/* ------------------------------------About Me Box---------------------------------- */}
        <div id="aboutMeBox" className="modal">
          <div className="modal-content">
            <span className="close">&times;</span>
            <p>About Me</p>
          </div>
        </div>

        {/* ------------------------------------Contact Me Box---------------------------------- */}
        <div id="contactBox" className="modal">
          <div className="modal-content">
            <span className="close">&times;</span>
            <p>contact</p>
          </div>
        </div>








      </div>
    )
  }




}


export default Main;