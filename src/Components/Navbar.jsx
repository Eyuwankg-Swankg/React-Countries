import React from "react";
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  return (
    <div class="navbar-container">
      <span>
        <Link to="/">Country</Link>
      </span>
      <span>
        <Link to="/currency">Currency</Link>
      </span>
      <span>
        <Link to="/Language">Language</Link>
      </span>
      <span>
        <Link to="/Captial_City">Captial City</Link>
      </span>
    </div>
  );
}

export default React.memo(Navbar);
