import React from "react";

function SearchBar({ search ,searchPlaceHolder}) {
  return (
    <div class="search-container">
      <input
        placeholder={searchPlaceHolder}
        onChange={(event) => search(event.target.value)}
      />
    </div>
  );
}

export default React.memo(SearchBar);
