import React from 'react'
import "./Preferencesstyle.css";

const TroubleShootingScreen = () => {
  return (
   <>
     <div className='trouble-screen'>
    <div className="trouble-radio-container">
            <input type="radio" className="trouble-custom-radio" />
            <label className="trouble-label-text">
             use default setting 
            </label>
          </div>
          <div className="trouble-radio-container">
            <input type="radio" className="trouble-custom-radio" />
            <label className="trouble-label-text">
             Create a debug log file 
            </label>
          </div>
          <div className="trouble-radio-container">
            <input type="radio" className="trouble-custom-radio" />
            <label className="trouble-label-text">
            Specify custom setting
            </label>
          </div>
          </div>
          <input placeholder="*:file:30" size={43}  className="trouble-input-style" disabled />
            <p className='trouble-p'>If logout is directed to file, the follwing will be created. </p>
            <p className='trouble-p'>/home/dev/.vnc/vncviewer.log</p>
            <div className='trouble-btn-container'>
             <button className='trouble-folder-btn'>Show in folder</button>
            </div>
   </>
  )
}

export default TroubleShootingScreen