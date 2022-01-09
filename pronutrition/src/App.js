import './App.css';
import React from 'react';
import './Component/Style.css';
import FoodBox from './Component/FoodBox';



function App() {
  return (
    <React.Fragment>
    <div className="App">
      <nav>     
      <h1 id='title' >Pro-Nutrition</h1>
      </nav>
      <FoodBox/>

      
    </div>
    </React.Fragment>
  );
  
}

export default App;
