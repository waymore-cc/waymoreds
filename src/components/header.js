import Logo from "./logo.js"
import React from "react"

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
    </header>
  )
}

export default Header
