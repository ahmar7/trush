import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <section className="MuiPaper-root-178 rem-pad jss563 MuiPaper-elevation0-181">
      <div className="MuiContainer-root-271 MuiContainer-maxWidthLg-277">
        <h1 className="MuiTypography-root-281 jss564 MuiTypography-h1-286">
          Have questions about building on
          <br />
          <span className="jss565">Trush?</span>
        </h1>
        <div className="jss566">
          <a
            href="https://trush-foundation.gitbook.io/trush-network/"
            className="button filled"
            target="_blank"
          >
            <span>Get Started</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
