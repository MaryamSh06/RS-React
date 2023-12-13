import React from "react";
import "./Preferencesstyle.css";
import { Button } from "react-bootstrap";

const PrivacyScreen = () => {
  return (
    <>
      <div className="privacy-screen">
        <div className="privacy-checkbox-container">
          <input type="checkbox" className="custom-checkbox" />
          <label className="privacy-label-text">
            Hear audio from the remote computer
          </label>
        </div>
        <div className="privacy-checkbox-container">
          <input type="checkbox" className="privacy-custom-checkbox" checked />
          <label className="privacy-label-text">
            Allow copy and paste text to and form VNC server
          </label>
        </div>
        <div className="privacy-checkbox-container-last">
          <input type="checkbox" className="privacy-custom-checkbox" />
          <label className="privacy-label-text">
            Send anonymous usage data to help improve VNC Viewer
          </label>
        </div>

        <a href="#" className="privacy-policy-link">
          Privacy policy
        </a>

        <div className="privacy-border-container">
          <label className="privacy-border-label">VNC Server password</label>

          <div className="privacy-checkbox-container">
            <input type="checkbox" className="privacy-custom-checkbox" checked />
            <label className="privacy-label-text">
             Promopt to remember passwords at connection time 
            </label>
          </div>
          <div className="privacy-button-contanier">
            <div>
             <input type="checkbox" className="privacy-custom-checkbox" checked />
             <label className="privacy-label-text">
              Protect VNC Viewer with a master password
             </label>
            </div>
            <div>
            <button className="master-password-btn">Change master password</button>
          </div>
          </div>
          <p className="minutes-disabled-class">Minutes to remember master password for:</p>
          <input placeholder="15" size={4}  className="password-input" disabled />
        </div>




        <div className="privacy-last-border-container">
          <label className="privacy-border-label">Desktop previews</label>

          <div className="privacy-checkbox-container">
            <input type="checkbox" className="privacy-custom-checkbox" />
            <label className="privacy-label-text">
             Hide screenshoots for computers
            </label>
          </div>
        </div>
        <Button className="forget-button">
            Forget all sensitive data
          </Button>

      </div>
    </>
  );
};

export default PrivacyScreen;
