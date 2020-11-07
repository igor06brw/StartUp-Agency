import React from "react"
import Header from "../components/header"
import { graphql } from 'gatsby';

//Stylesheets!
import '../styles/styles.scss'

const IndexPage = ({ data }) => (
  <div className="container level pt-6">
     <Header />
     <h1>{data.markdownRemark.frontmatter.heading}</h1>
  </div>
)

export const query = graphql`
  query {
    markdownRemark(fileAbsolutePath: { regex: "/home.md/" }) {
      frontmatter {
        heading
        description
        button_2
        button_1
      }
    }
  }
`

export default IndexPage
