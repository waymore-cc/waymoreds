import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import React from "react"

const Logo = props => {
  const data = useStaticQuery(graphql`
    {
      allContentfulAsset(filter: { title: { eq: "logo" } }) {
        edges {
          node {
            title
            file {
              url
            }
          }
        }
      }
    }
  `)
  return (
    <div
      style={{
        margin: `0 auto 0 0`,
        padding: `1rem 2rem`,
      }}
    >
      <Link
        to="/"
        style={{
          display: "flex",
          width: "50px",
          height: "50px",
          margin: "none",
          textDecoration: "none",
          color: "#282828",
        }}
      >
        {data.allContentfulAsset.edges.map(file => {
          return (
            <img
              key={props}
              style={{ width: "100%", margin: "0 0.5rem 0 0" }}
              src={file.node.file.url}
              alt={file.node.title}
            />
          )
        })}
        <h3 style={{ margin: "auto 0" }}>ds.waymore</h3>
      </Link>
    </div>
  )
}

export default Logo
