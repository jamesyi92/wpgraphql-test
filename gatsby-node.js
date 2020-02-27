const path = require('path');
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)
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
                  title
                  id
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






exports.createResolvers = async (
  {
    actions,
    cache,
    createNodeId,
    createResolvers,
    store,
    reporter,
  },
) => {
  const { createNode } = actions

  await createResolvers({
    WORDPRESS_MediaItem: {
      imageFile: {
        type: "File",
        async resolve(source) {
          let sourceUrl = source.sourceUrl

          if (source.mediaItemUrl !== undefined) {
            sourceUrl = source.mediaItemUrl
          }

          return await createRemoteFileNode({
            url: encodeURI(sourceUrl),
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },
    },
  })
}