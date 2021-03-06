import React from "react"
import { Link } from "gatsby"

import logo from "./../images/logo.svg"

const Logo = () => (
    <div className="logo level-left is-vcentered column">
        <Link to="/" className="logo__link">
            <img src={logo} className="logo__picture" alt="Logo" />
        </Link>
    </div>
)

export default Logo