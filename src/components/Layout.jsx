import React from "react"
import "../css/Layout.css"
import LogoIcon from "../assets/images/7level v3.webp"
import ProfileImage from "../assets/images/alvixedoodle-crop.webp"
import ProfileQR from "../assets/images/Alvin qr.png"
import ContactFile from "../assets/contacts/contacts.vcf"

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
        <a
          href={ContactFile}
          download
          className="icon-item dark-bg one-row-item"
        >
          <i className="fa fa-user-plus"></i>{" "}
          {/* Assuming you want to use Font Awesome for icons */}
        </a>
        <div className="icon-item big-icon purple-bg schedule">
          <i className="fa fa-clock"></i>
        </div>
        <div className="icon-item big-icon black-icon white-bg">
          <i className="fa fa-info"></i>
        </div>
      </div>

      <div className="qr-code-container">
        <img src={ProfileQR} alt="QR CODe" className="qr-code" />
      </div>

      <div className="footer">
        <div className="footer-icon">
          <img src={LogoIcon} alt="Footer Icon" className="footer-icon" />
        </div>
        <div className="footer-text">
          <div>Powered by</div>

          <div className="bold">7level.io</div>
        </div>
      </div>
    </div>
  )
}

export default Layout
