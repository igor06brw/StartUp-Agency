import React from "react"
import Header from "../components/header"
import { graphql } from 'gatsby';

//Stylesheets!
import '../styles/styles.scss'

const IndexPage = ({ data }) => {
  const header = {
    headline: data.markdownRemark.frontmatter.heading,
    description: data.markdownRemark.frontmatter.description,
    buttonOne: data.markdownRemark.frontmatter.buttonOne,
    buttonTwo: data.markdownRemark.frontmatter.buttonTwo,
  };

  return (
      <Header data={ header }/>
  )
}

export const query = graphql`
  query {
    markdownRemark(fileAbsolutePath: { regex: "/home.md/" }) {
      frontmatter {
        heading
        description
        button_1
        button_2
      }
    }
  }
`

export default IndexPage
