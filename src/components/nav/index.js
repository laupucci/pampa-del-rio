import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "./style";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const comeFromInfo = true

  const handleScroll = () => {
    const scroll = window.scrollY;
    if (scroll) setActive(true);
    else setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container active={active}>
      <Link to="/">
        <p className="logo">Pampa del Río</p>
      </Link>
      <nav className="menu">
        <Link to={`/informacion`}>
          <p className="p2">Documentación</p>
        </Link>
        { window.location.pathname === '/' ?
        <ScrollLink to="nosotros" smooth={true} duration={600}>
          <p className="p2">Quiénes Somos?</p>
        </ScrollLink> :
        <Link to={{ pathname:`/nosotros`, params: comeFromInfo }}>
          <p className="p2">Quiénes Somos?</p>
        </Link>}
        { window.location.pathname === '/' ?
        <ScrollLink to="contacto" smooth={true} duration={600}>
          <p className="p2">Ubicación y contacto</p>
        </ScrollLink> :
        <Link to={`/contacto`}>
          <p className="p2">Ubicación y contacto</p>
        </Link>}
      </nav>
      <ScrollLink to="home" smooth={true} duration={500} className="top">
        <span>^</span>
      </ScrollLink>
    </Container>
  );
};

export default Navbar;
