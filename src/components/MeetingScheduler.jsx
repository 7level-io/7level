import React from "react"

// const MeetingScheduler = () => {
//   return (
//     <a
//       href="https://cal.com/alvixe/7level"
//       className="icon-item big-icon purple-bg schedule"
//     >
//       <i className="fa fa-clock"></i>
//     </a>
//   )
// }

import { getCalApi } from "@calcom/embed-react"
import { useEffect } from "react"
const MeetingScheduler = () => {
  useEffect(() => {
    ;(async function () {
      const cal = await getCalApi({ namespace: "7level" })
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      })
    })()
  }, [])
  return (
    <button
      data-cal-namespace="7level"
      data-cal-link="alvixe/7level"
      data-cal-config='{"layout":"month_view"}'
      className="icon-item big-icon purple-bg schedule"
    >
      <i className="fa fa-clock"></i>
    </button>
  )
}

export default MeetingScheduler
