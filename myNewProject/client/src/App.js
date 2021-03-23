import React from 'react';

import Detail from './components/Detail';
import PersonForm from './components/PersonForm';
import './App.css';
import ProductList from './components/ProductList';



function App() {
  return (
    <div className="App">
      <Detail />
       
       <PersonForm />
       <ProductList />
     

    </div>
  );
}

export default App;
