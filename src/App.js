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
      currencies
      capital
      region
      subregion
      languages
      population
      maps
      continents
      flags */}
    </div>
  );
}

export default App;
