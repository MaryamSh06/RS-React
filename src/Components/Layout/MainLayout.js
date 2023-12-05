import React from "react";
import Sidebars from "../Header/Sidebar";
import AllFeeds from "./AllFeeds";
import "../Layout/MainLayout.css"
import HeaderSearchbar from "../Header/HeaderSearchBar";

const MainLayout = () => {
  return (
    <>
   <div className="header">
        <HeaderSearchbar />
      </div>
      <div className="grid-container">
        <div className="sidebar">
          <Sidebars />
        </div>
        <div className="main-content">
          <AllFeeds />
        </div>
      </div>
</>
  );
};

export default MainLayout;


