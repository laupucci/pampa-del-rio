import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./style";
import logo from "../../media/logo.png";

const Navbar = () => {

  return (
      <Container>
          <Link to={`/`}>
            <img alt="pampa" className="logo" src={logo} />
          </Link>
        <nav className="menu">
        </nav>
      </Container>
  );
};

export default Navbar;
