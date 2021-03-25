
import {Router} from '@reach/router';
import Detail from './components/Detail';
import './App.css';
import ProductList from './view/ProductList';



function App() {
  return (
    <div className="App">
    <Router>
      <Detail />
       <Detail path ="details/id" />
       {/* <PersonForm  path ="/"/> */}
       <ProductList path ="/" />
       </Router>

    </div>
  );
}

export default App;
