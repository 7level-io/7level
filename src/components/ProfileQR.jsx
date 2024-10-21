import React from "react"
import ProfileQRCode from "../assets/images/qr_code_7level_in_transparent.webp"

const ProfileQR = () => {
  return (
    <div className="qr-code-container">
      <img src={ProfileQRCode} alt="QR CODe" className="qr-code" />
    </div>
  )
}

export default ProfileQR
