import React from "react";
import { Button, Select } from "evergreen-ui";
import SearchUser from "../Search/SearchUser";
import SearchLanguage from "../Search/SearchLanguage";
import { useState } from "react";

const Nav = () => {
  const [selection, setSelection] = useState("UserSearch");
  const handleSelection = e => {
    setSelection(e.target.value);
  };
  return (
    <div>
      <Select value={selection} height={40} marginRight={16} onChange={handleSelection}>
        <option value="UserSearch" >
          User Search
        </option>
        <option value="LanguageSearch">Program Language Search</option>
      </Select>
      {selection === "UserSearch" ? <SearchUser /> : <SearchLanguage />}

      <Button
        height={40}
        marginLeft={16}
        appearance="primary"
        intent="success"
        iconBefore="add"
      >
        Novo repositório
      </Button>
    </div>
  );
};

export default Nav;
