import React, { Component } from "react";

class PersonCard extends Component {
  render() {
    const { firstName, lastName, age, hairColor } = this.props;
    return (
      <div className="container">
        <h2>
          {lastName} {firstName}
        </h2>
        
        <p>Age: {age} </p>
        <p>Hair Color: {hairColor} </p><br></br>

        
      </div>
    );
  }
}

export default PersonCard;