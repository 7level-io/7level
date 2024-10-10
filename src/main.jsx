import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import ReactGA from "react-ga4"

const MEASUREMENT_ID = "G-SMD8M53XC6"
ReactGA.initialize(MEASUREMENT_ID)

ReactGA.send({ hitType: "pageview", page: window.location.pathname })

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
