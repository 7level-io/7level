import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Alvin from "./routes/Alvin"
import Home from "./routes/Home"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alvin" element={<Alvin />} />
          {/* <Route path="/card" element={<CardOverview />} />
            <Route path="/cardfull" element={<CardFull />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
