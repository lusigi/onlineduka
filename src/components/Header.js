import React from "react";
import "./Header.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <nav className="header">
      <Link to="/">
        <img className="header__logo" src={logo} />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span>Hello,</span>
            <span>Sign In </span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span>Returns</span>
            <span>& Orders </span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span>Your</span>
            <span>Prime </span>
          </div>
        </Link>
      </div>
      {/*cart */}
    </nav>
  );
}

export default Header;
