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
      <img className="resume" alt="Resume" src={require('./assets/resumeHouse.gif')}></img>








      </div>
    )
  }




}


export default Main;