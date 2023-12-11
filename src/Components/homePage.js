import React, { useState } from "react";
import "./Header/HomePage.css";
import { LiaDesktopSolid } from "react-icons/lia";

const HomePage = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ width: "200px", height: "200px" }}>
            <LiaDesktopSolid size={200} />
          </div>

          <div>
            <div style={{ textAlign: "center" }}>
              <p style={{ fontFamily: "serif" }}>
                There are no computers in your address book at present.
              </p>{" "}
              <br />
              <p style={{ fontSize: "14px", fontWeight: "lighter" }}>
                Sign in to your RealVNC account to automatically discover team
                computers.
              </p>{" "}
              <br />
              <p style={{ fontSize: "14px", fontWeight: "lighter" }}>
                Alternatively, enter the VNC Server IP address or hostname in
                the Search bar to connect directly
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
