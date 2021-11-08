import React, { useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.faInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
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
    </div>
    );
    
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 80 },
    { skill: "Node JS", ratingPercentage: 30 },
    { skill: "Express JS", ratingPercentage: 25 },
    { skill: "HTML", ratingPercentage: 88 },
    { skill: "CSS", ratingPercentage: 83 },
    { skill: "Bootstrap", ratingPercentage: 70 },
    { skill: "jQuery", ratingPercentage: 65 },
    { skill: "C++", ratingPercentage: 90 },
    { skill: "C", ratingPercentage: 80 },
    { skill: "MYSQL", ratingPercentage: 40 },
  ];

  const projectDetails = [
    {
      title: "Personal Poprtfolio Website",
      duration: { fromDate: "2021", toDate: "" },
      description:
        "A personal portfolio website to show all my details and projects at one place.",
      subHeading: "Technologies used: React JS, CSS",
    },
    {
      title: "Ecommerce Website",
      duration: { fromDate: "early 2020", toDate: "late 2020" },
      description:
        "Online ecommerce website for showcasing and selling products online with.",
      subHeading: "Technologies used: React JS, Bootstrap, Express JS, Node JS",
    },
    {
      title: "2048 Game",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "Single-player sliding tile puzzle game with amazing animations.",
      subHeading: "Technologies used: JavaScript, CSS Grid, Animations",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"RosNoU in Moscow,Russia"}
        subHeading={"BACHELOR OF COMPUTER SCIENCE AND TECHNOLOGY"}
        fromDate={"2018"}
        toDate={"2021"}
      />
      <ResumeHeading
        heading={"R&D Learning center"}
        subHeading={"IELTS Certificate of British Council"}
        fromDate={"2016"}
        toDate={"2017"}
      />
      <ResumeHeading
        heading={"Vocational College of Transport and Communication"}
        subHeading={"Diploma of Vocational College."}
        fromDate={"2014"}
        toDate={"2017"}
      />
    </div>,
    <div className="resume-screen-container" key="work-experience">
      <ResumeHeading
        heading={"iSystem IT Academy"}
        subHeading={"Foundation Programming and FrontEnd Mentor"}
        fromDate={"2021"}
        toDate={"present"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          Currently working as a Front-End and C++ Mentor in IT Academy, and
          also doing projects as a freelancer
        </span>
      </div>
      <div className="experience-description">
        <span className="resume-description-text">
          - Taught and helped 1000+ students to gain the basic and life-lasting
          skills of programming especially frontend skills.
        </span>
        <br />
        <span className="resume-description-text">
          - had classes in which students learn how to work with sensors, stream
          of electricity and LEDs via ARDUINO UNO.
        </span>
        <br />
        <span className="resume-description-text">
          I was in the team who created the official website of our Academy
        </span>
      </div>
      ,
      <div
        className="resume-screen-container programming-skills-container"
        key="programming-skills"
      >
        {programmingSkillDetails.map((skill, index) => (
          <div className="skill-parent" key={index}>
            <div className="heading-bullet"></div>
            <span>{skill.skill}</span>
            <div className="skill-percentage">
              <div
                style={{ width: skill.ratingPercentage + "%" }}
                className="active-percentage"
              ></div>
            </div>
          </div>
        ))}
      </div>
      ,
      <div className="resume-screen-container" key="projects">
        {projectDetails.map((projectDetails, index) => (
          <ResumeHeading
            key={index}
            heading={projectDetails.title}
            subHeading={projectDetails.subHeading}
            description={projectDetails.description}
            fromDate={projectDetails.duration.fromDate}
            toDate={projectDetails.duration.toDate}
          />
        ))}
      </div>
      ,
      <div className="resume-screen-container" key="interests">
        <ResumeHeading
          heading="Teaching"
          description="Apart being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing"
        />
        <ResumeHeading
          heading="Music"
          description="Listening to smoothing music is something i can never compromise with, skimming through Spotify's classic songs charts is at times the best stress reliever that i can get my hands on."
        />
        <ResumeHeading
          heading="Football"
          description="I am a huge fan of Football in terms of both playing and watching football matches. Additionally, i used to play football with my students on Sundays"
        />
      </div>
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + ")" },
    };
    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="oops,,, no internet connection"
          className="bullet-logo"
        />
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div
        style={carousalOffSetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((resumeDetail) => resumeDetail)}
      </div>
    );
  };

  return (
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullets-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
}
