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
        <Link to={`/informacion`}>
            <p>Información</p>
          </Link>
        <Link to={`/nosotros`}>
            <p>Nosotros</p>
          </Link>
          <Link to={`/ubicacion`}>
            <p>Ubicación</p>
          </Link>
          <Link to={`/contacto`}>
            <p>Contacto</p>
          </Link>
        </nav>
      </Container>
  );
};

export default Navbar;
