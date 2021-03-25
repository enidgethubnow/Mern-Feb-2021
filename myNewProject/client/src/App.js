
import {Router} from '@reach/router';
import Detail from './components/Detail';
import './App.css';
import ProductList from './view/ProductList';

app.delete('/api/person/:id', PersonController.deletePerson);



function App() {
  return (
    <div className="App">
    <Router>
      <Detail />
       <Detail path ="/api/person/:id" />
       <PersonForm  path ="/"/> */}
       <ProductList path ="/" />
       </Router>
       

    </div>
  );
}

export default App;
