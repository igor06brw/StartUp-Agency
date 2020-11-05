import React from "react"
import { Link } from "gatsby"

const NavBar = () => (
    <nav className="nav">
        <ul className="nav__list">
            <li className="nav__el">
                <Link to="/" className="nav__link">FAQ</Link>
            </li>
            <li className="nav__el">
                <Link to="/" className="nav__link">Pricing</Link>
            </li>
            <li className="nav__el">
                <Link to="/" className="nav__link">Team</Link>
            </li>
            <li className="nav__el">
                <Link to="/" className="nav__link">Contact</Link>
            </li>
            <li className="nav__el">
                <Link to="/" className="nav__link">Sign in</Link>
            </li>
        </ul>
    </nav>       
)
  
  export default NavBar