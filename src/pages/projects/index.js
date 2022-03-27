import React from "react"
import Layout from "../components/Layout"
import * as styles from "../../styles/project.module.css"

function projects() {
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Projects</h2>
        <h3>Projects and applications I've created</h3>
      </div>
    </Layout>
  )
}

export default projects
