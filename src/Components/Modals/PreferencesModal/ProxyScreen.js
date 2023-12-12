import React from 'react'
import "./Preferencesstyle.css";

const ProxyScreen = () => {
  return (
   <>
   <div className='proxy-screen'>
    <div className="proxy-radio-container">
            <input type="radio" className="proxy-custom-radio" />
            <label className="proxy-label-text">
            Allow VNC Viewer to close while keeping current connection open
            </label>
          </div>
          <div className="proxy-radio-container">
            <input type="radio" className="proxy-custom-radio" />
            <label className="proxy-label-text">
            Do not use proxy
            </label>
          </div>
          <div className="proxy-radio-container">
            <input type="radio" className="proxy-custom-radio" />
            <label className="proxy-label-text">
            Use these proxy settings
            </label>
          </div>

          <div className="label-input-class">
          <div>
            <label>Server: </label>
          </div>
          <div className="form-group">
            <input
              className="simple-input"
              placeholder="IP address or hostname"
              size={42}
            />
          </div>
        </div>

        <div className="label-input-dropdown">
            <div>
              <label>Type: </label>
            </div>
            <div className="form-group">
              <div className="select">
                <select name="format" id="format" disabled>
                
                  <option value="http">HTTP CONNECT</option>
                  <option value="maximum">Always maximum</option>
                  <option value="alwayson">Always on</option>
                  <option value="preferon">Prefer on</option>
                  <option value="preferoff">Prefer off</option>
                </select>
              </div>
            </div>
          </div>
        <div className="label-input-class">
          <div>
            <label>User name: </label>
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
            <label>Password: </label>
          </div>
          <div className="form-group">
            <input
              className="simple-input"
              placeholder="IP address or hostname"
              size={42}
            />
          </div>
        </div>
        </div>
   </>
  )
}

export default ProxyScreen