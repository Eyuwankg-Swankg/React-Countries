import React, { useState, useEffect ,useContext} from "react";
import Card from "./Card";
import { DataContext } from "./Context";
import SearchBar from "./SearchBar";
function HomeContainer() {
  const [allCountries, setAllCountries] = useState([])
  const content = useContext(DataContext);
  useEffect(() => setAllCountries(content), [content]);
  function searchAll(searchString) {
    if (searchString == "") setAllCountries(content);
    else
    setAllCountries([
        ...content.filter((item) => {
          return (
            item.name.common.substring(0, searchString.length).toLowerCase() ==
            searchString.toLowerCase()
          );
        }),
      ]);
  }
  return (
    <div class="home-container">
      <SearchBar search={searchAll} searchPlaceHolder="Search Countries..." />
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

export default React.memo(HomeContainer);
