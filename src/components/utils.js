import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import pol from "../media/pol.svg";

export const colors = {
  black: "#1C1816",
  primaryColor: "#A3BD31",
  primaryColorDarker: "#7FBD31",
  primaryColorDarker2: "#58871e",
  secondaryDark: "#A14C4B",
  darkColor: "#434241",
  darkBrown: "#272727",
  whitish: "#E8E8E8",
};

export const Cta = ({ text, to }) => {
  return (
    <ScrollLink to={to} spy={true} smooth={true} duration={500} className="cta">
      <span className="cta_txt">{text}</span>
      <img className="arrow" src={pol} alt="poli" />
    </ScrollLink>
  );
};

export const NavLink = ({ to, children, handleClick }) => {
  return window.location.pathname === "/" ? (
    <ScrollLink
      className="menu_item"
      onClick={handleClick}
      to={to}
      smooth={true}
      duration={600}
    >
      {children}
    </ScrollLink>
  ) : (
    <Link className="menu_item" to={to === "home" ? "/" : `/${to}`}>
      {children}
    </Link>
  );
};
