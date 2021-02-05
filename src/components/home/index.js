import React from "react";
import { Link } from "react-router-dom";
import logo from "../../media/logo_darkbkg.svg";
import { HomeContainer } from "./style";

export default function Home() {
  return (
    <div>
      <HomeContainer>
        {/* <div className="bkg"></div> */}
        <div className="dark_blur">
          <div className="hero_container">
            <div className="hero_txt">
              <h1 className="title_top">Hacé la inversión</h1>
              <h1 className="title_bottom">correcta</h1>
              <Link to={`/`}>
                <button className="moreButton">VER MÁS</button>
              </Link>
            </div>
            <img className="logo" src={logo} alt="pampa" />
          </div>
        </div>
      </HomeContainer>
    </div>
  );
}
