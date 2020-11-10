import React from "react"
import { Link } from "gatsby"

import logo1 from "./../images/LOGOS/LOGO1.png"
import logo2 from "./../images/LOGOS/LOGO2.png"
import logo3 from "./../images/LOGOS/LOGO3.png"
import logo4 from "./../images/LOGOS/LOGO4.png"

const Logotypes = () => (
    <section className="container margin-picture heading-section-two">
        <h4 className="has-text-centered">Our partners</h4>
        <div className="columns is-vcentered center-container">
            <Link to="/" className="column has-text-centered">
                <img src={logo1} className="" alt="Logo" />
            </Link>
            <Link to="/" className="column has-text-centered">
                <img src={logo2} className="" alt="Logo" />
            </Link>
            <Link to="/" className="column has-text-centered">
                <img src={logo3} className="" alt="Logo" />
            </Link>
            <Link to="/" className="column has-text-centered">
                <img src={logo4} className="" alt="Logo" />
            </Link>
        </div>
    </section>
)

export default Logotypes