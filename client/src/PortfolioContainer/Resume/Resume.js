import React, { useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  const ResumeHeading = (props) => {
    <div className="resume-heading">
      <div className="resume-main-heading">
        <div className="heading-bullet">
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + " " + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    </div>;
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillDetails = [
      {skill: "JavaScript", ratingPercentage: 85},
      {skill: "React JS", ratingPercentage: 80},
      {skill: "Node JS", ratingPercentage: 30},
      {skill: "Express JS", ratingPercentage: 25},
      {skill: "HTML", ratingPercentage: 88},
      {skill: "CSS", ratingPercentage: 83},
      {skill: "Bootstrap", ratingPercentage: 70},
      {skill: "jQuery", ratingPercentage: 65},
      {skill: "C++", ratingPercentage: 90},
      {skill: "C", ratingPercentage: 80},
      {skill: "MYSQL", ratingPercentage: 40},
  ];

  const projectDetails =[
    {
      title: "Personal Poprtfolio Website",
      duration: { fromDate: "2021", toDate: ""}
    }
  ]

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.faInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
      </div>
    </div>
  );
}
