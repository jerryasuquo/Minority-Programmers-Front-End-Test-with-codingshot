import React, { Component } from "react";
import "../assets/css/HomeBodyStyles.css";
import AdviceImg from "../assets/images/Rectangle 840.png";
import VenturesImg from "../assets/images/Rectangle 849.png";
import HelpImg from "../assets/images/Rectangle 842.png";
import IncubatorCard from "./IncubatorCard";
import LoadMoreLink from "./LoadMoreLink";
import HomeNav from "./HomeNav";

export default class HomeBody extends Component {
  render() {
    var cardListArr = this.props.cardList.map((card) => {
      return <IncubatorCard />;
    });

    return (
      <>
        <HomeNav />
        <section className="banner">
          <div className="banner-img">
            <div className="banner-info">
              <p className="banner-text">
                Invest directly into minority innovations.
              </p>
              <div className="banner-link">View Startups</div>
            </div>
          </div>
        </section>

        <section className="main">
          <div className="main-text">
            <h1>Featured Startups</h1>
            <p>Invest in the next billion dollar company today</p>
          </div>
          <div className="main-card">
            <i class="fad fa-arrow-circle-left"></i>
            <IncubatorCard />
            <IncubatorCard />
            <IncubatorCard />
            <IncubatorCard />
            {/* <div>{cardListArr}</div> */}
            <i class="fad fa-arrow-circle-right"></i>
          </div>
        </section>

        <section className="main-photo">
          <img src={AdviceImg} />
          <div className="main-photo-link main-photo-advice">
            Advice a startup
          </div>
          <img src={VenturesImg} />
          <div className="main-photo-link main-photo-ventures">
            Join Minority Ventures Cohort
          </div>
          <img src={HelpImg} />
          <div className="main-photo-link main-photo-help">
            Help &#60;Code /&#62;
          </div>
        </section>

        <section className="main-bottom">
          <div className="main-bottom-text">
            <h1>Upcoming Startups</h1>
            <p>
              These visionary companies and disruptors are on their journey to
              change the world.
            </p>
          </div>
          <div className="main-bottom-card">
            <IncubatorCard />
            <IncubatorCard />
            <IncubatorCard />
            <IncubatorCard />
            {/* {cardListArr} */}
          </div>
        </section>

        <section>
          <div className="main-bottom-card">
            {/* <IncubatorCard />
            <IncubatorCard />
            <IncubatorCard />
            <IncubatorCard />
            <IncubatorCard /> */}
            {cardListArr}
          </div>
        </section>

        <section>
          <div className="main-bottom-card">
            {/* <IncubatorCard />
            <IncubatorCard />
            <IncubatorCard />
            <IncubatorCard />
            <IncubatorCard /> */}
            {cardListArr}
          </div>
        </section>

        <LoadMoreLink />
      </>
    );
  }
}

HomeBody.defaultProps = {
  cardList: [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
  ],
};
