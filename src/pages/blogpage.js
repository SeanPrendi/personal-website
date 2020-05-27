import React from "react";
import Headshot from "../assets/Headshot.png";
import { withRouter, Link } from "react-router-dom";
import "../App.css";
import postlist from "../data/postlist.json";
import TopBar from "../components/topbar";

function BlogPage() {
  return (
    <div className="Blog">
      <TopBar />
      <div className="spacing" />
      <div className="headshotContainer">
        <img src={Headshot} className="blogphoto" alt="headshot" />
      </div>
      {postlist.map((post, idx) => {
        let name = post.name;
        let title = post.title;
        let date = post.date;
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              fontSize: "20px",
              justifyContent: "center"
            }}
            key={idx}
          >
            <div>{date}:&nbsp;&nbsp;</div>
            <Link to={"/" + name}> {title}</Link>
          </div>
        );
      })}
    </div>
  );
}

export default withRouter(BlogPage);
