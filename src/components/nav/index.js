import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Container, ArrowStyle } from "./style";
import { NavLink } from "../utils";
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
    <>
      <Container active={active}>
        <NavLink to="home">
          <p className="logo">Pampa del Río</p>
        </NavLink>

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
          <NavLink to="nosotros" handleClick={handleClick}>
            <p>¿Quiénes Somos?</p>
          </NavLink>
          <NavLink to="contacto" handleClick={handleClick}>
            <p>Ubicación y contacto</p>
          </NavLink>
        </nav>
      </Container>

      <ArrowStyle active={active}>
        <ScrollLink to="home" smooth={true} duration={500} className="top">
          <img src={UpArrow} alt="Ir arriba" />
        </ScrollLink>
      </ArrowStyle>
    </>
  );
};

export default Navbar;
