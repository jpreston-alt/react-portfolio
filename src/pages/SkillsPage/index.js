import React from "react";
import "./style.css";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import CardContainer from "../../components/CardContainer";
import BackgroundImage from "../../components/BackgroundImage";
import SkillsCard from "../../components/SkillsCard";
import { clientSide, serverSide, design, other } from "../../utils/skillsData";
import imageURL from "../../assets/images/background/green-leaves.jpg";

function SkillsPage(props) {
  return (
    <BackgroundImage image={imageURL}>
      <Navbar />
      <Header padding={70} title="Technical Skills" />
      <CardContainer>
        <div
          className="uk-child-width-1-3@m uk-grid-match"
          uk-grid="true"
          id="skills-section"
        >
          <SkillsCard
            skills={clientSide}
            title="Client Side"
            icon="desktop"
            name="client"
            animate="slide-left"
          />
          <SkillsCard
            skills={serverSide}
            title="Server Side"
            icon="server"
            name="server"
            animate="slide-up"
          />
          <SkillsCard
            skills={other}
            title="Other"
            icon="more"
            name="other"
            animate="slide-right"
          />
          <SkillsCard
            skills={design}
            title="Design"
            icon="paint-bucket"
            name="design"
            animate="slide-right"
          />
        </div>
      </CardContainer>
    </BackgroundImage>
  );
}

export default SkillsPage;
