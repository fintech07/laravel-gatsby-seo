const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const pages_temp = path.resolve(`./src/templates/page-temp.js`)
  const project_temp = path.resolve(`./src/templates/project-temp.js`)
  const projectlist = path.resolve(`./src/templates/projects.js`)

  return graphql(
    `
      {
        allContentfulPageContent {
          edges {
            node {
              slug
            }
          }
        }

        allContentfulProject {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create pages.
    const pages = result.data.allContentfulPageContent.edges

    pages.forEach((page, index) => {
      createPage({
        path: `/page/${page.node.slug}/`,
        component: pages_temp,
        context: {
          slug: page.node.slug
        },
      })
    })

    const projects = result.data.allContentfulProject.edges

    projects.forEach((project, index) => {
      createPage({
        path: `project/${project.node.slug}/`,
        component: project_temp,
        context: {
          slug: project.node.slug,
        }
      })
    })

    createPage({
      path: `projects/`,
      component: projectlist,
      context: {

      }
    })

    return null
  })
}
