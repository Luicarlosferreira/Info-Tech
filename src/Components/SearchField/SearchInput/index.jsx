import { useState } from "react";
import { Container, InputSearch } from "./styles";
import { useNavigate } from "react-router";

export const SearchInput = ({ Search }) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/search?q=" + query);
    setQuery("");
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <InputSearch
          placeholder={Search}
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          required
        />
        <input className="searchButton" type="submit" value="Buscar" />
      </form>
    </Container>
  );
};
