import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../assets/css/LearnBodyStyles.css";
import LearnNav from "./LearnNav";
import IncubatorIcon from "../assets/images/Frame 313.png";

class LearnBody extends Component {
  render() {
    return (
      <>
        <LearnNav />
        <section>
          <div className="learn-body-card">
            <div className="learn-body-card-brand">
              <Link to="/">
                <i class="fad fa-arrow-circle-left"></i>
              </Link>
              <img src={IncubatorIcon} />
              <span className="learn-body-card-title">Mangoswap</span>
            </div>
            <div className="learn-body-card-progress">
              <p className="learn-body-card-progress-title">Fund raised</p>
              <span className="learn-body-card-progress-text">
                50% complete
              </span>
              <p className="learn-body-card-progress-funds">
                $200,000/$400,000
              </p>
              <div className="learn-body-progress-bar" />
              <div className="learn-body-progress-bar-half" />
            </div>
            <div className="learn-body-card-link">
              <p className="learn-body-fund-startup-link">Fund Startup</p>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default LearnBody;
