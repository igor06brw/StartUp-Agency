import React from "react"
import NavBar from "../components/nav-bar";
import Logo from "../components/logo";

const Header = ({ data }) => {
  const { headline, description, buttonOne, buttonTwo } = data

  return(
    <header className="columns container is-fullwidth">
      <Logo />
      <NavBar />
      <h1 className="">{ headline }</h1>
    </header>
  )
}


export default Header
