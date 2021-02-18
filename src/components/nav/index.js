import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Container } from "./style";
import MenuIcon from "../../media/menu.svg";
import CloseIcon from "../../media/close.svg";
import UpArrow from "../../media/up-arrow.svg";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [sidebarActive, setSidebarActive] = useState(false);
  const closer = useRef(null);
  const opener = useRef(null);
  const menu = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const scroll = window.scrollY;
    if (scroll) setActive(true);
    else setActive(false);
  };

  // Toggles the navbar
  const handleClick = () => {
    console.log("clicked");
    if (sidebarActive) {
      opener.current.classList.add("active");
      closer.current.classList.remove("active");
      menu.current.classList.remove("active");
    } else {
      opener.current.classList.remove("active");
      closer.current.classList.add("active");
      menu.current.classList.add("active");
    }
    setSidebarActive(!sidebarActive);
  };

  return (
    <Container active={active}>
      <div className="logo_container">
        {window.location.pathname === "/" ? (
          <ScrollLink to="home" smooth={true} duration={500}>
            <p className="logo">Pampa del Río</p>
          </ScrollLink>
        ) : (
          <Link to="/">
            <p className="logo">Pampa del Río</p>
          </Link>
        )}
      </div>

      <img
        className="menu_open active"
        onClick={handleClick}
        ref={opener}
        src={MenuIcon}
        alt="Abrir Menú"
      />
      <img
        className="menu_close"
        onClick={handleClick}
        ref={closer}
        src={CloseIcon}
        alt="Cerrar Menú"
      />

      <nav ref={menu} className="menu" onClick={handleClick}>
        <Link className="menu_item" to={`/informacion`}>
          <p>Documentación</p>
        </Link>
        {window.location.pathname === "/" ? (
          <ScrollLink
            className="menu_item"
            to="nosotros"
            smooth={true}
            duration={600}
            onClick={handleClick}
          >
            <p>¿Quiénes Somos?</p>
          </ScrollLink>
        ) : (
          <Link
            className="menu_item"
            to={{ pathname: `/nosotros`, params: true }}
          >
            <p>¿Quiénes Somos?</p>
          </Link>
        )}
        {window.location.pathname === "/" ? (
          <ScrollLink
            className="menu_item"
            to="contacto"
            smooth={true}
            duration={600}
            onClick={handleClick}
          >
            <p>Ubicación y contacto</p>
          </ScrollLink>
        ) : (
          <Link className="menu_item" to={`/contacto`}>
            <p>Ubicación y contacto</p>
          </Link>
        )}
      </nav>
      <ScrollLink to="home" smooth={true} duration={500} className="top">
        <img src={UpArrow} alt="Ir arriba" />
      </ScrollLink>
    </Container>
  );
};

export default Navbar;
