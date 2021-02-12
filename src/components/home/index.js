import React from "react";
import logo from "../../media/logo.svg";
import { HomeContainer } from "./style";
import { Cta } from "../utils";

export default function Home() {
  return (
    <HomeContainer id="home">
      <div className="container">
        <div className="hero_txt">
          <h1 className="title">Hacé la inversión correcta.</h1>
          <p className="subtitle">
            Lo importante está acá, lo demás esta cerca.
          </p>
        </div>
        <div className="logo_container">
          <img src={logo} className="logo" alt="Pampas del Rio" />
        </div>
      </div>
      <Cta text="VER MÁS" to="nosotros" />
    </HomeContainer>
  );
}
