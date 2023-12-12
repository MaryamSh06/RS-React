import React from "react";
import "../TabsScreens/Tabsstyle.css";
import { FaCog } from "react-icons/fa";

const ExpertTabScreen = () => {
  return (
    <>
    <div style={{padding:"15px"}}>
   
      <div className="label-input-class" style={{marginTop:"14px"}}>
        <div>
          <label>Filter: </label>
        </div>
        <div className="form-group">
          <input className="simple-input" size={44} />
        </div>
      </div>

      <div className="wrapper">
  <div className="content">
    <div className="wrapContent">
      <div className="leftContent">
        <div>Parameter</div>
      </div>
      <div className="divider"></div>
      <div className="rightContent">
        <div>Value</div>
      </div>
    </div>
  </div>
</div>
      

      <div className="label-class-expert">
        <label>
          Name: <span className="span-custom-text">Accept Bell</span>
        </label>
      </div>
      <div className="label-input-dropdown-value">
        <div>
          <label>Value: </label>
        </div>
        <div className="form-group">
          <div className="select">
            <select name="format" id="format">
              <option value="vnc">True</option>
              <option value="preferoff">False</option>
            </select>
          </div>
        </div>
        <div>
          <button className="app-preference-btn">use app preference</button>
        </div>
      </div>

      <div className="main-container">
        <div className="yellow-bg">
          <span className="icon-text">
            <FaCog className="setting-icon" />
            This parameter is set to application preference
          </span>
        </div>
      </div>
      <p className="paragraph-styles">
        Produce a system beep on request by the VNC Server computer.
      </p>
      <a href="#" className="anchor-tag-style">More information</a>
    </div>
    </>
  );
};

export default ExpertTabScreen;
