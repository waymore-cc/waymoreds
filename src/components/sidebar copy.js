// import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import { Link } from "gatsby"

// const Sidebar = () => {
//   const {
//     allMarkdownRemark: {
//       edges: { node },
//     },
//   } = useStaticQuery(graphql`
//     {
//       allMarkdownRemark {
//         edges {
//           node {
//             id
//             excerpt(pruneLength: 250)
//             frontmatter {
//               date(formatString: "MMMM DD, YYYY")
//               path
//               title
//             }
//           }
//         }
//       }
//     }
//   `)

//   return (
//     <div style={{ padding: "20px", backgroundColor: "red" }}>
//       {node.map(frontmatter => {
//         return <Link to={frontmatter.path}>{frontmatter.title}</Link>
//       })}
//     </div>
//   )
// }

// export default Sidebar
