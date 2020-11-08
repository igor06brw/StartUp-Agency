import React from "react"

const Button = ({ data }) => {
  const { title } = data

  return(
    <button class="button">{ title }</button>
  )
}


export default Header