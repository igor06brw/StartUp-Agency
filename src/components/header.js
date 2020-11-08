import React from "react"
import NavBar from "../components/nav-bar";
import Logo from "../components/logo";

const Header = ({ data }) => {
  const { headline, description, buttonOne, buttonTwo } = data

  return(
    <header className="header columns pt-12">
      <div className="header__body container is-fullwidth">
        <div className="columns">
          <Logo />
          <NavBar />
        </div>
        <div className="hero pt-6">
          <div className="hero-body has-text-centered">
            <h1 className="title is-1 is-spaced has-text-white has-text-weight-normal">{ headline }</h1>
            <p className="subtitle is-5 has-text-weight-light has-text-white">{ description }</p>
          </div>
        </div>
      </div>
    </header>
  )
}


export default Header
