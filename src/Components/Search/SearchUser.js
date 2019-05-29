import { Pane, SearchInput, Table } from "evergreen-ui"
import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { searchRepos } from "../../redux/reducers/repositories"
import { searchUsers, setUser } from "../../redux/reducers/users"
const SearchUser = props => {
  const [searchString, setSearchString] = useState("")
  const { dispatch } = props
  useEffect(() => {
    dispatch(searchUsers(searchString))
  }, [searchString, dispatch])
  const handleSelect = user => {
    dispatch(setUser(user))
    setSearchString(user.login)
  }

  const handleKeyPress = e => {
    if (e.keyCode === 13) {
      dispatch(searchRepos(searchString, "user"))
    } else if (e.keyCode === 40) {
      document.getElementById("userDiv") &&
        document.getElementById("userDiv").focus()
    }
  }
  let paneStyle = {
    position: "absolute",
    zIndex: 999,
    backgroundColor: "white",
    borderTop: "none"
  }

  if (props.users.suggestions.length > 0) {
    paneStyle = { ...paneStyle, border: "1px solid" }
  }
  return (
    <div>
      <SearchInput
        onChange={e => {
          setSearchString(e.target.value)
        }}
        onKeyDown={handleKeyPress}
        placeholder="Digite o nome do usuário..."
        marginTop={20}
        id="searchInput"
        autoFocus
        height={50}
        width={500}
        value={searchString}
        data-testid="search-input"
      />
      <Pane width={500} style={paneStyle}>
        {props.users.suggestions.map((user, index) => {
          return (
            <Table.Row
              key={user.id}
              id="userDiv"
              tabIndex="0"
              isSelectable
              onSelect={() => handleSelect(user)}
              intent="none"
              data-testid="users-list"
            >
              <Table.TextCell>
                <span style={{ fontSize: "15px" }}>{user.login}</span>
              </Table.TextCell>
            </Table.Row>
          )
        })}
      </Pane>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    ...state
  }
}

export default connect(
  mapStateToProps,
  null
)(SearchUser)
