import React from "react";
import Typical from "react-typical";

export const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
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

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello I'm <span className="highlighted-text">Dawroun</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Ethusiastic Dev",
                    1000,
                    "Full Stack Developer",
                    1000,
                    "React Developer",
                    1000,
                    "Cross Platform v",
                    1000,
                    "Content Maker",
                    1000,
                  ]}
                />
              </h1>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
