import React from "react";
import "./style.css";
import Header from "../../components/Header";
import profilePic from "../../assets/images/me.png";

function AboutSection() {
  return (
    <div className="uk-container">
      <div className="uk-text-center">
        <div id="about-me-container">
          <div id="about-me">
            <Header title="About Me" />
            <p className="uk-text-justify about-me-desc">
              Hi! I'm Joanna, I'm a Software Engineer with a background in
              design. I am a full stack engineer who specializes in building
              fast and user friendly front end applications with React
              frameworks such as Next.js.
              <br />
              <br />
              I've spent the last 2.5 years of my career working in startups
              where I've learned to adapt and pick up on new skills and
              technologies very quickly. In my most recent position I was part
              of a small team that built a platform to tokenize real world
              assets and gives borrowers access to capital through decentralized
              finance. As a member of the original team I got to be a part of
              taking the application from concept to production.
              <br />
              <br />
              I enjoy working in fast paced working environments, learning new
              skills, and merging my background in design with my technical
              skills to build impactful user experiences on the web.
              <br />
              <br />
            </p>
            <img src={profilePic} alt="Me" style={{ width: 175 }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
