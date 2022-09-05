import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import HomeContainer from "./Components/HomeContainer";
import CurrencyContainer from "./Components/CurrencyContainer";
import CapitalCityContainer from "./Components/CapitalCityContainer";
import LanguageContainer from "./Components/LanguageContainer";
import axios from "axios";
import { DataContext } from "./Components/Context";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

function App() {
  const [content, setContent] = useState([]);
  const baseUrl = "https://restcountries.com/v3.1/all";
  useEffect(() => {
    console.log("Calling API.....");
    axios.get(baseUrl).then((response) => {
      setContent([...response.data]);
      console.log(response);
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <DataContext.Provider value={content}>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomeContainer />} />
            <Route path="/currency" element={<CurrencyContainer />} />
            <Route path="/language" element={<LanguageContainer />} />
            <Route path="/capital" element={<CapitalCityContainer />} />
          </Routes>
        </DataContext.Provider>
      </div>
    </Router>
  );
}

export default App;
