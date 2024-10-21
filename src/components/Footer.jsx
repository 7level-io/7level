import React from "react"
import LogoIcon from "../assets/images/7level v3.webp"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icon">
        <img src={LogoIcon} alt="Footer Icon" className="footer-icon" />
      </div>
      <div className="footer-text">
        <div>Powered by</div>

        <div className="bold">7level.io</div>
      </div>
    </div>
  )
}

export default Footer
