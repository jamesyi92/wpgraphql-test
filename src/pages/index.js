import React from "react"
import { Link, graphql } from "gatsby"
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'

import Layout from "../components/layout"

const StyledFeedItem = styled.div`

  padding: 3rem;
  background: ${props => props.theme.primaryBg};
  color: ${props => props.theme.primaryColor};

  &:not(:last-child) {
    margin-bottom: 3rem;
  }

  h3 {
    font-size: 2.4rem;
  }

  a {
    font-size: 16px;
  }
`

const IndexPage = ({ data }) => {
console.log(data.wp.customPages.edges)
  return(
    <Layout>
      <Container>
        {
          data.wp.customPages.edges.map((page, i) => {
            return (
              <StyledFeedItem key={i}>
                <h3>{page.node.title}</h3>
                <Link to={page.node.slug}>See Page</Link>
              </StyledFeedItem>
            )
          })
        }
      </Container>
    </Layout>
  )
}

export default IndexPage

export const pagequery = graphql`
  {
    wp {
      customPages {
        edges {
          node {
            slug
            uri
            title
          }
        }
      }
    }
  }
`