import { Component } from "react";
import "../css/PilSkills.css";

class PilSkills extends Component{
  render(){
    return(
      <div className="PilSkills d-flex justify-content-center">
        <p className="text-white fw-bolder d-flex align-items-center skill-text">{this.props.skill}</p>
      </div>
    )
  }
}

export default PilSkills;