import React from "react";
import { Link } from "react-scroll";
import pol from "../media/pol.svg";
import styled from "styled-components";

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
    <Link to={to} spy={true} smooth={true} duration={500} className="cta">
      <span className="cta_txt">{text}</span>
      <img className="arrow" src={pol} alt="poli" />
    </Link>
  );
};
