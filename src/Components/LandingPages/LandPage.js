import React from "react";
import "./landPageStyles.css";
import { useState } from "react";
import { LoginForm } from "../Login/LoginForm";

export const LandingPage = () => {
  const [connectClicked, setConnect] = useState(false);

  return (
    // <div className="outerContainer">
    <div className="innerContainer">
      <div className="innerContainerItem">
        <div className="mainSection">
          {!connectClicked ? (
            <div className="welcomeContent">
              <h1 className="heading">Welcome</h1>
              <h3 className="subHeading">To Our Company</h3>
              <button
                onClick={() => {
                  setConnect(!connectClicked);
                }}
                className="connectBtn"
              >
                Connect
              </button>
            </div>
          ) : (
            <LoginForm setConnect={setConnect} connect={connectClicked} />
          )}
        </div>
      </div>
    </div>
    // </div>
  );
};
