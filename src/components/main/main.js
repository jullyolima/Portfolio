import React from "react";
import "./main.css"
import Contact from "../contact/contact"


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
          <div id="resumeContainer" className="modal-content">
            <span className="close">&times;</span>
            <div className="projectsTitle">My Resume</div>

            <div id="resumeInner">
            <a href={require('./assets/Resume.pdf')} target="_blank" download>Download My Resume (PDF) </a>
            </div>
          </div>
        </div>

        {/* ------------------------------------Projects Box---------------------------------- */}
        <div id="projectsBox" className="modal">

          <div id="projectsContent" className="modal-content">
            <span className="close">&times;</span>

            <h6 className="boxHeader">My Projects</h6>

            {/* Container holding all projects */}
            <div id="projectsContainer">

              {/* Pokedecks Project */}
              <div className="projectsSection">

                <h6 className="projectsTitle">Pokedecks</h6>
                <img className="projectsImg" alt="Pokedecks" src={require('./assets/pokedecks.PNG')}></img>
                <p className="projectsDesc">Pokedecks is a turn-based multiplayer card game that I created for my Bootcamp final project with a partner. It utilizes Socket.io, React, and React-DnD to create a seamless, captavating game.</p>

                <div className="projectsLinkContainer">
                  <p className="projectsLink">Github Repo: <a className="projectsAnchor" href="https://github.com/corbinho/Pokemon" target="_blank">Link</a></p>
                  <br></br>
                  <p className="projectsLink">Deployed Website: <a className="projectsAnchor" href="http://young-reaches-26475.herokuapp.com/" target="_blank">Link (2-players)</a></p>
                </div>

              </div>

              {/* Doctor Finder Project */}
              <div className="projectsSection">

                <h6 className="projectsTitle">Doctor Finder</h6>
                <img className="projectsImg" alt="Doctor Finder" src={require('./assets/doctorFinder.PNG')}></img>
                <p className="projectsDesc">A doctor search engine that displays the nearest doctors around you based on your search criteria. It utilizes the Google Maps API, a doctor database API, and a recent medical news API.</p>

                <div className="projectsLinkContainer">
                  <p className="projectsLink">Github Repo: <a className="projectsAnchor" href="https://github.com/jullyolima/Doctor-Finder" target="_blank">Link</a></p>
                  <br></br>
                  <p className="projectsLink">Deployed Website: <a className="projectsAnchor" href="https://jullyolima.github.io/Doctor-Finder/" target="_blank">Link (Github Pages)</a></p>
                </div>

              </div>


              <div className="projectsSection">

                <h6 className="projectsTitle">Crystal Collector</h6>
                <img className="projectsImg" alt="Doctor Finder" src={require('./assets/crystalCollector.PNG')}></img>
                <p className="projectsDesc">A simple addictive game I made designed to be played on mobile phones. I've added my own twist that makes it into strategy math game, with highscores implemented.</p>

                <div className="projectsLinkContainer">
                  <p className="projectsLink">Github Repo: <a className="projectsAnchor" href="https://github.com/jullyolima/Crystal-Collector" target="_blank">Link</a></p>
                  <br></br>
                  <p className="projectsLink">Deployed Website: <a className="projectsAnchor" href="https://jullyolima.github.io/Crystal-Collector/" target="_blank">Link (Github Pages)</a></p>
                </div>

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
        <Contact></Contact>








      </div>
    )
  }




}


export default Main;