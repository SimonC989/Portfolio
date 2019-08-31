import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => (
  <div>
    <Layout />    
      <div style={{ color: `teal` }}>
        <h1>About {data.site.siteMetadata.title}</h1>
        <p>I’m good enough, I’m smart enough, and gosh darn it, people like me!</p>
      </div>
  </div>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`