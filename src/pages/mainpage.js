import React from "react";
import { Parallax } from "react-parallax";
import { withRouter } from "react-router-dom";
import BGphoto from "../assets/Photo.jpg";
import Hack112 from "../assets/Hack-112.jpg";
import Frisbee from "../assets/Frisbee.png";
import Headshot from "../assets/Headshot.png";
import MomentsLogo from "../assets/momentsCrop.png";
import NextUpLogo from "../assets/nextUpLogo.png";
import Calorimager from "../assets/Apple.png";
import Resume from "../data/resume.pdf";
import { Link } from "react-router-dom";
import useWindowDimensions from "../hooks/useWindowDimensions";
import "../App.css";

function MainPage() {
  const { height, width } = useWindowDimensions();
  const desktop = height * 0.7 <= width; // Good proxy for being on a desktop
  return (
    <div className="App">
      {/* eslint-disable-next-line  */}
      <a id="">
        <Parallax bgImage={BGphoto} strength={600}>
          <div className="firstParallax">
            <div>
              <h1
                className="titleText"
                style={{ fontSize: desktop ? "" : "5vmin" }}
              >
                Sean Prendi <br />
                Discrete Math and Logic <br /> Carnegie Mellon Class of 2022
              </h1>
              <div className="buttonContainer">
                <a href={Resume}>
                  <div
                    class="ghost-button"
                    style={{
                      width: desktop ? "20vmin" : "15vmax",
                      fontSize: desktop ? "3vmin" : "5vmin"
                    }}
                  >
                    Resume
                  </div>
                </a>
              </div>
            </div>
          </div>
        </Parallax>
      </a>
      {/* eslint-disable-next-line  */}
      <a id="About">
        <Parallax strength={0}>
          <div className="secondParallax">
            <div
              className="aboutMeContainer"
              style={{
                flexDirection: desktop ? "" : "column",
                paddingLeft: desktop ? "" : "2vh",
                paddingRight: desktop ? "" : "2vh",
                paddingBottom: desktop ? "" : "2vh"
              }}
            >
              <div
                className="headshotContainer"
                style={{ paddingTop: desktop ? "" : "3vh" }}
              >
                <img
                  src={Headshot}
                  className="headshot"
                  alt="headshot"
                  style={{
                    width: desktop ? "" : "30vh",
                    height: desktop ? "" : "30vh"
                  }}
                />
              </div>
              <div
                className="aboutMeContent"
                style={{
                  textAlign: desktop ? "" : "center",
                  paddingRight: desktop ? "" : "0"
                }}
              >
                <h1 className="aboutMeText">About Me</h1>
                <h2
                  className="aboutMeBody"
                  style={{ fontSize: desktop ? "" : "20px" }}
                >
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
      <a id="Projects">
        <Parallax strength={200}>
          <div className="parallaxFour">
            <div className="projectsContainer">
              <h1 className="projectsHeaderText">Projects</h1>
              {/* Moments */}
              <div
                className={
                  desktop
                    ? "leftProjectContainer"
                    : "leftMobileProjectContainer"
                }
              >
                <a
                  href="https://github.com/jchengjr77/moments-app"
                  className="logoWrapper"
                  style={{ alignSelf: desktop ? "" : "center" }}
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
              <div
                className={
                  desktop
                    ? "rightProjectContainer"
                    : "rightMobileProjectContainer"
                }
              >
                <div className="rightProjectDescCont">
                  <h1 className="projectTitleText">Next-Up</h1>
                  <h2 className="projectBodyText">
                    Next-Up is a spotify web queueing app built for the CMU
                    computer science Hack-112 hackathon. It's built using a
                    react front-end with a flask backend, connected via the
                    axios toolkit.
                  </h2>
                  <h3
                    style={{
                      fontWeight: "300",
                      marginTop: 5,
                      fontSize: 17,
                      textAlign: "left"
                    }}
                  >
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
                  style={{ alignSelf: desktop ? "" : "center" }}
                >
                  <img
                    src={NextUpLogo}
                    className="projectLogo"
                    alt="NextUpLogo"
                  />
                </a>
              </div>
              {/* Calorimager */}
              <div
                className={
                  desktop
                    ? "leftProjectContainer"
                    : "leftMobileProjectContainer"
                }
              >
                <a
                  href="https://github.com/SeanPrendi/Calorimager"
                  className="logoWrapper"
                  style={{ alignSelf: desktop ? "" : "center" }}
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
            <div className="projectsHeaderText" />
          </div>
        </Parallax>
      </a>
      <Parallax bgImage={Frisbee} strength={500}>
        <div className="parallaxFive"></div>
      </Parallax>
      {/* eslint-disable-next-line  */}
      <a id="BlogPosts">
        <Parallax strength={200}>
          <div
            className="parallaxSix"
            style={{ maxHeight: desktop ? "" : "1000vh" }}
          >
            <div
              className="blogPostsContainer"
              style={{ paddingBottom: desktop ? "" : "3vh" }}
            >
              <div style={{ width: desktop ? "60vw" : "85vw" }}>
                <h1 className="projectsHeaderText">Blog Posts</h1>
                <div className="projectsHeaderText" />
                <div>
                  <h2
                    className="blogSectionText"
                    style={{ fontSize: desktop ? "" : "5vmin" }}
                  >
                    I've decided to start a blog! I'll be writing about all
                    kinds of technical problems and ideas that spark my
                    interest. It will mostly be about math, computer science,
                    and programming concepts that I have a lot to say about and
                    want to share. I'm hoping to write extended series exploring
                    some topics I know about, and hopefully learning even more
                    about them in the process. Very broadly, some of these
                    topics include branches of math like set theory and order
                    theory, and some branches of computer science such as
                    garbage collection and concurrency.
                  </h2>
                  <h2
                    className="blogSectionText"
                    style={{ fontSize: desktop ? "" : "5vmin" }}
                  >
                    Additionally, this semester I will be TAing 21-127, Concepts
                    of Mathematics. As such, I will be posting a series of blog
                    posts exploring the topics covered in the course week to
                    week. These will not cover topics as in-depth as lectures or
                    recitations, but I hope that they will be useful to my
                    students for understanding topics more intuitively, as well
                    as getting some sense for how I think about these ideas.
                  </h2>
                  <h2
                    className="blogSectionText"
                    style={{ fontSize: desktop ? "" : "5vmin" }}
                  >
                    For the time being, you can click{" "}
                    <Link to="/blog">here</Link> or on the button in the top bar
                    to navigate to my blog, and explore the different things
                    I've posted so far!
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
