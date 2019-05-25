import React from "react";
import { Button, Select } from "evergreen-ui";
import Search from "./Search";

const Nav = () => (
  <div>
    <Select height={40} marginRight={16}>
      <option value="All">Linguagem: Todas</option>
      <option value="JS">Linguagem: Javascript</option>
      <option value="HTML">Linguagem: HTML</option>
    </Select>
    <Search />
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

export default Nav;