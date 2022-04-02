import React from "react"
import Layout from "../pages/components/Layout"
import * as styles from "../styles/project-info.module.css"
import { graphql } from "gatsby"

function ProjectInfo(props) {
  console.log(props)
  const { html } = props.data.markdownRemark
  const { title, stack } = props.data.markdownRemark.frontmatter

  return (
    <Layout>
      <div className={styles.details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>

        <div
          className={styles.htmlContent}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}

export default ProjectInfo

export const query = graphql`
  query ProjectsPage($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        stack
      }
    }
  }
`
