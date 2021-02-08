import React from "react";
import { Link } from "react-router-dom";
import logo from "../../media/logo.svg";
import { HomeContainer } from "./style";
import image from "../../media/image.svg";
import pol from "../../media/pol.svg";

export default function Home() {
  return (
    <HomeContainer>
      <div className="background" />
      <div className="container">
        <div className="hero_txt">
          <div>
            <h1 className="title">
              Hacé la
              <br />
              inversión
              <br />
              correcta.
            </h1>
            <p className="subtitle">
              Lejos del ruido,
              <br />
              cerca de todo
            </p>
          </div>
        </div>
        <div className="logo_container">
          <img src={logo} className="logo" alt="Pampas del Rio" />
        </div>
      </div>
      <Link className="cta" to={`/`}>
        <span className="cta_txt">VER MÁS</span>
        <img className="arrow" src={pol} alt="poli" />
      </Link>
    </HomeContainer>
  );
}
