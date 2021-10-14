import React from "react";
import "./intro.css";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My Name is </h2>
          <h1 className="i-name">Dawroun</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Designer</div>
              <div className="i-title-item">Photgrapher</div>
              <div className="i-title-item">Content Creater</div>
            </div>
          </div>
          <div className="i-desc">
            can make your life easier by creating a user-friendly content
            management system to control your content.
          </div>
        </div>
      </div>
      <div className="i-right">right</div>
    </div>
  );
};

export default Intro;
