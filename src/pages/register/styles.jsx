import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #1a202c;
  margin: 3em 0;
  border-bottom: 1px solid gray;

  .registerContent {
    /* border-bottom: solid 1px white; */
    /* border-top: solid 1px white; */
  }

  .registerContent form {
    /* background-color: red; */
    display: flex;
    align-items: left;
    justify-content: center;
    flex-flow: column wrap;
    gap: 15px;
    height: 700px;
    width: 400px;
    color: white;
  }
  .registerContent form h1 {
    font-size: 2em;
    text-align: center;
    position: relative;
    bottom: 1em;
  }

  .registerContent form input {
    outline: none;
    padding: 15px;
    border: none;
    border-radius: 2px;
    width: 100%;
  }
  .registerContent form input::placeholder {
    font-weight: bolder;
  }
  .thermsPolicy {
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 10px;
  }

  .thermsPolicy span {
    color: white;
    font-weight: 400;
    letter-spacing: 1px;
    transition: all 0.2s linear;
    cursor: pointer;
  }
  .thermsPolicy span mark {
    border-bottom: 1px solid white;
    background-color: transparent;
    color: white;
    transition: all 0.2s linear;
  }
  .thermsPolicy span mark:hover {
    color: orange;
    border-bottom: 1px solid orange;
  }
  .submitContent {
    width: 100%;
    position: relative;
    top: 1.5em;
  }
  .submitContent input {
    background-color: orange;
    color: white;
    font-size: 1.5em;
    letter-spacing: 1px;
    transition: all 0.2s linear;
    cursor: pointer;
  }
  .submitContent input:hover {
    background-color: #e69705d5;
  }

  .loginSession {
    position: relative;
    top: 17px;
    float: right;
  }
  .loginSession mark {
    background-color: transparent;
    color: orange;
    font-size: 1.2em;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.2s linear;
  }
  .loginSession mark:hover {
    color: #ffa600c7;
  }

  @media (max-width: 704px) {
    .registerContent form {
      /* background-color: red; */
      display: flex;
      align-items: left;
      justify-content: center;
      flex-flow: column wrap;
      gap: 15px;
      height: 700px;
      width: 370px;
      color: white;
    }
    .registerContent form h1 {
      font-size: 2em;
      text-align: center;
      position: relative;
      bottom: 1em;
    }

    .registerContent form input {
      outline: none;
      padding: 15px;
      border: none;
      border-radius: 2px;
      width: 100%;
    }
    .registerContent form input::placeholder {
      font-weight: bolder;
    }
    .thermsPolicy {
      display: flex;
      align-items: center;
      justify-content: left;
      gap: 10px;
    }

    .thermsPolicy span {
      color: white;
      font-weight: 400;
      letter-spacing: 1px;
      transition: all 0.2s linear;
      cursor: pointer;
    }
    .thermsPolicy span mark {
      border-bottom: 1px solid white;
      background-color: transparent;
      color: white;
      transition: all 0.2s linear;
    }
    .thermsPolicy span mark:hover {
      color: orange;
      border-bottom: 1px solid orange;
    }
    .submitContent {
      width: 100%;
      position: relative;
      top: 1.5em;
    }
    .submitContent input {
      background-color: orange;
      color: white;
      font-size: 1.5em;
      letter-spacing: 1px;
      transition: all 0.2s linear;
      cursor: pointer;
    }
    .submitContent input:hover {
      background-color: #e69705d5;
    }

    .loginSession {
      position: relative;
      top: 17px;
      float: right;
    }
    .loginSession mark {
      background-color: transparent;
      color: orange;
      font-size: 1.2em;
      letter-spacing: 1px;
      cursor: pointer;
      transition: all 0.2s linear;
    }
    .loginSession mark:hover {
      color: #ffa600c7;
    }
  }

  @media (max-width: 479px) {
    .registerContent form {
      /* background-color: red; */
      display: flex;
      align-items: left;
      justify-content: center;
      flex-flow: column wrap;
      gap: 15px;
      height: 700px;
      width: 340px;
      color: white;
      position: relative;
      top: -5em;
    }
    .registerContent form h1 {
      font-size: 1.5em;
      text-align: center;
      position: relative;
      bottom: 0.5em;
    }

    .registerContent form input {
      outline: none;
      padding: 12px;
      border: none;
      border-radius: 2px;
      width: 100%;
    }

    .thermsPolicy {
      display: flex;
      align-items: center;
      justify-content: left;
      gap: 10px;
    }

    .thermsPolicy span {
      color: white;
      font-weight: 400;
      letter-spacing: 1px;
      transition: all 0.2s linear;
      cursor: pointer;
    }

    .submitContent {
      width: 100%;
      position: relative;
      top: 1.5em;
    }
    .submitContent input {
      background-color: orange;
      color: white;
      font-size: 1.2em;
    }

    .loginSession mark {
      background-color: transparent;
      color: orange;
      font-size: 1em;
      letter-spacing: 1px;
      cursor: pointer;
      transition: all 0.2s linear;
    }
  }

  @media (max-width: 400px) {
    .registerContent form {
      /* background-color: red; */
      display: flex;
      align-items: left;
      justify-content: center;
      flex-flow: column wrap;
      gap: 15px;
      height: 700px;
      width: 300px;
      color: white;
    }
    .registerContent form h1 {
      font-size: 1.1em;
      text-align: center;
      position: relative;
      bottom: 0.5em;
    }

    .registerContent form input {
      outline: none;
      padding: 10px;
      border: none;
      border-radius: 2px;
      width: 100%;
    }

    .thermsPolicy {
      display: flex;
      align-items: center;
      justify-content: left;
      gap: 10px;
      font-size: 12px;
    }

    .thermsPolicy span {
      color: white;
      font-weight: 400;
      letter-spacing: 1px;
      transition: all 0.2s linear;
      cursor: pointer;
    }

    .submitContent {
      width: 100%;
      position: relative;
      top: 1.5em;
    }
    .submitContent input {
      background-color: orange;
      color: white;
      font-size: 1em;
    }

    .loginSession mark {
      background-color: transparent;
      color: orange;
      font-size: 1em;
      letter-spacing: 1px;
      cursor: pointer;
      transition: all 0.2s linear;
    }
  }
`;
