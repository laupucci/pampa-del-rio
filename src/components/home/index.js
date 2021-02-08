import React from "react";
import { Link } from "react-router-dom";
import logo from "../../media/logo.svg";
import { HomeContainer } from "./style";
import { UsContainer } from "../us/style";
import map from "../../media/Map.svg";
import dest from "../../media/Destination.svg";
import comp from "../../media/Compass.svg";
import turn from "../../media/Turn.svg";
import pol from "../../media/pol.svg";

export default function Home() {
  return (
    <>
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

      <UsContainer>
        <div className="info">
          <h2>¿Quiénes somos?</h2>
          <p className="nosotros_txt">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
          </p>
        </div>
        <div className="imgs1">
          <div className="imgIns">
            <img src={map} className="img1" />
            <div className="p">
              <p className="p1">Frente a la ruta 11</p>
            </div>
          </div>
          <div className="imgIns">
            <img src={dest} className="img2" />
            <div className="p">
              <p className="p1">A 29 minutos de la ciudad de Santa Fe</p>
            </div>
          </div>
          <div className="imgIns">
            <img src={comp} className="img3" />
            <div className="p">
              <p className="p1">Bajada al río Coronda a 1500 metros</p>
            </div>
          </div>
          <div className="imgIns">
            <img src={turn} className="img4" />
            <div className="p">
              <p className="p1">
                Próximamente acceso por autopista Rosario Santa Fe
              </p>
            </div>
          </div>
        </div>
      </UsContainer>
    </>
  );
}
