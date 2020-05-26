import React from "react";
import Headshot from "../assets/Headshot.png";
import { withRouter, Link } from "react-router-dom";
import "../App.css";
import postlist from "../data/postlist";

function BlogPage() {
  return (
    <div className="Blog">
      <div className="spacing" />
      <div className="headshotContainer">
        <img src={Headshot} className="blogphoto" alt="headshot" />
      </div>
      {postlist.map((post, idx) => {
        return (
          <p style={{fontSize: "20px"}} key={idx} >
            <Link to={"/" + post}>{post}</Link>
          </p>
        );
      })}
    </div>
  );
}

export default withRouter(BlogPage);
