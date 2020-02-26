import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

const ResourcePage = ({ data }) => (
  <Layout>
    {
      data.wp.resources.edges.map(resource => {
        return (
          <React.Fragment key={resource.node.id}>
            <h3>{resource.node.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: resource.node.content }}/>
            <Link to={resource.node.slug}>See Page</Link>
          </React.Fragment>
        )
      })
    }
  </Layout>
)

export const query = graphql`
  {
    wp {
      resources {
        edges {
          node {
            id
            title
            slug
            uri
            content
          }
        }
      }
    }
  }
`

export default ResourcePage

