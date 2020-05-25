import React from "react";
import { Parallax } from "react-parallax";
import { withRouter, Link } from "react-router-dom";
import BGphoto from "../assets/Photo.jpg";
import Resume from "../data/resume.pdf";
import "../App.css";

function BlogPage() {
  return (
    <div className="App">
      <Parallax bgImage={BGphoto} strength={600}>
        <div className="firstParallax">
          <div style={{ height: 500 }}>
            <h1 className="titleText">Test</h1>
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
    </div>
  );
}

export default withRouter(BlogPage);
