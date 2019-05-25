import { Select } from "evergreen-ui"
import React, { useState } from "react"
import SearchLanguage from "../Search/SearchLanguage"
import SearchUser from "../Search/SearchUser"

const Nav = () => {
  const [selection, setSelection] = useState("UserSearch")
  const handleSelection = e => {
    setSelection(e.target.value)
  }
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {selection === "UserSearch" ? <SearchUser /> : <SearchLanguage />}
      <Select
        value={selection}
        height={40}
        marginLeft={16}
        marginTop={20}
        onChange={handleSelection}
        style={{ flex: "none" }}
      >
        <option value="UserSearch">Pesquisar usuário</option>
        <option value="LanguageSearch">
          Pesquisar linguagem de programação
        </option>
      </Select>
    </div>
  )
}

export default Nav
