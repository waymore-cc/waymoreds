import GatsbyLink from "gatsby-link"
import PropTypes from "prop-types"
import React from "react"

export default function Link(props) {
  const { href, to, ...others } = props

  if (to) {
    return <GatsbyLink {...others} to={to} />
  }

  return <a {...others} href={href} target="_blank" />
}

Link.propTypes = {
  href: PropTypes.string,
  to: PropTypes.string,
}
