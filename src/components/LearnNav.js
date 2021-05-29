import React, { Component } from "react";
import "../assets/css/LearnNavStyles.css";
import { Link } from "react-router-dom";
import BrandLogo from "../assets/images/Group 8.png";

class LearnNav extends Component {
  render() {
    return (
      <>
        <header>
          <nav>
            <Link to="/">
              <img className="brand-logo" src={BrandLogo} />
            </Link>
            <span className="social-links">
              <i class="fab fa-twitter"></i>
              <i class="fab fa-facebook-square"></i>
              <i class="fab fa-linkedin"></i>
              <i class="fab fa-instagram"></i>
            </span>
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <li>Startups</li>
              <li>Learn</li>
              <span className="search-box">
                <i class="far fa-search"></i>
              </span>
            </ul>
          </nav>
        </header>
      </>
    );
  }
}

export default LearnNav;
