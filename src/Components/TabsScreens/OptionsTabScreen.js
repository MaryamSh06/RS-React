import React from 'react'
import "../TabsScreens/Tabsstyle.css";

const OptionsTabScreen = () => {
  return (
   <>
   
   <div className="general-border-container">
          <label className="border-label">General</label>

          <div className="label-input-dropdown">
            <div>
              <label>Encryption: </label>
            </div>
            <div className="form-group">
              <div className="select">
                <select name="format" id="format">
                  {/* <option selected disabled></option> */}
                  <option value="vnc">Automatic</option>
                  <option value="maximum">High</option>
                  <option value="alwayson">Medium</option>
                  <option value="preferon">Low</option>
                 
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
        </div>


        <div className="general-border-container">
          <label className="border-label">Scaling</label>

          <div className="label-input-dropdown">
            <div>
              <label>Encryption: </label>
            </div>
            <div className="form-group">
              <div className="select">
                <select name="format" id="format">
                  {/* <option selected disabled></option> */}
                  <option value="vnc">Automatic</option>
                  <option value="maximum">Scale to fit window</option>
                  <option value="alwayson">Scale to fit width</option>
                  <option value="preferon">Scale to fit height</option>
                  <option value="preferoff">25%</option>
                  <option value="preferoff">50%</option>
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
        </div>
   
   
   </>
  )
}

export default OptionsTabScreen