import React from "react"
import Pokecard from "./components/Pokecard";
import './App.css';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <Pokecard  id = {4}
          name = "Charmander"
          type = "fire"
          exp = {62} />
      </header>
    </div>
  );
}

export default App;
