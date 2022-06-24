import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  position: relative;
`;

export const SpanContent = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  font-size: 4em;
  color: white;
  font-weight: bolder;
  letter-spacing: 2px;
  padding: 10px;
  margin: 65px 0px 65px 0;

  @media (max-width: 732px) {
    font-size: 3em;
  }
  @media (max-width: 551px) {
    font-size: 2.2em;
  }
  @media (max-width: 450px) {
    font-size: 1.9em;
  }
  @media (max-width: 400px) {
    font-size: 1.3em;
  }
`;
