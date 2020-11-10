import React from "react"
import Header from "../components/header"
import Logotypes from "../components/logotypes"
import { graphql } from 'gatsby'
import Img from "gatsby-image"

import pictureOne from '../images/bg-1.jpg'

//Stylesheets!
import '../styles/styles.scss'

const IndexPage = ({ data }) => {
  console.log(data)
  console.log(pictureOne)
  const headerData = {
    headline: data.header.frontmatter.heading,
    description: data.header.frontmatter.description,
    buttonOne: data.header.frontmatter.buttonOne,
    buttonTwo: data.header.frontmatter.buttonTwo,
  };

  return (
  <div className="relative">
      <Header data={ headerData }/>
      <Img fluid={data.bg.fluid} className="center-absolute" />
      <Logotypes />
  </div>
  )
}

export const query = graphql`
  query {
    header: markdownRemark(fileAbsolutePath: { regex: "/home.md/" }) {
      frontmatter {
        heading
        description
        buttonOne
        buttonTwo
      }
    }
    bg: imageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
`


export default IndexPage
