import React from "react";
import "./Header.css";
import apeLogo from "../../assets/header/apeLogo.png";
import searchIcon from "../../assets/header/search.png";
import themeSwitchIcon from "../../assets/header/theme-switch.png";
const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={apeLogo} className="apeLogo" alt="" />
      </div>
      <div className="searchBar">
        <div className="searchContainer">
          <img src={searchIcon} alt="" />
        </div>
        <input
          type="text"
          className="searchInput"
          placeholder="Collection, item or user ..."
        />
      </div>

      <div className="headerItems">
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>

      <div className="headerActions">
        <div className="themeSwitchContainer">
          <img src={themeSwitchIcon} alt="" />
        </div>
      </div>

      <div className="loginButton">GET IN</div>
    </div>
  );
};

export default Header;
