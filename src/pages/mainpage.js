import React from "react";
import { Parallax } from "react-parallax";
import { withRouter, Link } from "react-router-dom";
import BGphoto from "../assets/Photo.jpg";
import Hack112 from "../assets/Hack-112.jpg";
import Headshot from "../assets/Headshot.png";
import MomentsLogo from "../assets/momentsCrop.png";
import NextUpLogo from "../assets/nextUpLogo.png";
import Calorimager from "../assets/Apple.png";
import Resume from "../data/resume.pdf";
import "../App.css";
import TopBar from "../components/topbar";

function MainPage() {
  return (
    <div className="App">
      <TopBar />
      {/* eslint-disable-next-line  */}
      <a name="">
        <Parallax bgImage={BGphoto} strength={600}>
          <div className="firstParallax">
            <div style={{ height: 500 }}>
              <h1 className="titleText">
                Sean Prendi <br />
                Discrete Math and Logic <br /> Carnegie Mellon Class of 2022
              </h1>
              <div className="buttonContainer">
                <a href={Resume}>
                  <div class="ghost-button">Resume</div>
                </a>
                <Link to="/blog">
                  <div class="ghost-button">blog</div>
                </Link>
              </div>
            </div>
          </div>
        </Parallax>
      </a>
      {/* eslint-disable-next-line  */}
      <a name="About">
        <Parallax strength={0}>
          <div className="secondParallax">
            <div className="aboutMeContainer">
              <div className="headshotContainer">
                <img src={Headshot} className="headshot" alt="headshot" />
              </div>
              <div className="aboutMeContent">
                <h1 className="aboutMeText">About Me</h1>
                <h2 className="aboutMeBody">
                  Hi there! My name is Sean Prendi.
                  <br />
                  <br />
                  I'm sophomore at Carnegie Mellon studying mathematics looking
                  to explore the intersection of math, software engineering, and
                  computer systems. I'm interested in set theory and the
                  foundations of math, systems level software engineering, and
                  machine learning and its applications. You can checkout my{" "}
                  <a href={Resume}>resume</a>,{" "}
                  <a href="https://www.linkedin.com/in/sean-prendi-904943162/">
                    LinkedIn
                  </a>
                  , and <a href="https://github.com/SeanPrendi"> Github</a> to
                  learn more about my experience and achievements.
                  <br />
                  <br />
                  Outside the classroom, I love to learn and explore. Some of my
                  hobbies include rock climbing, hiking, caving, and playing
                  ultimate frisbee. I'm always looking for new experiences, from
                  new programming projects to explore, to new ways to get
                  outside and be active.
                </h2>
              </div>
            </div>
          </div>
        </Parallax>
      </a>
      <Parallax bgImage={Hack112} strength={600}>
        <div className="parallaxThree"></div>
      </Parallax>
      {/* eslint-disable-next-line  */}
      <a name="Projects">
        <Parallax strength={200}>
          <div className="parallaxFour">
            <div className="projectsContainer">
              <h1 className="projectsHeaderText">Projects</h1>
              {/* Moments */}
              <div className="leftProjectContainer">
                <a
                  href="https://github.com/jchengjr77/moments-app"
                  className="logoWrapper"
                >
                  <img
                    src={MomentsLogo}
                    className="projectLogo"
                    alt="MomentsLogo"
                  />
                </a>
                <div className="leftProjectDescCont">
                  <h1 className="projectTitleText">Moments</h1>
                  <h2 className="projectBodyText">
                    Moments is cross-platform social media app designed to be
                    user focused and facilitate happiness and remind you of the
                    good moments in your life. It's built using react native
                    with expo for the front-end and firebase for data storage.{" "}
                    <br />
                  </h2>
                </div>
              </div>
              {/* Next Up */}
              <div className="rightProjectContainer">
                <div className="rightProjectDescCont">
                  <h1 className="projectTitleText">Next-Up</h1>
                  <h2 className="projectBodyText">
                    Next-Up is a spotify web queueing app built for the CMU
                    computer science Hack-112 hackathon. It's built using a
                    react front-end with a flask backend, connected via the
                    axios toolkit.
                  </h2>
                  <h3 style={{ fontWeight: "300", marginTop: 5, fontSize: 17, textAlign: "left" }}>
                    <b>Collaborators: </b>
                    <a href="https://vigneshrajmohan.github.io/">
                      Vignesh Rajmohan
                    </a>
                    , <a href="https://diegosanmiguel.me/">Diego San Miguel</a>,{" "}
                    <a href="https://www.maehoad.com/">Mae Hoad</a>
                  </h3>
                </div>
                <a
                  href="https://github.com/diegofinni/NextUp"
                  className="logoWrapper"
                >
                  <img
                    src={NextUpLogo}
                    className="projectLogo"
                    alt="NextUpLogo"
                  />
                </a>
              </div>
              {/* Calorimager */}
              <div className="leftProjectContainer">
                <a
                  href="https://github.com/SeanPrendi/Calorimager"
                  className="logoWrapper"
                >
                  <img
                    src={Calorimager}
                    className="projectLogo"
                    alt="CalorimagerLogo"
                  />
                </a>
                <div className="leftProjectDescCont">
                  <h1 className="projectTitleText">Calorimager</h1>
                  <h2 className="projectBodyText">
                    Calorimager is a computer-vision based calorie estimation
                    software. Developed in python, it utilizes a tensor-flow
                    deeplearning model for classifying fruits in combination
                    with an OpenCV based volume estimation algorithm. It then
                    estimates the number of calories in a piece food based on
                    its size and type.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </Parallax>
      </a>
    </div>
  );
}

export default withRouter(MainPage);
