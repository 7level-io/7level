// import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
// import Alvin from "./routes/Alvin"
// import Home from "./routes/Home"
import Layout from "./components/Layout"

import ReactGA from "react-ga4"

const MEASUREMENT_ID = "G-SMD8M53XC6"
ReactGA.initialize(MEASUREMENT_ID)

function App() {
  return (
    <>
      <Layout />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alvixe" element={<Alvin />} />
        </Routes>
      </BrowserRouter> */}
    </>
  )
}

export default App
