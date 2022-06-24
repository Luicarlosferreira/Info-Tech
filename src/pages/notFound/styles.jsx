import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  height: 70vh;
  gap: 1em;

  span {
    color: orange;
    font-size: 1.5em;
    border-bottom: 1px solid #1a202c;
    padding: 2px;
    font-weight: bolder;
    transition: all 0.2s linear;
    position: relative;
    top: 3em;
  }
  span:hover {
    color: #1a202c;
    border-bottom: 1px solid orange;
  }
  svg {
    width: 100px;
    height: 100px;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2em;
  }
`;
