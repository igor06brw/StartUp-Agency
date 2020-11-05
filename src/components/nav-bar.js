import React from "react"

const NavBar = () => (
    <nav className="nav">
        <ul className="nav__list">
            <li className="nav__el">
                <a to="/" className="nav__link">FAQ</a>
            </li>
            <li className="nav__el">
                <a to="/" className="nav__link">Pricing</a>
            </li>
            <li className="nav__el">
                <a to="/" className="nav__link">Team</a>
            </li>
            <li className="nav__el">
                <a to="/" className="nav__link">Contact</a>
            </li>
            <li className="nav__el">
                <a to="/" className="nav__link">Sign in</a>
            </li>
        </ul>
    </nav>       
)
  
  export default NavBar