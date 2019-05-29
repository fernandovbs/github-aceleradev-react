import { Button, SearchInput } from "evergreen-ui"
import React, { useState } from "react"
import { connect } from "react-redux"
import { searchRepos } from "../../redux/reducers/repositories"
const SearchLanguage = props => {
  const [repoString, setRepoString] = useState("")
  const [languageString, setLanguageString] = useState("")
  const { dispatch } = props

  const handleKeyPressRepo = e => {
    if (e.keyCode === 13) {
      dispatch(searchRepos({ repoString, languageString }, "language"))
    }
  }
  const handleKeyPressLanguage = e => {
    if (e.keyCode === 13) {
      if (repoString === "") {
        alert("Preencha o nome do repositório!")
      } else {
        dispatch(searchRepos({ repoString, languageString }, "language"))
      }
    }
  }

  const findReposByLanguage = () => {
    if (repoString === "") {
      alert("Preencha o nome do repositório!")
    } else {
      dispatch(searchRepos({ repoString, languageString }, "language"))
    }
  }

  return (
    <div style={{textAlign: 'initial'}}>
      <SearchInput
        onChange={e => {
          setRepoString(e.target.value)
        }}
        onKeyDown={handleKeyPressRepo}
        placeholder="Digite o nome do repositório..."
        marginTop={20}
        autoComplete='off'
        data-testid="repository-input"
        height={50}
        width={500}
        autoFocus
        value={repoString}
      />
      <br />
      <SearchInput
        onChange={e => {
          setLanguageString(e.target.value)
        }}
        onKeyDown={handleKeyPressLanguage}
        placeholder="Linguagem..."
        data-testid="language-input"
        autoComplete='off'
        marginTop={20}
        height={50}
        width={180}
        value={languageString}
      />
      <Button
        marginLeft={16}
        data-testid="search-repo-input"
        height={52}
        marginBottom={3}
        iconBefore="search"
        onClick={findReposByLanguage}
      >
        Pesquisar
      </Button>
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
)(SearchLanguage)
