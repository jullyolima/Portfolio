import React from "react";


class Projects extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
  
      }
    }

    render() {
        return (
            <div id="projectsBox" className="modal">

          <div id="projectsContent" className="modal-content">
            <span className="close">&times;</span>

            <h6 className="boxHeader">My Projects</h6>

            {/* Container holding all projects */}
            <div id="projectsContainer">

              {/* Pokedecks Project */}
              <div className="projectsSection">

                <h6 className="projectsTitle">Pokedecks</h6>
                <img className="projectsImg" alt="Pokedecks" src={require('../main/assets/pokedecks.PNG')}></img>
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
                <img className="projectsImg" alt="Doctor Finder" src={require('../main/assets/doctorFinder.PNG')}></img>
                <p className="projectsDesc">A doctor search engine that displays the nearest doctors around you based on your search criteria. It utilizes the Google Maps API, a doctor database API, and a recent medical news API.</p>

                <div className="projectsLinkContainer">
                  <p className="projectsLink">Github Repo: <a className="projectsAnchor" href="https://github.com/jullyolima/Doctor-Finder" target="_blank">Link</a></p>
                  <br></br>
                  <p className="projectsLink">Deployed Website: <a className="projectsAnchor" href="https://jullyolima.github.io/Doctor-Finder/" target="_blank">Link (Github Pages)</a></p>
                </div>

              </div>


              <div className="projectsSection">

                <h6 className="projectsTitle">Crystal Collector</h6>
                <img className="projectsImg" alt="Doctor Finder" src={require('../main/assets/crystalCollector.PNG')}></img>
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
        )
    }



}

export default Projects;