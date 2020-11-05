import React from "react"
import { Link } from "gatsby"

const NavBar = () => (
    <nav className="nav">
        <ul className="nav__list columns">
            <li className="nav__el">
                <Link to="/" className="nav__link column">FAQ</Link>
            </li>
            <li className="nav__el">
                <Link to="/" className="nav__link column">Pricing</Link>
            </li>
            <li className="nav__el">
                <Link to="/" className="nav__link column">Team</Link>
            </li>
            <li className="nav__el">
                <Link to="/" className="nav__link column">Contact</Link>
            </li>
            <li className="nav__el">
                <Link to="/" className="nav__link column">Sign in</Link>
            </li>
        </ul>
    </nav>       
)
  
  export default NavBar