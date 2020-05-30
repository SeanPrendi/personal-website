import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import MathJax from "react-mathjax";
import RemarkMathPlugin from "remark-math";

function MarkdownRender(props) {
  const newProps = {
    ...props,
    plugins: [RemarkMathPlugin],
    renderers: {
      ...props.renderers,
      math: props => <MathJax.Node formula={props.value} />,
      inlineMath: props => <MathJax.Node inline formula={props.value} />,
      sup: 'sup'
    }
  };
  return (
    <MathJax.Provider input="tex">
      <ReactMarkdown escapeHtml={false} {...newProps} />
    </MathJax.Provider>
  );
}

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
    <div
      style={{
        width: "60vw"
      }}
    >
      <div style={{ alignItems: "center" }}>
        <MarkdownRender source={mdText} />
      </div>
    </div>
  );
}

export default withRouter(BlogPost);
