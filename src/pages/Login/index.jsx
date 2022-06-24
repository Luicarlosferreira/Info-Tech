import { Section } from "./styles";
import { FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(email);
    // console.log(password);
    setEmail("");
    setPassword("");
  };

  return (
    <Section>
      <div className="loginContent">
        <form onSubmit={handleSubmit}>
          <h1>Login to your account</h1>

          <label>
            <input
              type="text"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </label>

          <label>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </label>

          <div className="forgotPassword">
            <a href="#">
              <span>Forgot your password?</span>
            </a>
          </div>
          <div className="submitContent">
            <label>
              <input type="submit" value="Sign In" />
            </label>
          </div>
        </form>
      </div>
      <div className="separatorContent"></div>
      <div className="registerContent">
        <h1>
          Don't have an account yet?
          <br /> Register now!
          <br />
        </h1>

        <div className="additionalOptions">
          <p>
            <FiCheck />
            Track your orders
          </p>
          <p>
            <FiCheck />
            Save your payment and shipping details and save time
          </p>
          <p>
            <FiCheck />
            Online Returns & Exchanges
          </p>
        </div>
        <Link to="/register">
          <input type="submit" value="Create an Account" />
        </Link>
      </div>
    </Section>
  );
};
