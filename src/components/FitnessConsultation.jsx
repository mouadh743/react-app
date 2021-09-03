import React, { Component } from "react";
import { Link } from "react-router-dom";
class FitnessConsultation extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Fitness Consultation</h1>
        <Link to="/training/fitnessConsultation/fitness">Redirect</Link>
      </div>
    );
  }
}

export default FitnessConsultation;
