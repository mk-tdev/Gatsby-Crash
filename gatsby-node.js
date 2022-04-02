const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    query Projects {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach(project => {
    createPage({
      path: `/projects/${project.frontmatter.slug}`,
      component: path.resolve(`./src/templates/project-info.js`),
      context: {
        slug: project.frontmatter.slug,
      },
    })
  })
}
