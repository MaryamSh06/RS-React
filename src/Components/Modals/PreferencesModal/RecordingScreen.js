import React from 'react'
import "./Preferencesstyle.css";
const RecordingScreen = () => {
  return (
   <> 
   <div className='recording-screen'>
   <div className="appearance-checkbox-container">
            <input type="checkbox" className="privacy-custom-checkbox" />
            <label className="privacy-label-text">
             Record all sessions
            </label>
          </div>
          <div className="appearance-checkbox-container">
            <input type="checkbox" className="privacy-custom-checkbox" checked />
            <label className="privacy-label-text">
             Allow start/stop recording
            </label>
          </div>
          <div className="appearance-checkbox-container">
            <input type="checkbox" className="privacy-custom-checkbox" />
            <label className="privacy-label-text">
           Prompt for storage folder for each session
            </label>
          </div>
          <div className="appearance-checkbox-container">
            <input type="checkbox" className="privacy-custom-checkbox" />
            <label className="privacy-label-text">
            Start a new file if the resolution increases
            </label>
          </div>
          </div>

       <p className='recording-p'>Recording will be saved to a file with the following format:</p>
       <p className='recording-p'>/home/dev/Videos/RealVNC/SERVER NAME _20234322_1735.webm</p>


       <div className='recording-btn-container'>
       <button className="folder-button" >
              Show in folder 
            </button>
            <button className="folder-button" >
              Choose in folder 
            </button>
            <button className="refresh-button">
              Reset to default
            </button>
       </div>
   </>
  )
}

export default RecordingScreen