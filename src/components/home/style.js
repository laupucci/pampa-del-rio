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

  .imagen {
    height: 106vh;
    width: 100%;
    position: absolute;
    z-index: -1;
    background: url(${image}) no-repeat center right;
    background-size: cover;
  }
  .pol {
    width: 10vh;

  }
  .logo {
    width: 40vh;
   
  }

  .text {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 10vh;
  }

  .hero_txt {
    color: #3b3228;
    background-color: rgba(228, 228, 228, 0.6);
    width: 85vh;
    height: 82vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .logo_container {
    margin: 0;
    background-color: rgba(39, 39, 39, 0.59);
    width: 69vh;
    height: 82vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .p2 {
    font-family: "Quando";
    font-size: 12vh;
    color: #3b3228;
  }
  .p3 {
    font-family: "Nixie One";
    font-size: 7vh;
    color: #3b3228;
  }

  p {
    margin: 0;
   
  }
  .more {
    font-size: 3vh;
    font-family: "Sanchez";
    color: #e4e4e4;
  }

  .moreI {
    margin: 1.5vh;
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


  @media (max-width: 500px) {
    color: ${whitish};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

    .imagen {
      height: 110vh;
      //width: 100vh;
      background: url(${image}) no-repeat center right;
      position: absolute;
      z-index: -1;
      background-size: cover;
    }

  .pol {
    width: 2.3em;
    height: 1.2em;
  }
  .logo {
    width: 9em;
  }


    .text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 4em;
    }

    .hero_txt {
      color: #3b3228;
      background-color: rgba(228, 228, 228, 0.6);
      width: 14em;
      height: 14em;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .logo_container {
      margin: 0;
      background-color: rgba(39, 39, 39, 0.59);
      width: 14em;
      height: 14em;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .p2 {
      font-family: "Quando";
      font-size: 34px;
      color: #3b3228;
    }
    .p3 {
      font-family: "Nixie One";
      font-size: 18px;
      color: #3b3228;
    }

    p {
      margin: 0;
      font-family: "Patua One";
      font-size: 31px;
      color: #3b3228;
    }
    .more {
      font-size: 10px;
      font-family: "Sanchez";
      color: #e4e4e4;
    }

    .moreI {
      /* margin: 1em; */
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
  }

  
`;
