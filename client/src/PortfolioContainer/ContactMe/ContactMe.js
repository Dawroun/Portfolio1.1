import React from "react";
import Typical from "react-typical";

import imgBack from "../../../src/images/mailz.jpeg";
import load1 from "../../../src/images/load2.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.faInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div className="main-container" id={props.id || ""}>
      <ScreenHeading title={"Contact Me"} subHeading={"Let's Keep In Touch"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            {" "}
            <Typical
              loop={Infinity}
              steps={["Feel Free ✌🏻", 1000, "To Get In Touch 🤝", 1000]}
            />
          </h2>
          <a href="https://www.facebook.com/davron.abdukhakimov.50">
            <i className="fa fa-facebook-square"></i>
          </a>
          <a href="https://www.instagram.com/douwran/">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="https://www.youtube.com/channel/UCExbuFxW_p3VQq573KWS6UQ">
            <i className="fa fa-youtube-square"></i>
          </a>
          <a href="https://twitter.com/Davron87284843?s=09">
            <i className="fa fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
