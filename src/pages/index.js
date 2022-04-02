import React from "react"
import Layout from "./components/Layout"

import * as styles from "../styles/home.module.css"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

export default function Home({ data }) {
  console.log({ data })
  // const { title, description } = data.site.siteMetadata

  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>Front-End Developer with Angular, React & Vue</p>

          <Link className={styles.btn} to="/projects">
            My Portfolios
          </Link>
        </div>

        {/* <img
          src="/portfolio.jpg"
          alt="portfolio"
          style={{ maxWidth: "100%" }}
        /> */}
        <StaticImage src={"../images/portfolio.jpg"} alt="portfolio" />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Portfolio {
    file(relativePath: { eq: "portfolio.jpg" }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

// export const query = graphql`
//   query SiteInfo {
//     site {
//       siteMetadata {
//         description
//         title
//       }
//     }
//   }
// `
