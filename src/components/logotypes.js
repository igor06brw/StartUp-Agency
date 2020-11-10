import React from "react"
import { Link } from "gatsby"

import logo from "./../images/logo-1.png"

const Logotypes = () => (
    <section className="margin-picture">
        <Link to="/" className="">
            <img src={logo} className="" alt="Logo" />
        </Link>
    </section>
)

export default Logotypes