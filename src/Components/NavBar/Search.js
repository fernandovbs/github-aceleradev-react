import React, { useEffect, useState } from "react";
import { SearchInput, Pane, Table } from "evergreen-ui";
import { connect } from "react-redux";
import { searchUsers, setUser } from "./../../redux/reducers/users";

const Search = props => {
  const [searchString, setSearchString] = useState("");
  const { dispatch } = props;
  useEffect(() => {
    dispatch(searchUsers(searchString));
  }, [searchString, dispatch]);

  const handleSelect = user => {
    setSearchString("");
    console.log(user);
    dispatch(setUser(user));
  };

  const handleKeyPress = e => {
    if (e.keyCode === 13) {
      const user = props.users.suggestions.filter(user => {
        return user.login === searchString
      })
      dispatch(setUser(user[0]));
    }
  };

  return (
    <div style={{ display: "inline-block", position: "relative" }}>
      <SearchInput
        onChange={e => {
          setSearchString(e.target.value);
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
          display: "inline-block",
          position: "absolute",
          top: "65px",
          marginLeft: "50%",
          left: "-250px",
          zIndex: "200"
        }}
      >
        {props.users.suggestions.map(user => {
          return (
            <Table.Row
              key={user.id}
              isSelectable
              onSelect={() => handleSelect(user)}
              intent="success"
            >
              <Table.TextCell>{user.login}</Table.TextCell>
            </Table.Row>
          );
        })}
      </Pane>
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
)(Search);
