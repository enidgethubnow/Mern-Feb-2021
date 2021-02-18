import React, { Component } from "react";

class PersonCard extends Component {
  constructor(props) {
    super(props);
    this.state ={
      count: 25
    }
  }
  increment =() => {
    this.setState({count: this.state.count + 1});
  }

  render() {
    const { firstName, lastName, age, hairColor } = this.props;
    return (
      <div className="container">
        <h2>
          {lastName} {firstName}
        </h2>
        
        <p>Age: {age} {this.state.count} </p>
        <p>Hair Color: {hairColor} </p>
        <button onClick ={this.increment}className ="counter">Birthday Button for {firstName} {lastName}</button>
        
        
      </div>
    );
  }
}

export default PersonCard;