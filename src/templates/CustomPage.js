import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import Hero from '../components/Hero'
import CardSection from '../sections/CardSection'




const CustomPage = ({ data }) => {
  console.log(data);
  const section = data.wp.customPageBy.sectionBlocks.sectionBlocks;
  
  return(
    <Layout>
      {
          section.map((section,i) => {
            
            const typeName = section.__typename;

            switch(typeName) {
              case 'WORDPRESS_CustomPage_Sectionblocks_SectionBlocks_HeroSection':
                return <Hero key={i} {...section} />

              case 'WORDPRESS_CustomPage_Sectionblocks_SectionBlocks_CardsSection':
                return <CardSection key={i} {...section} />

              default: 
                return <h3>No Sections Found</h3>
            }

          })
      }
    </Layout>
  )
}

export default CustomPage;

export const pageQuery = graphql`
  query GetPageQuery($id: ID!) {
    wp {
      customPageBy(id: $id) {
        title
        content
        uri
        sectionBlocks {
          sectionBlocks {
            ... on WORDPRESS_CustomPage_Sectionblocks_SectionBlocks_HeroSection {
              description
              title
              backgroundImage {
                sourceUrl
                imageFile {
                  childImageSharp {
                    fluid(quality: 100, maxWidth: 1200) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
            ... on WORDPRESS_CustomPage_Sectionblocks_SectionBlocks_CardsSection {
              cards {
                description
                title
              }
            }
          }
        }
      }
    }
  }
`