import React from 'react';
import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <div className="container">

      <h1>The Weather App</h1>
      <Weather/>
      <footer>
        This project was code by Abuk Sedonia and it's {""}
        <a href="https://github.com/Abuk974/my-app-frank" target="blank"> 
        open-sourced on Github             
        </a>
      </footer>

      </div>

    </div>
  );
}

export default App;
