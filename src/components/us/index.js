import React from "react";
import { Link } from "react-router-dom";
import { UsContainer } from "./style";
import map from "../../media/Map.svg"
import dest from "../../media/Destination.svg"
import comp from "../../media/Compass.svg"
import turn from "../../media/Turn.svg"


export default function Us() {
  return (
    <UsContainer>
       <div className="imagen"/>
      <div className="info">
        <h2>¿Quiénes somos?</h2>
        <p className="desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
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
          <img src={dest} className="img2"/>
          <div className="p">
          <p className="p1">A 29 minutos de la ciudad de Santa Fe</p>
          </div>
        </div>
          <div className="imgIns">
            <img src={comp} className="img3"/>
            <div className="p">
            <p className="p1">Bajada al río Coronda a 1500 metros</p>
            </div>
          </div>
          <div className="imgIns">
            <img src={turn} className="img4"/>
            <div className="p">
            <p className="p1">Próximamente acceso por autopista Rosario Santa Fe</p>
            </div>
          </div>
        </div>
      
    </UsContainer>
  );
}
