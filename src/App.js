import "./App.css";
import { useEffect,useState } from "react";
import Navbar from "./Components/Navbar";
import HomeContainer from "./Components/HomeContainer";
import axios from "axios";
import { DataContext } from "./Components/Context";
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
    <div className="App">
      <DataContext.Provider value={content}>
        <Navbar />
        <HomeContainer />
      </DataContext.Provider>
    </div>
  );
}

export default App;
