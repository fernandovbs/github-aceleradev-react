import React from "react";
import { Button, SearchInput, Select } from "evergreen-ui";

const Nav = () => (
  <div>
    <Select height={40} marginRight={16}>
      <option value="All">Linguagem: Todas</option>
      <option value="JS">Linguagem: Javascript</option>
      <option value="HTML">Linguagem: HTML</option>
    </Select>
    <SearchInput
      placeholder="Digite o nome do usuário..."
      marginTop={20}
      height={40}
      width={500}
      autoFocus
    />
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