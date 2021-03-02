import React, { useState } from "react";

import "./App.css";
import Box from "./Components/Box";
import Input from "./Components/Input";

function App() {
  const [box, setBox] = useState({
    colors: [],
  });

  return (
      <div className="App">
        <div className="container">
        
          <h1 className="display-4 my-3">Enter the Name of your Favorite Color</h1>
          <Input setBox={setBox} box={box} />
          <div className="row">
            {box.colors.map((color) => (
              <Box color={color} />
            ))}
          </div>
        </div>
      </div>
  );
}

export default App;