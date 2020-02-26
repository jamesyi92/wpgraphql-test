const path = require('path');
const { slash } = require(`gatsby-core-utils`)

const query = `
    query {
        wp {
            resources {
                edges {
                    node {
                        title
                        slug
                        status
                        content(format: RENDERED)
                    }
                }
            }
            customPages {
                edges {
                  node {
                    sectionBlocks {
                      fieldGroupName
                      sectionBlocks {
                        ... on WORDPRESS_CustomPage_Sectionblocks_SectionBlocks_HeroSection {
                          description
                          fieldGroupName
                          title
                        }
                        ... on WORDPRESS_CustomPage_Sectionblocks_SectionBlocks_CardsSection {
                          fieldGroupName
                          cards {
                            description
                            fieldGroupName
                            title
                          }
                        }
                      }
                    }
                    slug
                    uri
                  }
                }
            }
        }
    }
`;

exports.createPages = async ({ graphql, actions }) => {
    const { data } = await graphql(`
        ${query}
    `)

    if(!data.wp) {
        return null
    }

    const resourceTemplate = path.resolve(`./src/templates/Resource.js`)
    const customPageTemplate = path.resolve(`./src/templates/CustomPage.js`)

    data.wp.resources.edges.map(post => {
        actions.createPage({
            path: post.node.slug,
            component: slash(resourceTemplate),
            context: {
                ...post,
                id: post.node.id,
                slug: post.node.uri,
                title: post.node.title
            }
        })
    })

    data.wp.customPages.edges.map(page => {
        actions.createPage({
            path: page.node.slug,
            component: slash(customPageTemplate),
            context: {
                ...page,
                id: page.node.id,
                slug: page.node.uri,
                title: page.node.title
            }
        })
    })
}