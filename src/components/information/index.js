import React from "react";
import tenor from "../../media/tenor.gif";
import { InformationContainer } from "./style";

export default function Information() {
  return (
    <div>
      <InformationContainer>
        <div className="imagen" />
        <div className="container">
          <img src={tenor} alt="sitio en construcción" />
          <p>En construcción</p>
        </div>
      </InformationContainer>
    </div>
  );
}
