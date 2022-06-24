import styled from "styled-components";

export const Container = styled.div`
  padding: 40px;
  background-color: white;
  font-size: 1.6em;
  text-align: center;

  h2 {
    color: orange;
    padding: 10px;
    width: 100%;
    border-radius: 5px;
    background-color: #1a202c;
  }

  img {
    margin: auto;
    padding: 10px;
    width: 300px;
    height: 300px;
  }

  p {
    font-size: 15px;
    margin: 10px;
  }
  span {
    color: #1a202c;
    margin: 10px;
    padding: 5px;
    border-radius: 3px;
    cursor: pointer;
    transition: all 0.3s linear;
  }

  span:hover {
    background-color: #1a202c;
    color: white;
  }

  @media (max-width: 1200px) {
    img {
      width: 160px;
      height: 160px;
      border-radius: 50%;
    }
    padding: 25px;
    background-color: white;
    font-size: 1.3em;
    text-align: center;
  }
  @media (max-width: 1100px) {
    margin: 30px;
    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
    }
    padding: 25px;
    background-color: white;
    font-size: 1.2em;
    text-align: center;
  }
  @media (max-width: 800px) {
    img {
      width: 140px;
      height: 140px;
    }
    padding: 25px;
    background-color: white;
    font-size: 1.2em;
    text-align: center;

    h2 {
      color: orange;
      padding: 10px;
      width: 100%;
      border-radius: 5px;
      background-color: #1a202c;
    }
  }
  @media (max-width: 733px) {
    padding: 25px;
    background-color: white;
    font-size: 0.8em;
    text-align: center;
    display: none;

    h2 {
      color: orange;
      padding: 5px;
      width: 100%;
      border-radius: 5px;
      background-color: #1a202c;
    }
  }
`;
