
import './App.css';
import PersonCard from "./Components/PersonCard";

function App() {
  return (
    <div className="App">
      <PersonCard firstName ={"Enid"} lastName={"Peterson"} age ={""} hairColor={"Black"}
       />
      
      <PersonCard firstName ={"Jane"} lastName={"Doe"} age ={""} hairColor={"Blond"}/>
      <PersonCard firstName ={"John"} lastName={"Smith"} age ={""}hairColor={"Gray"}/>
      <PersonCard firstName ={"Fillmore"} lastName={"Millard"} age ={""} hairColor={"Black"}/>
      
    </div>
  );
}

export default App;
