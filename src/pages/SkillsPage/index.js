import React from "react";
import "./style.css";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import CardContainer from "../../components/CardContainer";
import BackgroundImage from "../../components/BackgroundImage";

function SkillsPage() {
    return (
        <BackgroundImage image="/assets/images/background/green-leaves.jpg" >
            <Navbar />
            <Header padding={70} title="Technical Skills" />
            <CardContainer>
                <div className="uk-child-width-1-3@m uk-grid-match" uk-grid="true"
                    uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 250; repeat: true" id="skills-section">
                    <div className="uk-text-center client-side-card">
                        <div className="uk-card uk-card-default skills-card">
                            <div className="uk-card-body">
                                <h3 className="uk-card-title">Client-Side</h3>
                                <ul className="uk-list uk-list-divider">
                                    <li>HTML 5</li>
                                    <li>CSS 3</li>
                                    <li>JavaScript</li>
                                    <li>jQuery</li>
                                    <li>Bootstrap</li>
                                    <li>Bulma</li>
                                    <li>UIKit</li>
                                </ul>
                            </div>
                            <div className="uk-card-footer portfolio-card-footer skills-card-footer">
                                <div>
                                    <span className="skills-icon" uk-icon="icon: desktop; ratio: 1.5"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="uk-text-center server-side-card">
                        <div className="uk-card uk-card-default skills-card">
                            <div className="uk-card-body">
                                <h3 className="uk-card-title">Server-Side</h3>
                                <ul className="uk-list uk-list-divider">
                                    <li>Node.js</li>
                                    <li>npm</li>
                                    <li>Express.js</li>
                                    <li>Handlebars</li>
                                    <li>MySQL</li>
                                    <li>Sequelize</li>
                                    <li>MongoDB</li>
                                </ul>
                            </div>
                            <div className="uk-card-footer portfolio-card-footer skills-card-footer">
                                <div>
                                    <span className="skills-icon" uk-icon="icon: server; ratio: 1.5"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="uk-text-center design-card">
                        <div className="uk-card uk-card-default skills-card design-card">
                            <div className="uk-card-body">
                                <h3 className="uk-card-title">Design</h3>
                                <ul className="uk-list uk-list-divider">
                                    <li>Adobe InDesign</li>
                                    <li>Adobe Xcode</li>
                                    <li>Adobe Illustrator</li>
                                    <li>Sketchup</li>
                                    <li>AutoCAD</li>
                                </ul>
                            </div>
                            <div className="uk-card-footer portfolio-card-footer skills-card-footer design-card-footer">
                                <div>
                                    <span className="skills-icon" uk-icon="icon: paint-bucket; ratio: 1.5"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContainer>
        </BackgroundImage>
    )
};

export default SkillsPage;