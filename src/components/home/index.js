import React from "react";
import { Link } from "react-router-dom";
import logo from "../../media/logo.svg";
import { HomeContainer } from "./style";
import image from "../../media/image.svg";
import pol from "../../media/pol.svg";

export default function Home() {
  return (
    <HomeContainer>
      <div className="imagen" />
      {/* <div className="container"> */}
        <div className="text">
          <div className="hero_txt">
            <div className="hace">
              <p className="p2">Hacé la</p>
              <p className="p2">inversión</p>
              <p className="p2">correcta.</p>
            </div>
            <div className="lejos">
              <p className="p3">Lejos del ruido,</p>
              <p className="p3">cerca de todo</p>
            </div>
          </div>
          <div className="logo_container">
            <img src={logo} className="logo" alt="pampa" />
          </div>
        </div>
      {/* </div> */}
      <Link to={`/`}>
        <div className="moreI">
          <p className="more">VER MÁS</p>
          <img className="pol" src={pol} alt="poli" />
        </div>
      </Link>
    </HomeContainer>
  );
}
