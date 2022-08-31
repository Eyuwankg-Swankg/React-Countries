import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar"
import HomeContainer from "./Components/HomeContainer"


function App() {
  return (
    <div className="App">
      <Navbar/>
      <HomeContainer/>
      {/* name  
      capital
      region
      subregion
      continents
      currencies
      population
      languages
      maps
      flags */}
    </div>
  );
}

export default App;
