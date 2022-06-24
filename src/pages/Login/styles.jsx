import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #1a202c;
  margin: 3em 0;
  border-bottom: 1px solid gray;

  .loginContent {
    /* border-bottom: solid 1px white; */
    /* border-top: solid 1px white; */
  }

  .loginContent form {
    /* background-color: red; */
    display: flex;
    align-items: left;
    justify-content: center;
    flex-flow: column wrap;
    gap: 15px;
    height: 700px;
    width: 500px;
    color: white;
  }
  .loginContent form h1 {
    font-size: 2em;
  }

  .loginContent form input {
    outline: none;
    padding: 15px;
    border: none;
    border-radius: 2px;
    width: 85%;
  }
  .loginContent form input::placeholder {
    font-weight: bolder;
  }
  .forgotPassword a {
    color: white;
    font-weight: 400;
    letter-spacing: 1px;
    transition: all 0.2s linear;
  }
  .forgotPassword a:hover {
    color: orange;
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

  .separatorContent {
    background-color: gray;
    height: 650px;
    width: 1px;
  }
  .registerContent {
    display: flex;
    align-items: left;
    justify-content: center;
    flex-flow: column wrap;
    gap: 3em;
    height: 700px;
    width: 500px;
    /* border-bottom: solid 1px white;
    border-top: solid 1px white;  */
  }
  .registerContent h1 {
    color: white;
    font-size: 2em;
  }
  .registerContent h3 {
    color: white;
    letter-spacing: 1px;
    font-weight: 400;
  }
  .additionalOptions {
    display: flex;
    align-items: left;
    justify-content: center;
    flex-flow: column wrap;
    gap: 10px;
  }
  .additionalOptions p {
    color: orange;
    font-size: 1.2em;
    letter-spacing: 1px;
  }
  .additionalOptions svg {
    color: white;
    position: relative;
    top: 3px;
    margin-right: 10px;
  }
  .registerContent input {
    outline: none;
    padding: 15px;
    border: none;
    border-radius: 2px;
    background-color: orange;
    color: white;
    font-size: 1.5em;
    letter-spacing: 1px;
    transition: all 0.2s linear;
    cursor: pointer;
    width: 50%;
  }
  .registerContent input:hover {
    background-color: #e69705d5;
  }

  @media (max-width: 1335px) {
    .loginContent form {
      /* background-color: red; */
      display: flex;
      align-items: left;
      justify-content: center;
      flex-flow: column wrap;
      gap: 15px;
      height: 700px;
      width: 500px;
    }
    .loginContent form h1 {
      font-size: 2em;
    }

    .loginContent form input {
      width: 75%;
    }

    .submitContent {
      top: 1em;
    }
    .submitContent input {
      font-size: 1.5em;
    }

    .separatorContent {
      background-color: gray;
      height: 650px;
      width: 1px;
    }
    .registerContent {
      display: flex;
      align-items: left;
      justify-content: center;
      flex-flow: column wrap;
      gap: 3em;
      height: 700px;
      width: 500px;
      /* border-bottom: solid 1px white;
    border-top: solid 1px white;  */
    }
    .registerContent h1 {
      color: white;
      font-size: 1.4em;
    }

    .additionalOptions {
      display: flex;
      align-items: left;
      justify-content: center;
      flex-flow: column wrap;
      gap: 10px;
    }
    .additionalOptions p {
      font-size: 1em;
    }
    .additionalOptions svg {
      color: white;
      position: relative;
      top: 3px;
      margin-right: 10px;
    }
    .registerContent input {
      outline: none;
      padding: 15px;
      border: none;
      border-radius: 2px;
      background-color: orange;
      color: white;
      font-size: 1.3em;
      letter-spacing: 1px;
      transition: all 0.2s linear;
      cursor: pointer;
      width: 50%;
    }
  }

  @media (max-width: 1255px) {
    .loginContent form {
      /* background-color: red; */
      display: flex;
      align-items: left;
      justify-content: center;
      flex-flow: column wrap;
      gap: 15px;
      height: 700px;
      width: 500px;
    }
    .loginContent form h1 {
      font-size: 1.5em;
    }

    .loginContent form input {
      width: 65%;
    }

    .submitContent {
      top: 1em;
    }
    .submitContent input {
      font-size: 1em;
    }

    .separatorContent {
      background-color: gray;
      height: 650px;
      width: 1px;
    }
    .registerContent {
      display: flex;
      align-items: left;
      justify-content: center;
      flex-flow: column wrap;
      gap: 3em;
      height: 700px;
      width: 400px;
      /* border-bottom: solid 1px white;
    border-top: solid 1px white;  */
    }
    .registerContent h1 {
      color: white;
      font-size: 1.4em;
    }

    .additionalOptions {
      display: flex;
      align-items: left;
      justify-content: center;
      flex-flow: column wrap;
      gap: 10px;
    }
    .additionalOptions p {
      font-size: 0.8em;
    }
    .additionalOptions svg {
      color: white;
      position: relative;
      top: 3px;
      margin-right: 10px;
    }
    .registerContent input {
      outline: none;
      padding: 15px;
      border: none;
      border-radius: 2px;
      background-color: orange;
      color: white;
      font-size: 1em;
      letter-spacing: 1px;
      transition: all 0.2s linear;
      cursor: pointer;
      width: 45%;
    }
  }

  @media (max-width: 1000px) {
    .loginContent form {
      /* background-color: red; */
      display: flex;
      align-items: left;
      justify-content: center;
      flex-flow: column wrap;
      gap: 15px;
      height: 700px;
      width: 300px;
    }
    .loginContent form h1 {
      font-size: 1.5em;
    }

    .loginContent form input {
      width: 100%;
    }

    .submitContent {
      top: 1em;
    }
    .submitContent input {
      font-size: 1em;
    }

    .separatorContent {
      background-color: gray;
      height: 650px;
      width: 1px;
    }
    .registerContent {
      display: flex;
      align-items: left;
      justify-content: center;
      flex-flow: column wrap;
      gap: 3em;
      height: 700px;
      width: 350px;
      /* border-bottom: solid 1px white;
    border-top: solid 1px white;  */
    }
    .registerContent h1 {
      color: white;
      font-size: 1.4em;
    }

    .additionalOptions {
      display: flex;
      align-items: left;
      justify-content: center;
      flex-flow: column wrap;
      gap: 10px;
    }
    .additionalOptions p {
      font-size: 0.7em;
    }
    .additionalOptions svg {
      color: white;
      position: relative;
      top: 3px;
      margin-right: 10px;
    }
    .registerContent input {
      outline: none;
      padding: 15px;
      border: none;
      border-radius: 2px;
      background-color: orange;
      color: white;
      font-size: 0.7em;
      letter-spacing: 1px;
      transition: all 0.2s linear;
      cursor: pointer;
      width: 45%;
    }
  }

  @media (max-width: 930px) {
    .separatorContent {
      background-color: gray;
      width: 650px;
      height: 2px;
    }
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1a202c;
    margin: 10px;
    border-bottom: 1px solid gray;
    flex-flow: column wrap;

    .loginContent form {
      /* background-color: red; */
      display: flex;
      align-items: left;
      justify-content: center;
      flex-flow: column wrap;
      gap: 15px;
      height: 570px;
      width: 450px;
    }
    .loginContent form h1 {
      font-size: 1.5em;
    }

    .loginContent form input {
      width: 100%;
    }

    .submitContent {
      top: 1em;
    }
    .submitContent input {
      font-size: 1em;
    }

    .registerContent {
      display: flex;
      align-items: left;
      justify-content: center;
      flex-flow: column wrap;
      gap: 3em;
      height: 500px;
      width: 450px;
      /* border-bottom: solid 1px white;
    border-top: solid 1px white;  */
    }
    .registerContent h1 {
      color: white;
      font-size: 1.9em;
    }

    .additionalOptions {
      display: flex;
      align-items: left;
      justify-content: center;
      flex-flow: column wrap;
      gap: 10px;
    }
    .additionalOptions p {
      font-size: 1em;
    }
    .additionalOptions svg {
      color: white;
      position: relative;
      top: 3px;
      margin-right: 10px;
    }
    .registerContent input {
      outline: none;
      padding: 15px;
      border: none;
      border-radius: 2px;
      background-color: orange;
      color: white;
      font-size: 1em;
      letter-spacing: 1px;
      transition: all 0.2s linear;
      cursor: pointer;
      width: 45%;
    }
  }

  @media (max-width: 685px) {
    .separatorContent {
      background-color: gray;
      width: 50%;
      height: 2px;
    }
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1a202c;
    margin: 10px;
    border-bottom: 1px solid gray;
    flex-flow: column wrap;

    .loginContent form {
      /* background-color: red; */
      display: flex;
      align-items: left;
      justify-content: center;
      flex-flow: column wrap;
      gap: 15px;
      height: 670px;
      width: 400px;
    }
    .loginContent form h1 {
      font-size: 1.5em;
    }

    .loginContent form input {
      width: 100%;
    }

    .submitContent {
      top: 1em;
    }
    .submitContent input {
      font-size: 1.5em;
    }

    .registerContent {
      display: flex;
      align-items: left;
      justify-content: center;
      flex-flow: column wrap;
      gap: 3em;
      height: 500px;
      width: 400px;
      /* border-bottom: solid 1px white;
    border-top: solid 1px white;  */
    }
    .registerContent h1 {
      color: white;
      font-size: 1.9em;
    }

    .additionalOptions {
      display: flex;
      align-items: left;
      justify-content: center;
      flex-flow: column wrap;
      gap: 10px;
    }
    .additionalOptions p {
      font-size: 1em;
    }
    .additionalOptions svg {
      color: white;
      position: relative;
      top: 3px;
      margin-right: 10px;
    }
    .registerContent input {
      outline: none;
      padding: 15px;
      border: none;
      border-radius: 2px;
      background-color: orange;
      color: white;
      font-size: 1em;
      letter-spacing: 1px;
      transition: all 0.2s linear;
      cursor: pointer;
      width: 45%;
    }
  }

  @media (max-width: 480px) {
    .separatorContent {
      background-color: gray;
      width: 50%;
      height: 1px;
    }
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1a202c;
    margin: 10px;
    border-bottom: 1px solid gray;
    flex-flow: column wrap;

    .loginContent form {
      /* background-color: red; */
      display: flex;
      align-items: left;
      justify-content: center;
      flex-flow: column wrap;
      gap: 15px;
      height: 670px;
      width: 350px;
    }
    .loginContent form h1 {
      font-size: 1.5em;
    }

    .loginContent form input {
      width: 100%;
    }

    .submitContent {
      top: 1em;
    }
    .submitContent input {
      font-size: 1.5em;
    }

    .registerContent {
      display: flex;
      align-items: left;
      justify-content: center;
      flex-flow: column wrap;
      gap: 3em;
      height: 500px;
      width: 350px;
      /* border-bottom: solid 1px white;
    border-top: solid 1px white;  */
    }
    .registerContent h1 {
      color: white;
      font-size: 1.4em;
    }

    .additionalOptions {
      display: flex;
      align-items: left;
      justify-content: center;
      flex-flow: column wrap;
      gap: 10px;
    }
    .additionalOptions p {
      font-size: 0.7em;
    }
    .additionalOptions svg {
      color: white;
      position: relative;
      top: 3px;
      margin-right: 10px;
    }
    .registerContent input {
      outline: none;
      padding: 15px;
      border: none;
      border-radius: 2px;
      background-color: orange;
      color: white;
      font-size: 1em;
      letter-spacing: 1px;
      transition: all 0.2s linear;
      cursor: pointer;
      width: 65%;
    }
  }

  @media (max-width: 380px) {
    .separatorContent {
      background-color: gray;
      width: 50%;
      height: 1px;
    }
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1a202c;
    margin: 10px;
    border-bottom: 1px solid gray;
    flex-flow: column wrap;

    .loginContent form {
      /* background-color: red; */
      display: flex;
      align-items: left;
      justify-content: center;
      flex-flow: column wrap;
      gap: 15px;
      height: 670px;
      width: 300px;
    }
    .loginContent form h1 {
      font-size: 1.5em;
    }

    .loginContent form input {
      width: 100%;
    }

    .submitContent {
      top: 1em;
    }
    .submitContent input {
      font-size: 1.5em;
    }

    .registerContent {
      display: flex;
      align-items: left;
      justify-content: center;
      flex-flow: column wrap;
      gap: 3em;
      height: 670px;
      width: 300px;
      /* border-bottom: solid 1px white;
    border-top: solid 1px white;  */
    }
    .registerContent h1 {
      color: white;
      font-size: 1.3em;
    }

    .additionalOptions {
      display: flex;
      align-items: left;
      justify-content: center;
      flex-flow: column wrap;
      gap: 10px;
    }
    .additionalOptions p {
      font-size: 0.6em;
    }
    .additionalOptions svg {
      color: white;
      position: relative;
      top: 3px;
      margin-right: 10px;
    }
    .registerContent input {
      outline: none;
      padding: 15px;
      border: none;
      border-radius: 2px;
      background-color: orange;
      color: white;
      font-size: 1em;
      letter-spacing: 1px;
      transition: all 0.2s linear;
      cursor: pointer;
      width: 65%;
    }
  }

  @media (max-width: 315px) {
    .separatorContent {
      background-color: gray;
      width: 50%;
      height: 1px;
    }
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1a202c;
    margin: 10px;
    border-bottom: 1px solid gray;
    flex-flow: column wrap;

    .loginContent form {
      /* background-color: red; */
      display: flex;
      align-items: left;
      justify-content: center;
      flex-flow: column wrap;
      gap: 15px;
      height: 670px;
      width: 280px;
    }
    .loginContent form h1 {
      font-size: 1.5em;
    }

    .loginContent form input {
      width: 100%;
    }

    .submitContent {
      top: 1em;
    }
    .submitContent input {
      font-size: 1.5em;
    }

    .registerContent {
      display: flex;
      align-items: left;
      justify-content: center;
      flex-flow: column wrap;
      gap: 3em;
      height: 670px;
      width: 280px;
      /* border-bottom: solid 1px white;
    border-top: solid 1px white;  */
    }
    .registerContent h1 {
      color: white;
      font-size: 1.3em;
    }

    .additionalOptions {
      display: flex;
      align-items: left;
      justify-content: center;
      flex-flow: column wrap;
      gap: 10px;
    }
    .additionalOptions p {
      font-size: 0.5em;
    }
    .additionalOptions svg {
      color: white;
      position: relative;
      top: 3px;
      margin-right: 10px;
    }
    .registerContent input {
      outline: none;
      padding: 15px;
      border: none;
      border-radius: 2px;
      background-color: orange;
      color: white;
      font-size: 1em;
      letter-spacing: 1px;
      transition: all 0.2s linear;
      cursor: pointer;
      width: 65%;
    }
  }
`;
