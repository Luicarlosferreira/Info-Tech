import styled from "styled-components";

export const Container = styled.div`
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  .searchButton {
    padding: 10px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.1s linear;
    background-color: orange;
    color: white;
  }
  .searchButton:hover {
    background-color: #ffa600c0;
  }

  @media (max-width: 885px) {
    display: none;
  }
`;

export const InputSearch = styled.input`
  background: white;
  padding: 10px;
  margin: 0;
  border: none;
  outline: none;
  font-family: serif;
  font-size: 1em;
  border-radius: 2px;
`;
