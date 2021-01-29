import React from "react";
import { Link } from "react-router-dom";
import logo from "../../media/logo.png";
import { HomeContainer } from "./style";


export default function Home() {
  return (
    <div>
      <HomeContainer>
        <div className="bkg"></div>
        <div className="dark_blur">
            <div className="text">
          <div className="hero_txt">
            <p>Hacé la inversión</p>
            <p className="p2">correcta</p>
            <Link to={`/`}>
            <button
              className="moreButton">
              <div>VER MÁS</div>
            </button>
            </Link>
          </div>
          <div className="logo_container">
            <img src={logo} alt="pampa" />
        
          </div>
          </div>
        </div>
      </HomeContainer>
    </div>
  );
}
