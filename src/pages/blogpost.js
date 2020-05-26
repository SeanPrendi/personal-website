import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import ReactMarkdown from "react-markdown";

function BlogPost(props) {
  const [mdText, setMdText] = useState("");

  useEffect(() => {
    fetch(props.post)
      .then(response => {
        if (response.ok) return response.text();
        else return Promise.reject("Didn't fetch text correctly");
      })
      .then(text => {
        setMdText(text);
      })
      .catch(error => console.error(error));
  });
  return (
    <div>
      <ReactMarkdown source={mdText} />
    </div>
    // <div
    //   dangerouslySetInnerHTML={{
    //     __html: mdText
    //   }}
    // ></div>
  );
}

export default withRouter(BlogPost);
