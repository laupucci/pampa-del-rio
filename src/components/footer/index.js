import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./style";
import logo from "../../media/logo.svg";

const Footer = () => {

  return (
      <Container>
        <div className="footer">
        <div className="info">
          <p>Loteos Pampa del Río</p>
          <p>Dirección: Iturraspe y Avenida Presidente Perón</p>
        </div>
        <div>
          <Link to={`/`}>
            <img alt="pampa" className="logo" src={logo} />
          </Link>
          </div>
        </div>
      </Container>
  );
};

export default Footer;