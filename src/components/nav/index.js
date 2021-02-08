import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "./style";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleScroll = () => {
    const scroll = window.scrollY;
    if (scroll) setActive(true);
    else if (active) setActive(false);
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <Container active={active}>
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
