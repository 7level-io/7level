import React from "react"
import "../css/Layout.css"
import ProfileQR from "../assets/images/qr_code_7level_in_transparent.webp"
import ReactGA from "react-ga4"
import TopIcon from "./TopIcon"
import ProfileSection from "./ProfileSection"
import AddContact from "./AddContact"
import MeetingScheduler from "./MeetingScheduler"
import AdditionalInfo from "./AdditionalInfo"

ReactGA.send({ hitType: "pageview", page: window.location.pathname })

const Layout = () => {
  return (
    <div className="layout-container">
      <TopIcon />
      <ProfileSection />
      <div className="icon-row">
        <AddContact />
        <MeetingScheduler />
        <AdditionalInfo />
      </div>

      <ProfileQR />

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
