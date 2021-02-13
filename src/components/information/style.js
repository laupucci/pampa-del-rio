import styled from "styled-components";
import { colors } from "../utils";
import image from "../../media/image.png";
const { whitish } = colors;

export const InformationContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${whitish};
  font-family: "Sanchez";
  font-size: 170%;
  p {
    color: ${whitish};
    font-family: "Sanchez";
    margin: 2em;
  }
  .imagen {
    height: 100vh;
    width: 100%;
    position: absolute;
    z-index: -1;
    background: url(${image}) no-repeat center right;
    background-size: cover;
  }
  .container {
    color: #3b3228;
    background-color: rgba(39, 39, 39, 0.75);
    width: 45vw;
    height: 75vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 500px) {
    .container {
      width: 70vw;
      height: 55vh;
    }
  }
`;
