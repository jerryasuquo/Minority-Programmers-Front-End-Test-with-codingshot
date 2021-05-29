import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/IncubatorCardStyles.css";
import IncubatorIcon from "../assets/images/Frame 313.png";

const IncubatorCard = () => {
  return (
    <>
      <div className="incubator-card">
        <img src={IncubatorIcon} />
        <span className="incubator-card-title">Mangoswap</span>
        <p className="incubator-card-text">
          The mango swap coin is the future for crypto currency, it will allow
          user share and transact over defi networks with less fees.
        </p>
        <p className="incubator-card-progress-title">Fund raised</p>
        <span className="incubator-card-progress-text">50% complete</span>
        <p className="incubator-card-progress-funds">$200,000/$400,000</p>
        <div className="progress-bar" />
        <div className="progress-bar-half" />
        <div className="fund-startup-link">Fund Startup</div>

        <Link to="/learn-more">
          <div className="learn-more-link">Learn more</div>
        </Link>
      </div>
    </>
  );
};

export default IncubatorCard;
