import { Container } from "./styles";
import { FaSadTear } from "react-icons/fa";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <Container>
      <FaSadTear />
      <div>
        <h2>Oops! Page not found</h2>
      </div>

      <Link to="/">
        <span>Go Back</span>
      </Link>
    </Container>
  );
};
