
import './App.css';
import PersonCard from "./Components/PersonCard";

function App() {
  return (
    <div className="App">
      <PersonCard firstName ={"Enid"} lastName={"Peterson"} age ={"50"} hairColor={"Black"}/>
      <PersonCard firstName ={"Jane"} lastName={"Doe"} age ={"40"} hairColor={"Blond"}/>
      <PersonCard firstName ={"John"} lastName={"Smith"} age ={"30"}hairColor={"Gray"}/>
      <PersonCard firstName ={"Fillmore"} lastName={"Millard"} age ={"20"} hairColor={"Black"}/>
      
    </div>
  );
}

export default App;
