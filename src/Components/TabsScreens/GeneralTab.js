import React from "react";
import { LiaDesktopSolid } from "react-icons/lia";
import "../TabsScreens/Tabsstyle.css";

const GeneralTab = () => {
  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ width: "150px", height: "150px" }}>
            <LiaDesktopSolid size={140} color="#2286ee" />
          </div>
        </div>

        <div className="label-input-class">
          <div>
            <label>VNC Server: </label>
          </div>
          <div className="form-group">
            <input
              className="simple-input"
              placeholder="IP address or hostname"
              size={42}
            />
          </div>
        </div>
        <div className="label-input-class">
          <div>
            <label>Name: </label>
          </div>
          <div style={{ marginLeft: "25px" }}>
            <input
              type="text"
              className="simple-input"
              placeholder="Friendly identifier"
              size={42}
            />
          </div>
        </div>

        <div className="border-labels-container">
          <label className="border-label">Labels</label>
          <p className="inside-border-paragraph">
            To nest labels, separate names with a forward slash (/)
          </p>{" "}
          <input
            type="text"
            className="simple-input"
            placeholder="Enter a label name, or press Down to apply existing labels"
             size={47}
          />
        </div>

        <div className="border-container">
          <label className="border-label">Security</label>

          <div className="label-input-dropdown">
            <div>
              <label>Encryption: </label>
            </div>
            <div className="form-group">
              <div className="select">
                <select name="format" id="format">
                  {/* <option selected disabled></option> */}
                  <option value="vnc">Let VNC server choose </option>
                  <option value="maximum">Always maximum</option>
                  <option value="alwayson">Always on</option>
                  <option value="preferon">Prefer on</option>
                  <option value="preferoff">Prefer off</option>
                </select>
              </div>
            </div>
          </div>

          <div className="checkbox-container">
            <input type="checkbox" className="custom-checkbox" checked />
            <label className="label-text">
              Authenticate using single sign-on (SS0) if possible
            </label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" className="custom-checkbox" checked />
            <label className="label-text">
              Authenticate using a smartcard or certificate store if possible
            </label>
          </div>
        </div>

        <div className="bottom-container">
          <label className="border-label">Privacy</label>

          <div className="checkbox-container">
            <input type="checkbox" className="custom-checkbox" checked />
            <label className="label-text">
              Update desktop preview automatically
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default GeneralTab;
