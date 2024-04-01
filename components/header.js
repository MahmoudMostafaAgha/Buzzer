import React from "react";
import Navbar from "./navbar";
import * as styles from "../app/styles/home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
  return (
    <header className="page-header">
      <Navbar />
      <div className="header-text-section">
        <div className="main-header-text">
          <div className="text-line">
            <h1>FOOD</h1>
            <div>CAN</div>
          </div>
          <div className="text-line">
            <h1>MOOD</h1>
            <div>CHANGE</div>
          </div>
        </div>
        <p className="header-paragraph">
          Welcome to our exquisite salon, where beauty meets expertise. Step
          into a world of luxury and indulgence, where we are dedicated to
          enhancing your natural beauty and leaving you feeling radiant.
        </p>
        <div className="search-bar">
          <input type="search" placeholder="Search" className="search-input"/>
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
      </div>
    </header>


  );
};

export default Header;
