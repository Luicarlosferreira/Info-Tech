import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  background-color: #1a202c;
  height: 200px;
  align-items: center;
  justify-content: center;
  padding: 2em;
  @media (max-width: 417px) {
    padding: 0;
    form {
      width: 100%;
      padding: 0;
    }
  }
`;

export const NewsLetterContent = styled.div`
  width: 700px;
  color: white;
  padding: 10px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  flex-flow: column wrap;
  border-radius: 10px;

  .infoDeals {
    font-size: 1.2em;
    font-weight: bolder;
    letter-spacing: 1px;
    padding: 5px;
    text-align: center;
    width: 100%;
  }

  .latestDealsContent {
    width: 100%;
    padding: 10px;
    display: flex;
    gap: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .latestDealsContent input {
    padding: 8px;
    outline: none;
    font-size: 0.9em;
    border-radius: 2px;
    border: solid 1px #1a202c;
    letter-spacing: 1px;

    background-color: white;
    width: 66%;
  }
  .latestDealsContent input:focus {
    color: #1a202c;
  }

  .latestDealsContent button {
    padding: 9px;
    border: none;
    border-radius: 2px;
    background-color: white;
    color: #1a202c;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.2s linear;
  }
  .latestDealsContent button:hover {
    background-color: #a5a5a5;
  }

  .termsContainer {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
  }

  .termsContainer mark {
    background-color: transparent;
    color: white;
    border-bottom: 1px solid white;
    cursor: pointer;
  }

  @media (max-width: 650px) {
    width: 100%;
    color: white;
    padding: 10px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 5px;
    flex-flow: column wrap;

    .infoDeals {
      font-size: 0.8em;
      font-weight: bolder;
      letter-spacing: 1px;
      padding: 5px;
      text-align: left;
      width: 100%;
    }

    .latestDealsContent {
      width: 100%;
      padding: 10px;
      display: flex;
      gap: 5px;
      display: flex;
      align-items: center;
      justify-content: left;
    }

    .latestDealsContent input {
      font-size: 0.9em;
      width: 55%;
    }
    .latestDealsContent input:focus {
      color: #1a202c;
    }

    .latestDealsContent button {
      padding: 9px;
      font-size: 12px;
    }
    .termsContainer {
      display: flex;
      gap: 10px;

      font-size: 13px;
    }
  }

  @media (max-width: 500px) {
    .infoDeals {
      font-size: 0.6em;
    }

    .latestDealsContent {
      width: 100%;
      padding: 1px;
      display: flex;
      gap: 15px;
    }

    .latestDealsContent input {
      font-size: 0.6em;
      width: 55%;
    }
    .latestDealsContent input:focus {
      color: #1a202c;
    }

    .latestDealsContent button {
      padding: 9px;
      font-size: 8px;
    }
    .termsContainer {
      display: flex;
      font-size: 9px;
    }
  }

  @media (max-width: 417px) {
    .infoDeals {
      font-size: 0.8em;
    }

    .latestDealsContent {
      width: 100%;
      padding: 1px;
      display: flex;
      gap: 15px;
    }

    .latestDealsContent input {
      font-size: 0.8em;
      width: 55%;
    }
    .latestDealsContent input:focus {
      color: #1a202c;
    }

    .latestDealsContent button {
      padding: 9px;
      font-size: 8px;
    }
    .termsContainer {
      display: flex;
      gap: 10px;
      align-items: center;
      justify-content: left;
      font-size: 10px;
      flex-flow: row wrap;
      width: 100%;
    }
  }

  @media (max-width: 392px) {
    .infoDeals {
      font-size: 0.8em;
    }

    .latestDealsContent {
      width: 100%;
      padding: 1px;
      display: flex;
      gap: 15px;
    }

    .latestDealsContent input {
      font-size: 0.8em;
      width: 55%;
    }
    .latestDealsContent input:focus {
      color: #1a202c;
    }

    .latestDealsContent button {
      padding: 9px;
      font-size: 8px;
    }
    .termsContainer {
      display: flex;
      gap: 10px;
      align-items: center;
      justify-content: left;
      font-size: 9px;
      flex-flow: row wrap;
      width: 100%;
    }
  }
`;
