import React from 'react'
import {NavLink} from "react-router-dom";
import "./Header.css"
 
const Header = () => {
  return (
    <>
      <header> 
    <nav className="navbar navbar-expand-lg navbar-white" >
    <div className="">
    <a href="/">Logo</a>
    </div>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
  </button>
  <div className="collapse navbar-collapse">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to={"/"} > Home</NavLink>
      </li>
      <li className="nav-item">
      <NavLink className="nav-link" to={"/faculty"}> Faculty</NavLink>
      </li>
      <li className="nav-item">
      <NavLink className="nav-link" to={"/team"}> Team</NavLink>
      </li>
      <li className="nav-item">
      <NavLink className="nav-link" to={"/contact"}> Contact</NavLink>
      </li>
    </ul>
  </div>
</nav>
 </header> 
    </>
  )
}

export default Header