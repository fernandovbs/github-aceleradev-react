import { Button, Select } from "evergreen-ui"
import React from "react"
import Search from "./Search"

const Nav = () => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <Select
      height={40}
      marginRight={16}
      marginTop={20}
      style={{ flex: "none" }}
    >
      <option value="All">Linguagem: Todas</option>
      <option value="JS">Linguagem: Javascript</option>
      <option value="HTML">Linguagem: HTML</option>
    </Select>
    <Search />
    <Button
      height={40}
      marginTop={20}
      marginLeft={16}
      appearance="primary"
      intent="success"
      iconBefore="add"
    >
      Novo repositório
    </Button>
  </div>
)

export default Nav
