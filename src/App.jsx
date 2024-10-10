// import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
// import Alvin from "./routes/Alvin"
// import Home from "./routes/Home"
import Layout from "./components/Layout"

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
