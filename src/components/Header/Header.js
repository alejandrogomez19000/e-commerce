import React from 'react';
import { Link } from "react-router-dom"
// import Logo from "../Logo/Logo";
import "./Header.scss";

const Header = () =>  {
    return (
      <nav className="container-fluid header">
        <div className="right">
          <div className="logo"> Logo</div>
        </div>
        <div className="left">
          <ul>
            <li className="item">
              <Link to="/">
                Home
              </Link>
            </li>
            <li className="item">
              <Link to="/contact">
                Contact Us
              </Link>
            </li>
            <li className="item">
              <Link to="/product-list">
                Catalogue
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
}

export default Header;