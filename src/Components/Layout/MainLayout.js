import React from "react";
import Sidebars from "../Header/Sidebar";
import "../Layout/MainLayout.css"
import HeaderMenu from "../Header/HeaderMenu";
import HomePage from "../homePage";

const MainLayout = ({children}) => {
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
         <HomePage />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
