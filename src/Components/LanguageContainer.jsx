import React, { useState, useEffect, useContext } from "react";
import Card from "./Card";
import { DataContext } from "./Context";
import SearchBar from "./SearchBar";
function LanguageContainer() {
  const [allCountries, setAllCountries] = useState([]);
  const content = useContext(DataContext);
  useEffect(() => setAllCountries(content), [content]);
  function searchLanguage(searchString) {
    console.log(searchString, content);
    if (searchString == "") setAllCountries(content);
    else
      setAllCountries([
        ...content.filter((item) => {
          try {
            let tempVar = Object.values(item.languages);
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
        search={searchLanguage}
        searchPlaceHolder="Search Language..."
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

export default React.memo(LanguageContainer);
