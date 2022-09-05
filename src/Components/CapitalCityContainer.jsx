import React, { useState, useEffect, useContext } from "react";
import Card from "./Card";
import { DataContext } from "./Context";
import SearchBar from "./SearchBar";
function CapitalCityContainer() {
  const [allCountries, setAllCountries] = useState([]);
  const content = useContext(DataContext);
  useEffect(() => setAllCountries(content), [content]);
  function searchCapitalCity(searchString) {
    if (searchString == "") setAllCountries(content);
    else
      setAllCountries([
        ...content.filter((item) => {
          try {
            let tempVar = item.capital;
            for (let key of tempVar) {
              if (
                key.substring(0, searchString.length).toLowerCase() ==
                searchString.toLowerCase()
              )
                return true;
            }
            return false;
          } catch {
            return false;
          }
        }),
      ]);
  }
  return (
    <div class="home-container">
      <SearchBar
        search={searchCapitalCity}
        searchPlaceHolder="Search Calpital City..."
      />
      <div class="card-container">
        {allCountries !== undefined && allCountries.length != 0 ? (
          allCountries.map((item, index) => (
            <Card cardItem={item} key={index} />
          ))
        ) : (
          <h1 class="no-data">No Data!</h1>
        )}
      </div>
    </div>
  );
}

export default React.memo(CapitalCityContainer);
