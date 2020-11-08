import React from "react"
import { Link } from "gatsby"

const NavBar = () => (
    <nav className="nav level-right column">
        <ul className="nav__list columns">
            <li className="nav__el">
                <Link to="/faq/" className="nav__link column is-size-6 has-text-white">FAQ</Link>
            </li>
            <li className="nav__el">
                <Link to="/pricing/" className="nav__link column is-size-6 has-text-white">Pricing</Link>
            </li>
            <li className="nav__el">
                <Link to="/team/" className="nav__link column is-size-6 has-text-white">Team</Link>
            </li>
            <li className="nav__el">
                <Link to="/contact/" className="nav__link column is-size-6 has-text-white">Contact</Link>
            </li>
            <li className="nav__el">
                <Link to="/" className="nav__link column is-size-6 has-text-white">Sign in</Link>
            </li>
        </ul>
    </nav>       
)
  
  export default NavBar