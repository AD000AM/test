import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navc py-4 ">
  <div className="container-fluid">
    <a className="navbar-brand text-white ps-5 fs-2 fw-bold " href="#">START FRAMEWORK</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
        <li className="nav-item me-5 ">
          <NavLink className="nav-link text-white fs-5 fw-bold " to= 'Home' >Home</NavLink>
        </li>
        <li className="nav-item me-5">
          <NavLink className="nav-link text-white fs-5 fw-bold" to= 'About' >About</NavLink>
        </li>
        <li className="nav-item me-5">
          <NavLink className="nav-link text-white fs-5 fw-bold" to= 'Portfolio' >Portfolio</NavLink>
        </li>
        <li className="nav-item me-5">
          <NavLink className="nav-link text-white fs-5 fw-bold" to= 'Contacts' >Contacts</NavLink>
        </li>
        
        
      </ul>
    </div>
  </div>
</nav>
  )
}
