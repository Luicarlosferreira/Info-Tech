import React from "react";
import { Container } from "./styles";
import { SearchInput } from "./SearchInput";

const SearchField = () => {
  return (
    <Container>
      <SearchInput Search="Search your product..." />
    </Container>
  );
};

export default SearchField;
