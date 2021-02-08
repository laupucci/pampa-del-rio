import image from "../../media/image.png";
import styled from "styled-components";
import { colors } from "../utils";
const { black, whitish, primaryColor, primaryColorDarker } = colors;

export const HomeContainer = styled.section`
  color: ${whitish};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 106vh;

  .background {
    position: fixed;
    height: 100vh;
    width: 100vw;
    z-index: -1;
    background: url(${image}) no-repeat center right;
    background-size: cover;
  }
  .arrow {
    width: 47, 63px;
    height: 19, 5px;
  }
  .logo {
    width: 243px;
    height: 213, 43px;
  }

  .text {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 4em;
  }

  .hero_txt {
    color: #3b3228;
    background-color: rgba(228, 228, 228, 0.6);
    width: 550px;
    height: 540px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .logo_container {
    margin: 0;
    background-color: rgba(39, 39, 39, 0.59);
    width: 463px;
    height: 540px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .p2 {
    font-family: "Quando";
    font-size: 64px;
    color: #3b3228;
  }
  .p3 {
    font-family: "Nixie One";
    font-size: 36px;
    color: #3b3228;
  }

  p {
    margin: 0;
    font-family: "Patua One";
    font-size: 62px;
    color: #3b3228;
  }
  .more {
    font-size: 18px;
    font-family: "Sanchez";
    color: #e4e4e4;
  }

  .moreI {
    margin: 1em;
    padding: 0.5em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: rgba(228, 228, 228, 0.3);
      border-radius: 7px;
    }
  }
  a {
    text-decoration: none;
  }
`;
