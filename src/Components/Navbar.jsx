import React from "react";

function Navbar() {
  return (
    <div class="navbar-container">
      <span>
        <a href="">Home</a>
      </span>
      <span>
        <a href="">Country</a>
      </span>
      <span>
        <a href="">Currency</a>
      </span>
      <span>
        <a href="">Language</a>
      </span>
      <span>
        <a href="">Captial City</a>
      </span>
    </div>
  );
}

export default React.memo(Navbar);
