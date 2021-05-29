import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/HomeNavStyles.css";
import BrandLogo from "../assets/images/Group 8.png";

const HomeNav = () => {
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
            <li>Get Built</li>
            <li>Events</li>
            <li>Learn</li>
            <li>Join</li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default HomeNav;
