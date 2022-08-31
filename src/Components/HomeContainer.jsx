import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
function HomeContainer() {
  const [allCountries, setAllCountries] = useState([]);
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      console.log(response.data);
      setAllCountries([...response.data]);
    });
  }, []);
  return (
    <div class="home-container">
      <div class="card-container">
        {allCountries !== undefined && allCountries.length != 0 ? (
          allCountries.map((item, index) => (
            <Card cardItem={item} key={index} />
          ))
        ) : (
          <h1>No Data!</h1>
        )}
      </div>
    </div>
  );
}

export default React.memo(HomeContainer);
