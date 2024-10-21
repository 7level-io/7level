import React from "react"
import ProfileImage from "../assets/images/alvixedoodle-crop.webp"

const ProfileSection = () => {
  return (
    <div className="profile-section">
      <div className="profile-image">
        <img src={ProfileImage} alt="Profile" className="profile-pic" />
      </div>
    </div>
  )
}

export default ProfileSection
