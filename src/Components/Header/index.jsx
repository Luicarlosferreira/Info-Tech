import React, { useState } from "react";
import { Container } from "./styles";
import { FaBars } from "react-icons/fa";
import Sidebar from "../Sidebar";
import SearchField from "../SearchField";
import { Link } from "react-router-dom";

export const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <Container>
        <FaBars onClick={showSidebar} />
        <Link to="/">
          <span>INFO-TECH</span>
        </Link>
        {sidebar && <Sidebar active={setSidebar} />}

        <SearchField />
      </Container>
    </>
  );
};
