import React from "react"
import NavBar from "../components/nav-bar";
import Logo from "../components/logo";

const Header = ({ data }) => {
  const { headline, description, buttonOne, buttonTwo } = data

  return(
    <header className="header columns pt-7">
      <div className="header__body container is-fullwidth">
        <div className="header__navigation columns">
          <Logo />
          <NavBar />
        </div>
        <div className="header__hero hero pt-6">
          <div className="header__body hero-body has-text-centered is-centered">
            <h1 className="header__title title is-1 is-spaced has-text-white has-text-weight-normal">{ headline }</h1>
            <p className="header__subtitle subtitle has-text-weight-light has-text-white pt-8 ">{ description }</p>
          </div>
        </div>
      </div>
    </header>
  )
}


export default Header
