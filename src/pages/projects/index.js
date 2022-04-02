import React from "react"
import Layout from "../components/Layout"
import * as styles from "../../styles/project.module.css"
import { graphql, Link } from "gatsby"

function projects({ data }) {
  console.log({ data })

  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact
  console.log({ contact })

  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Projects</h2>
        <h3>Projects and applications I've created</h3>

        <div className={styles.projects}>
          {projects.map(project => (
            <div className={styles.project} key={project.id}>
              <h4>{project.frontmatter.title}</h4>
              <p>{project.frontmatter.stack}</p>

              <Link to={`/projects/${project.frontmatter.slug}`}>Details</Link>
            </div>
          ))}
        </div>

        <div>
          <p>Like what you see? Email me at {contact}</p>
        </div>
      </div>
    </Layout>
  )
}

export default projects

export const query = graphql`
  query ProjectsPageQuery {
    projects: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          slug
          stack
          title
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`
