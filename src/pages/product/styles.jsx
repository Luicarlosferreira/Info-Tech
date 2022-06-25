import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
  padding: 7em 0.5em;
  gap: 10px;

  .categoryContent {
    display: flex;
    align-items: center;
    justify-content: left;
    left: 4em;
    gap: 4px;
  }
  .categoryContent p {
    color: #171923fd;
    cursor: pointer;
    border-bottom: solid 1px transparent;
    transition: all 0.2s linear;
  }
  .categoryContent p:hover {
    border-bottom: solid 1px #171923fd;
  }

  .categoryContent svg {
    position: relative;
  }

  .card {
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    flex-flow: column wrap;
  }
  .error {
    color: red;
    font-weight: bolder;
    font-size: 1em;
    font-family: serif;
    border-bottom: 1px solid #171923fd;
  }

  .detailsContent {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .cardImage img {
    max-width: 600px;
  }

  .detailsItem {
    width: 550px;
    height: 600px;
    display: flex;
    gap: 2em;
    justify-content: center;
    flex-flow: column wrap;
    color: white;
    background-color: #171923fd;
    padding: 1em 2em;
  }
  .detailsItem h2 {
    color: orange;
    letter-spacing: 2px;
    font-size: 2em;
  }

  .buyOption {
    display: flex;
    gap: 1em;
  }
  .buyOption button {
    width: 160px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
    transition: all 0.2s linear;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  .buyOption button svg {
    position: relative;
    top: -1.5px;
  }

  .buyOption button:nth-child(2) {
    background-color: orange;
    color: white;
  }

  .buyOption button:nth-child(1):hover {
    background-color: #f5f5f5c5;
  }

  .buyOption button:nth-child(2):hover {
    background-color: #ffa600cc;
  }

  .moreInformation p {
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s linear;
  }
  .moreInformation p:hover {
    color: orange;
  }

  @media (max-width: 1185px) {
    .cardImage img {
      max-width: 500px;
    }

    .detailsItem {
      width: 100%;
      height: 600px;
      display: flex;
      gap: 2em;
      justify-content: center;
      flex-flow: column wrap;
      color: white;
      background-color: #171923fd;
      padding: 1em 2em;
    }
    .detailsItem h2 {
      color: orange;
      letter-spacing: 2px;
      font-size: 2em;
    }
    .detailsItem p {
      font-size: 12px;
    }
  }

  @media (max-width: 955px) {
    .cardImage img {
      max-width: 400px;
    }

    .detailsItem {
      width: 400px;
      height: 600px;
      display: flex;
      gap: 2em;
      justify-content: center;
      flex-flow: column wrap;
      color: white;
      background-color: #171923fd;
      padding: 1em 2em;
    }
    .detailsItem h2 {
      color: orange;
      letter-spacing: 2px;
      font-size: 2em;
    }
  }

  @media (max-width: 840px) {
    .cardImage img {
      max-width: 350px;
    }

    .detailsItem {
      width: 350px;
      height: 350px;
      display: flex;
      gap: 1em;
      justify-content: center;
      flex-flow: column wrap;
      color: white;
      background-color: #171923fd;
      padding: 1em 2em;
    }
    .detailsItem h2 {
      color: orange;
      letter-spacing: 2px;
      font-size: 1em;
    }

    .buyOption {
      display: flex;
      gap: 1em;
    }
    .buyOption button {
      width: 100%;
      padding: 3px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 1em;
      transition: all 0.2s linear;
      font-weight: 600;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }
    .buyOption button svg {
      position: relative;
      top: -1.5px;
    }
  }

  @media (max-width: 715px) {
    .cardImage img {
      max-width: 300px;
    }

    .detailsItem {
      width: 300px;
      height: 300px;
      display: flex;
      gap: 1em;
      justify-content: center;
      flex-flow: column wrap;
      color: white;
      background-color: #171923fd;
      padding: 1em 2em;
      border-radius: 5px;
    }
    .detailsItem h2 {
      color: orange;
      letter-spacing: 2px;
      font-size: 0.8em;
    }

    .buyOption {
      display: flex;
      gap: 1em;
    }
    .buyOption button {
      width: 100%;
      padding: 2px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 0.7em;
      transition: all 0.2s linear;
      font-weight: 600;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }
    .buyOption button svg {
      position: relative;
      top: -1.5px;
    }
  }

  @media (max-width: 615px) {
    .cardImage img {
      max-width: 250px;
    }

    .detailsItem {
      width: 250px;
      height: 250px;
      display: flex;
      gap: 1em;
      justify-content: center;
      flex-flow: column wrap;
      color: white;
      background-color: #171923fd;
      padding: 1em 2em;
      border-radius: 5px;
    }
    .detailsItem h2 {
      color: orange;
      letter-spacing: 2px;
      font-size: 0.7em;
    }

    .buyOption {
      display: flex;
      gap: 1em;
    }
    .buyOption button {
      width: 100%;
      padding: 1px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 0.6em;
      transition: all 0.2s linear;
      font-weight: 600;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
    }
    .buyOption button svg {
      position: relative;
      top: -1.5px;
    }
  }

  @media (max-width: 520px) {
    background-color: white;
    display: flex;
    justify-content: center;
    flex-flow: column wrap;
    padding: 7em 0.5em;
    gap: 50px;

    .detailsContent {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column wrap;
    }
    .cardImage img {
      max-width: 400px;
    }

    .detailsItem {
      width: 400px;
      height: 200px;
      display: flex;
      gap: 1em;
      justify-content: center;
      flex-flow: column wrap;
      color: white;
      background-color: #171923fd;
      padding: 1em 2em;
      border-radius: 5px;
    }
    .detailsItem h2 {
      color: orange;
      letter-spacing: 2px;
      font-size: 0.7em;
    }

    .buyOption {
      display: flex;
      gap: 1em;
    }
    .buyOption button {
      width: 100%;
      padding: 1px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 0.6em;
      transition: all 0.2s linear;
      font-weight: 600;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
    }
    .buyOption button svg {
      position: relative;
      top: -1.5px;
    }
  }

  @media (max-width: 439px) {
    background-color: white;
    display: flex;
    justify-content: center;
    flex-flow: column wrap;
    padding: 7em 0.5em;
    gap: 50px;

    .detailsContent {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column wrap;
    }
    .cardImage img {
      max-width: 350px;
    }

    .detailsItem {
      width: 350px;
      height: 100%;
      display: flex;
      gap: 1em;
      justify-content: center;
      flex-flow: column wrap;
      color: white;
      background-color: #171923fd;
      padding: 1em 1em;
      border-radius: 5px;
    }
    .detailsItem h2 {
      color: orange;
      letter-spacing: 2px;
      font-size: 1.5em;
    }

    .buyOption {
      display: flex;
      gap: 1em;
    }
    .buyOption button {
      width: 100%;
      padding: 1px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 0.9em;
      transition: all 0.2s linear;
      font-weight: 600;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
    }
    .buyOption button svg {
      position: relative;
      top: -1.5px;
    }
  }

  @media (max-width: 371px) {
    background-color: white;
    display: flex;
    justify-content: center;
    flex-flow: column wrap;
    padding: 7em 0.5em;
    gap: 50px;

    .detailsContent {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column wrap;
    }
    .cardImage img {
      max-width: 300px;
    }

    .detailsItem {
      width: 300px;
      height: 100%;
      display: flex;
      gap: 1em;
      justify-content: center;
      flex-flow: column wrap;
      color: white;
      background-color: #171923fd;
      padding: 1em 1em;
      border-radius: 5px;
    }
    .detailsItem h1 {
      font-size: 1.5em;
    }
    .detailsItem h2 {
      color: orange;
      letter-spacing: 2px;
      font-size: 1.5em;
    }

    .buyOption {
      display: flex;
      gap: 1em;
    }
    .buyOption button {
      width: 100%;
      padding: 1px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 0.6em;
      transition: all 0.2s linear;
      font-weight: 600;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
    }
    .buyOption button svg {
      position: relative;
      top: -1.5px;
    }
  }

  @media (max-width: 311px) {
    background-color: white;
    display: flex;
    justify-content: center;
    flex-flow: column wrap;
    padding: 7em 0.5em;
    gap: 50px;

    .detailsContent {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column wrap;
    }
    .cardImage img {
      max-width: 250px;
    }

    .detailsItem {
      width: 250px;
      height: 100%;
      display: flex;
      gap: 1em;
      justify-content: center;
      flex-flow: column wrap;
      color: white;
      background-color: #171923fd;
      padding: 1em 1em;
      border-radius: 5px;
    }
    .detailsItem h1 {
      font-size: 1.1em;
    }
    .detailsItem h2 {
      color: orange;
      letter-spacing: 2px;
      font-size: 1.2em;
    }

    .buyOption {
      display: flex;
      flex-flow: column wrap;
      gap: 0.5em;
    }
    .buyOption button {
      width: 100%;
      padding: 12px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 0.6em;
      transition: all 0.2s linear;
      font-weight: 600;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
    }
    .buyOption button svg {
      position: relative;
      top: -1.5px;
    }
  }
`;
