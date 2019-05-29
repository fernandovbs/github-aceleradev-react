import { Select } from "evergreen-ui"
import React, { useState } from "react"
import SearchLanguage from "../Search/SearchLanguage"
import SearchUser from "../Search/SearchUser"

const Nav = props => {
  const [selection, setSelection] = useState("UserSearch")
  const handleSelection = e => {
    setSelection(e.target.value)
  }
  return (
    <div
      style={
        props.repositories.loaded || props.repositories.loading
          ? {
              display: "flex",
              justifyContent: "center",
              transition: "all 700ms"
            }
          : {
              display: "flex",
              justifyContent: "center",
              marginTop: "300px",
              transition: "all 700ms"
            }
      }
      data-testid="navbar"
    >
      {selection === "UserSearch" ? (
        <SearchUser repositories={props.repositories} />
      ) : (
        <SearchLanguage />
      )}
      <Select
        value={selection}
        height={50}
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
