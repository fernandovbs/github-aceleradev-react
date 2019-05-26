import { SearchInput } from "evergreen-ui";
import React, { useState } from "react";
import { connect } from "react-redux";
import { searchRepos } from "../../redux/reducers/repositories";
const SearchUser = props => {
  const [repoString, setRepoString] = useState("");
  const [languageString, setLanguageString] = useState("");
  const { dispatch } = props;

  const handleKeyPressRepo = e => {
    if (e.keyCode === 13) {
      dispatch(searchRepos({ repoString, languageString }, "language"));
      setRepoString("");
      setLanguageString("");
    }
  };
  const handleKeyPressLanguage = e => {
    if (e.keyCode === 13) {
      if (repoString === "") {
        alert("Must fill repositorie name");
      } else {
        dispatch(searchRepos({ repoString, languageString }, "language"));
        setLanguageString("");
        setRepoString("");
      }
    }
  };

  return (
    <div>
      <SearchInput
        onChange={e => {
          setRepoString(e.target.value);
        }}
        onKeyDown={handleKeyPressRepo}
        placeholder="Digite o nome do repositório..."
        marginTop={20}
        height={40}
        width={500}
        autoFocus
        value={repoString}
      />
      <SearchInput
        onChange={e => {
          setLanguageString(e.target.value);
        }}
        onKeyDown={handleKeyPressLanguage}
        placeholder="Linguagem"
        marginTop={20}
        marginLeft={5}
        height={40}
        width={150}
        autoFocus
        value={languageString}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(
  mapStateToProps,
  null
)(SearchUser);
