import React,{useEffect, useState} from "react";
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  const [activeTab,setActiveTab]=useState('Country');
  function changeTab(tabName){
    setActiveTab(tabName);
  }
  return (
    <div class="navbar-container">
      <span className={activeTab=='Country'?'active-tab':''} onClick={()=>changeTab("Country")}>
        <Link to="/">Country</Link>
      </span>
      <span className={activeTab=='Currency'?'active-tab':''} onClick={()=>changeTab("Currency")}>
        <Link to="/currency">Currency</Link>
      </span>
      <span className={activeTab=='Language'?'active-tab':''} onClick={()=>changeTab("Language")}>
        <Link to="/language">Language</Link>
      </span>
      <span className={activeTab=='Captial'?'active-tab':''} onClick={()=>changeTab("Captial")}>
        <Link to="/capital">Captial City</Link>
      </span>
    </div>
  );
}

export default React.memo(Navbar);
