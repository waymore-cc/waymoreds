// import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import { Link } from "gatsby"

// const Subtree = () => {
//   const {
//     allMdx: { edges },
//   } = useStaticQuery(graphql`
//     {
//       allMdx(
//         filter: { frontmatter: { depth: { eq: "1" } } }
//         sort: { order: DESC, fields: [frontmatter___date] }
//       ) {
//         edges {
//           node {
//             id
//             excerpt
//             frontmatter {
//               title
//               depth
//               date
//             }
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `)
//   console.log(edges)

//   // return (
//   //   <div style={{ padding: "20px", backgroundColor: "red" }}>
//   //     {edges.map(fields => {
//   //       return <Link to={fields.slug}>{fields.slug}</Link>
//   //     })}
//   //   </div>
//   return (
//     <div>
//       <ul style={{ listStyle: "none" }}>
//         {edges.map(({ node: post }) => (
//           <li key={post.id}>
//             <Link to={post.fields.slug}>
//               <p>{post.frontmatter.title}</p>
//             </Link>
//             {/* <p>{post.excerpt}</p> */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default Subtree
