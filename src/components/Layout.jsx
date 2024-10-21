import React from "react"
import "../css/Layout.css"
import ProfileQR from "../assets/images/qr_code_7level_in_transparent.webp"
import ReactGA from "react-ga4"
import TopIcon from "./TopIcon"
import ProfileSection from "./ProfileSection"
import AddContact from "./AddContact"
import MeetingScheduler from "./MeetingScheduler"
import AdditionalInfo from "./AdditionalInfo"
import Footer from "./Footer"

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
      <Footer />
    </div>
  )
}

export default Layout
