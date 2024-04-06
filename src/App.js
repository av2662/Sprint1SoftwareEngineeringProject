//templates were followed from :
// https://youtu.be/SLfhMt5OUPI?si=izvipmLUdbj-Vfth
// https://youtu.be/8QgQKRcAUvM?si=tYAo5wbRDt1pvFkq

import Navbar from "./Navbar"
import Login from "./pages/Login"
import Home from "./pages/Home"
import About from "./pages/About"
import { Route, Routes } from "react-router-dom"

import "./styles.css"
function App() {
  return (
    <>
      <Navbar />
      <div className="containerNav">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          
        </Routes>
      </div>
    </>
  )
}

export default App