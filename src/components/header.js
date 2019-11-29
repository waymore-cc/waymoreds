import Logo from "./logo.js"
import React from "react"
import GatsbyLink from "./gatsbylink"

const Header = () => {
  return (
    <header
      style={{
        background: `#fff`,
        borderBottom: "solid 1px",
        position: "sticky",
        top: "0",
        display: "flex",
      }}
    >
      <Logo key="file.node.id" />
      <div
        className="menu"
        style={{ marginLeft: "auto", alignSelf: "center", padding: "0 2rem" }}
      >
        <GatsbyLink href={"/sb/"}>Storybook Docs</GatsbyLink>
      </div>
    </header>
  )
}

export default Header
