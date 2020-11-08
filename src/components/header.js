import React from "react"
import NavBar from "../components/nav-bar";
import Logo from "../components/logo";

const Header = ({ data }) => {
  const { headline, description, buttonOne, buttonTwo } = data

  return(
    <header className="header columns container is-fullwidth">
      <div className="header__body container is-fullwidth">
        <div className="columns">
          <Logo />
          <NavBar />
        </div>
        <div className="hero">
          <div className="hero-body">
            <h1 className="title has-text-white">{ headline }</h1>
            <p className="subtitle has-text-white">{ description }</p>
          </div>
        </div>
      </div>
    </header>
  )
}


export default Header
