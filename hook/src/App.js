import React, { useState } from "react";
import './App.css';
import Form from "./Components/Form";
import Results from "./Components/Results";

function App() {
  
const [state, setState] = useState ({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword:"",

});

  return (
    <div className="App">
      <Form inputs= {state} setInputs ={setState}/>
      <Results data ={state}/>
     
      
    </div>
  );
}

export default App;
