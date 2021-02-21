import React, { useState }from "react";

const PersonCard = (props) => {
  const { lastName, firstName, age, hairColor } = props;
  const [increment, setIncrement] = useState (25);
 
  

  
    return (
      <div className="container">
        <h2>
          {lastName} {firstName}
        </h2>
        
        <p>Age: {age} </p>
        <p>Hair Color: {hairColor} </p>

       <button onClick = {() => setIncrement(increment + 1)}>{firstName} {lastName}</button>
        
         {/* <button onClick ={increment}>Birthday Button for {firstName} {lastName}</button>  */}
        
      </div>
    )
}
  
  export default PersonCard;