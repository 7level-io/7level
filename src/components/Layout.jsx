// src/components/Layout.js
import React from "react"
import "../css/Layout.css" // Importing the CSS for styles
import LogoIcon from "../assets/images/7level v3.png" // Import the image
import ProfileImage from "../assets/images/alvixedoodle.png" // Import the image

const Layout = () => {
  return (
    <div className="layout-container">
      <div className="top-icon">
        <img src={LogoIcon} alt="Top Icon" className="icon-image" />
      </div>

      <div className="profile-section">
        <div className="profile-image">
          <img src={ProfileImage} alt="Profile" className="profile-pic" />
        </div>
      </div>

      <div className="icon-row">
        <div className="icon-item dark-bg one-row-item">
          <i className="fa fa-user-plus"></i>{" "}
          {/* Assuming you want to use Font Awesome for icons */}
        </div>
        <div className="icon-item big-icon purple-bg">
          <i className="fa fa-clock"></i>
        </div>
        <div className="icon-item big-icon black-icon white-bg">
          <i className="fa fa-info"></i>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="footer-icon">
          <img src={LogoIcon} alt="Footer Icon" className="footer-icon" />
        </div>
        <div className="footer-text">
          <div>Powered by</div>

          <div>7level.io</div>
        </div>
      </div>
    </div>
  )
}

export default Layout
