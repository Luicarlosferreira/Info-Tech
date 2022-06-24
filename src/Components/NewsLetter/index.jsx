import { useState } from "react";
import { Container, NewsLetterContent } from "./styles";

export const NewsLetter = () => {
  const [newsLetter, setNewsLetter] = useState("");
  const [thermsNewsLetter, setThermsNewsLetter] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewsLetter("");
    setThermsNewsLetter("");
    console.log(newsLetter, thermsNewsLetter);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <NewsLetterContent>
          <div className="infoDeals">GET THE LATEST DEALS AND MORE</div>

          <div className="latestDealsContent">
            <input
              type="email"
              placeholder="Enter email address"
              onChange={(e) => setNewsLetter(e.target.value)}
              value={newsLetter}
              required
            />
            <button type="submit">Sign Up</button>
          </div>

          <div className="termsContainer">
            <input
              type="checkbox"
              onChange={() =>
                setThermsNewsLetter(
                  "The user has accepted the company's terms and conditions."
                )
              }
              required
            />
            <p>
              I have read and accepted Info-Tech's
              <mark> general conditions</mark> and <mark>privacy policy</mark>.
            </p>
          </div>
        </NewsLetterContent>
      </form>
    </Container>
  );
};
