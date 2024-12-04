import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import Red from "./red";
import Blue from "./blue";
import Home from "./Home";



function App() {


  return (
    <>
      <div id="container">

        <div id="navbar">
          <Link to="/blue">Blue</Link>
          <Link to="/red">Red</Link>
          <Link to="/">Home</Link></div>


        <div id="main-section">
          <Routes>
            <Route path="/blue" element={<Blue />}></Route>
            <Route path="/red" element={<Red />}></Route>
            <Route path="/" element={<Home />}></Route>
          </Routes></div>
      </div >

    </>
  )
}

export default App
