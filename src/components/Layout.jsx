import React from "react"
import "../css/Layout.css"
import ProfileQR from "../assets/images/qr_code_7level_in_transparent.webp"
import ReactGA from "react-ga4"
import TopIcon from "./TopIcon"
import ProfileSection from "./ProfileSection"
import AddContact from "./AddContact"

ReactGA.send({ hitType: "pageview", page: window.location.pathname })

const Layout = () => {
  return (
    <div className="layout-container">
      <TopIcon />
      <ProfileSection />
      <div className="icon-row">
        <AddContact />
        <a
          href="https://cal.com/alvixe/7level"
          className="icon-item big-icon purple-bg schedule"
        >
          <i className="fa fa-clock"></i>
        </a>
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
