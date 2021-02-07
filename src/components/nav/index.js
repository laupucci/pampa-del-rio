import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./style";
import logo from "../../media/logo.svg";

const Navbar = () => {

  return (
      <Container>
          <Link to={`/`}>
            <p className="logo">Pampa del Río</p>
          </Link>
        <nav className="menu">
        <Link to={`/informacion`}>
            <p className="p2">Documentación</p>
          </Link>
        <Link to={`/nosotros`}>
            <p className="p2">Nosotros</p>
          </Link>
          <Link to={`/ubicacion`}>
            <p className="p2">Ubicación</p>
          </Link>
          <Link to={`/contacto`}>
            <p className="p2">Contacto</p>
          </Link>
        </nav>
      </Container>
  );
};

export default Navbar;
