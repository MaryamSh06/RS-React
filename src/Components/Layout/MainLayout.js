import React from "react";
import Sidebars from "../Header/Sidebar";
import "../Layout/MainLayout.css";
import HeaderMenu from "../Header/HeaderMenu";
import { ScreensAfterLogin } from "../screensAfterLogin/ScreensAfterLogin";

const MainLayout = () => {
  return (
    <>
      <div className="header">
        <HeaderMenu />
      </div>
      <div className="grid-container">
        <div className="sidebar">
          <Sidebars />
        </div>
        <div className="main-content">
          <ScreensAfterLogin />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
