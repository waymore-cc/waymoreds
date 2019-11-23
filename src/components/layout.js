/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import DocsTree from "../components/sidebarDocsTree"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  return (
    <>
      <Header
        menuLinks={data.site.siteMetadata.menuLinks}
        siteTitle={data.site.siteMetadata.title}
      />
      <div
        style={{
          margin: `0 auto`,
          // padding: `2rem 2rem`,
          backgroundColor: "#F5F5F5",
          minHeight: "85vh",
          display: "flex",
        }}
      >
        <aside
          style={{
            flex: "1 1 20%",
            backgroundColor: "#282828",
            borderRight: "solid 1px #282828",
            padding: "1.5rem 0 0 0",
          }}
        >
          <DocsTree />
        </aside>
        <main style={{ flex: "1 1 80%", padding: "2rem" }}>{children}</main>
      </div>
      <footer
        style={{
          padding: "2rem",
          borderTop: "solid 1px #282828",
        }}
      >
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
