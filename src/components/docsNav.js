import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import React from "react"

const Docsnav = () => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark {
        frontmatter {
          path
        }
      }
    }
  `)
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter } = markdownRemark
  return (
    <div
      style={{ padding: `1rem 2rem`, margin: "auto 0" }}
      className="docs-nav"
    >
      <Link to={frontmatter.path}>Docs</Link>
    </div>
  )
}

export default Docsnav
