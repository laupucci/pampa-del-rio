import React from "react";
import { UsContainer } from "./style";
import map from "../../media/Map.svg";
import dest from "../../media/Destination.svg";
import comp from "../../media/Compass.svg";
import turn from "../../media/Turn.svg";
import { Cta } from "../utils";

export default function Us() {

  return (
    <UsContainer id="nosotros">
      <div className="nosotros">
        <h2>¿Quiénes somos?</h2>
        <p className="nosotros_txt">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.
        </p>
      </div>
      <div className="caracteristicas">
        <div className="list_item">
          <img src={map} className="item_icon" alt="Icóno del item" />
          <p className="item_txt">Ubicado frente a la ruta 11</p>
        </div>
        <div className="list_item">
          <img src={dest} className="item_icon" alt="Icóno del item" />
          <p className="item_txt">A 29 minutos de la ciudad de Santa Fe</p>
        </div>
        <div className="list_item">
          <img src={comp} className="item_icon" alt="Icóno del item" />
          <p className="item_txt">Bajada al río Coronda a 1500 metros</p>
        </div>
        <div className="list_item">
          <img src={turn} className="item_icon" alt="Icóno del item" />
          <p className="item_txt">
            Próximamente acceso por autopista Rosario Santa Fe
          </p>
        </div>
      </div>
      { window.location.pathname === '/nosotros' ? <></> :
      <Cta text="UBICACIÓN Y CONTACTO" to="contacto" />}
    </UsContainer>
  );
}
