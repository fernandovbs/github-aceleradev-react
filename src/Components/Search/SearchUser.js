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
    setSearchString("")
    dispatch(setUser(user))
  }

  const handleKeyPress = e => {
    if (e.keyCode === 13) {
      dispatch(searchRepos(searchString))
      setSearchString("")
    }
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
        height={40}
        width={500}
        autoFocus
        value={searchString}
      />
      <Pane
        width={500}
        style={{
          position: "absolute",
          zIndex: 999
        }}
      >
        {props.users.suggestions.map(user => {
          return (
            <Table.Row
              key={user.id}
              isSelectable
              onSelect={() => handleSelect(user)}
              intent="none"
            >
              <Table.TextCell>{user.login}</Table.TextCell>
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
