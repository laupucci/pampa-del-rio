import styled from "styled-components";
import { colors } from "../utils";
import image from "../../media/image.png";
const { whitish} = colors;

export const MapContainer = styled.section`
  color: ${whitish};
  background: none;
  overflow: hidden;
  height: 78vh;
  justify-content:center;
  align-items:center;
  align-content: center;
  .imagen {
    height: 100vh;
    width: 100%;
    position: absolute;
    z-index: -1;
    background: url(${image}) no-repeat center right;
    background-size: cover;
    
  }
`