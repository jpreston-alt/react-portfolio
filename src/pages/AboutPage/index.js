import React from "react";
import "./style.css";
import Navbar from "../../components/Navbar";
import HomeHeader from "../../components/HomeHeader";
import AboutSection from "../../components/AboutSection";
import BackgroundImage from "../../components/BackgroundImage";

function AboutPage() {
    return (
        <BackgroundImage image="/assets/images/background/top-left.jpeg" >
            <Navbar />
            <HomeHeader />
            <AboutSection />
        </BackgroundImage>
    )
};

export default AboutPage;