import React from 'react'
import Sidebars from './Header/Sidebar'
import "./Header/HomePage.css"

const HomePage = () => {
  return (
    <>
    <div className="home-page">
      {/* Left Sidebar */}
      <Sidebars />

      {/* Right Content */}
      <div className="content">
        <div className="parent">
          <div className="child">
            {/* Your right-side content goes here */}
            This div is centered horizontally and vertically.
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default HomePage