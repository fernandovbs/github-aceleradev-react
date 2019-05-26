import { SearchInput} from "evergreen-ui"
import React, { useState } from "react"
import { connect } from "react-redux"
import { searchRepos } from "../../redux/reducers/repositories"
const SearchUser = props => {
  const [searchString, setSearchString] = useState("")
  const { dispatch } = props

  const handleKeyPress = e => {
    if (e.keyCode === 13) {
      dispatch(searchRepos(searchString, 'language'))
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
