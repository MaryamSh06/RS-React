import React from "react";
import "./landPageStyles.css";
import menuBar from "../../images/icons8-menu-bar-48.png";

export const LandingPage = () => {
  return (
    <div className="outerContainer">
      <div className="innerContainer">
        {/* <nav className="navbar">
          <div className="logo">LOGO</div>
          <div className="links">
            <div className="linksContent">Home</div>
            <div className="linksContent">Service</div>
            <div className="linksContent">About</div>
            <div className="linksContent">Contact</div>
            <div>
              <img className="menubar" src={menuBar} />
            </div>
          </div>
        </nav> */}
        <div className="mainSection">
          <h1 className="heading">Welcome</h1>
          <h3 className="subHeading">To Our Company</h3>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            pretium lobortis purus ut aliquam. Cras dolor nisi, tempus sed nunc
            eu, mattis ultricies felis. In lorem ex, hendrerit ac erat pulvinar,
            pharetra semper magna
          </p> */}

          <button className="showModalButton">Launch demo modal</button>
        </div>
      </div>
    </div>
  );
};
