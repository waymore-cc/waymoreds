import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

const Sidebar = () => {
  const {
    allMdx: { edges },
  } = useStaticQuery(graphql`
    {
      allMdx(sort: { order: ASC, fields: [frontmatter___date] }) {
        edges {
          node {
            id
            excerpt
            frontmatter {
              title
              date
              category
              path
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  // return (
  //   <div style={{ padding: "20px", backgroundColor: "red" }}>
  //     {edges.map(fields => {
  //       return <Link to={fields.slug}>{fields.slug}</Link>
  //     })}
  //   </div>
  return (
    <div>
      <ul
        style={{
          listStyle: "none",
          position: "fixed",
          width: "calc(20% - 1.45rem)",
        }}
      >
        {edges.map(({ node: post }) =>
          post.frontmatter.category === "child" ? (
            <li
              key={post.id}
              style={{ borderBottom: "solid 1px #6d6d6d", marginLeft: "1rem" }}
            >
              <Link
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  ":hover": { color: "#802c0b" },
                }}
                to={post.fields.slug}
              >
                <p>{post.frontmatter.title}</p>
              </Link>
              {/* <p>{post.excerpt}</p> */}
            </li>
          ) : (
            <li key={post.id} style={{ borderBottom: "solid 1px #6d6d6d" }}>
              <Link
                style={{
                  color: "#fff",
                  fontWeight: "600",
                  fontSize: "1.15rem",
                  textDecoration: "none",
                  ":hover": { color: "#802c0b" },
                }}
                to={post.fields.slug}
              >
                <p>{post.frontmatter.title}</p>
              </Link>
              {/* <p>{post.excerpt}</p> */}
            </li>
          )
        )}
      </ul>
    </div>
  )
}

export default Sidebar
