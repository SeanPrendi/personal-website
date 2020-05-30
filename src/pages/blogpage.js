import React from "react";
import Headshot from "../assets/Headshot.png";
import { withRouter, Link, useLocation } from "react-router-dom";
import "../App.css";
import postlist from "../data/postlist.json";
import Tooltip from "@material-ui/core/Tooltip";

function getFilter(location) {
  switch (location) {
    case "/blog":
      return "";
    case "/blog/math":
      return "math";
    case "/blog/cs":
      return "cs";
    case "/blog/concepts":
      return "concepts";
    case "/blog/misc":
      return "misc";
    default:
      return "";
  }
}

function BlogPage() {
  let location = useLocation();
  let filter = getFilter(location.pathname);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center"
      }}
    >
      <div className="Blog">
        <div className="spacing" />
        <div className="headshotContainer">
          <img src={Headshot} className="blogphoto" alt="headshot" />
        </div>
        <div style={{ paddingTop: "2vh" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              fontSize: "18px"
            }}
          >
            <Link to="/blog">All</Link>&nbsp;&nbsp;&#124;&nbsp;&nbsp;
            <Link to="/blog/math">Math</Link>&nbsp;&nbsp;&#124;&nbsp;&nbsp;
            <Link to="/blog/cs">CS</Link>&nbsp;&nbsp;&#124;&nbsp;&nbsp;
            <Link to="/blog/concepts">Concepts</Link>
            &nbsp;&nbsp;&#124;&nbsp;&nbsp;
            <Link to="/blog/misc">Misc.</Link>
          </div>
        </div>
        <div style={{ paddingTop: "2vh" }}>
          {postlist.map((post, idx) => {
            let name = post.name;
            let title = post.title;
            let date = post.date;
            let tags = post.tags;
            if (filter === "" || tags.indexOf(filter) >= 0) {
              return (
                <>
                  <div
                    className="blogPostTitle"
                    key={idx}
                    id={name}
                    onHover="test"
                  >
                    {date}:&nbsp;&nbsp;
                    <Tooltip
                      title={"tags: [" + tags.join(", ") + "]"}
                      placement="right"
                      arrow
                    >
                      <Link to={"/" + name}> {title}</Link>
                    </Tooltip>
                  </div>
                </>
              );
            }
            return <></>;
          })}
        </div>
      </div>
    </div>
  );
}

export default withRouter(BlogPage);
