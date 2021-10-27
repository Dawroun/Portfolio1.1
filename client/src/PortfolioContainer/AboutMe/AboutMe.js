import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.faInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const SCREEN_CONSTANTS = {
      description: "Full Stack Web and Mobile Developer",
      highlights: {
        bullets: [
          "Full Stack Web and Mobile Development",
          "Interactive Front End design",
          "React and React Native",
          "Redux for State Management",
          "Building APIs"
        ],
        heading: "Here are a Few Highlights:"
      }
    }

    const renderHighlight = () => {
      return (
        SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
          <div className="highlight" key ={i}>
            <div className="highlight-blob"></div>
            <span>{value}</span>
          </div>
        ))
      )
    }

  return (
    <div className="about-me-container screen-container" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">{SCREEN_CONSTANTS.description}</span>
            <div className="about-me-highlights">
              <div className="highlights-heading">
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
