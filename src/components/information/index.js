import React from "react";
import tenor from "../../media/tenor.gif"
import { InformationContainer } from "./style";


export default function Information() {
  return (
    <div>
      <InformationContainer>
      <img src={tenor}/>
      <p>En construcción</p>
      </InformationContainer>
    </div>
  );
}
