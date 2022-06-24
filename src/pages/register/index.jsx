import { Section } from "./styles";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [privacyPolicy, setPrivacyPolicy] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("email: ", email);
    // console.log("name: ", name);
    // console.log("last name: ", lastName);
    // console.log("password: ", password);
    // console.log("privacyPolicy: ", privacyPolicy);
    setEmail("");
    setPassword("");
    setName("");
    setLastName("");
    setPrivacyPolicy("");
  };

  return (
    <Section>
      <div className="registerContent">
        <form onSubmit={handleSubmit}>
          <h1>Create an Account</h1>

          <label>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </label>
          <label>
            <input
              type="text"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              required
            />
          </label>

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

          <div className="thermsPolicy">
            <label>
              <input
                type="checkbox"
                onChange={(e) => setPrivacyPolicy(e.target.value)}
                value={privacyPolicy}
                required
              />
            </label>

            <span>
              I have read and accept <mark>Privacy Policy</mark>
            </span>
          </div>
          <div className="submitContent">
            <label>
              <input type="submit" value="Create an Account" />
            </label>
          </div>
          <span className="loginSession">
            Already have an account?
            <Link to="/login">
              <mark> Sign in</mark>
            </Link>
          </span>
        </form>
      </div>
    </Section>
  );
};
