import splash from "../../media/Splash.png";
import styled from "styled-components";
import { colors } from "../utils";
const { black, whitish, primaryColor, primaryColorDarker } = colors;

export const HomeContainer = styled.section`
  color: ${whitish};
  background: none;
  overflow: hidden;
  height: 97vh;


  .bkg {
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: -1;
    background: url(${splash}) no-repeat center right;
    background-size: cover;
    /* filter: blur(10px); */
  }
  .dark_blur {
    height: 100%;
    background: rgba(0, 0, 0, 0.25);
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;}

    .text{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center
    }

  .hero_txt {
      /* margin-top:100px; */
      text-align: left;
      margin-right:8em
  }

  .p2 {
    font-family: 'Patua One';
    font-size: 124px;
    margin: 0;
    padding: 0
  }
  p{
    font-family: 'Patua One';
    font-size: 62px;
    margin: 0

  }

      a {
        text-decoration: none;
      }

      img{
        width: 509px
      }

  .moreButton {
    margin-left: 0.5rem;
    font-family: "Lato", sans-serif;
    font-size: 12px;
    color: ${black};
    background-color: ${primaryColor};
    padding: 0.5rem;
    border-radius: 5px;
    cursor: pointer;
    border: 1px solid ${primaryColor};
    &:hover {
      color: white;
      border: 1px solid;
      background-color: ${primaryColorDarker};
    }
  }
`;