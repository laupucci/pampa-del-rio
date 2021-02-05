import splash from "../../media/Splash.png";
import styled from "styled-components";
import { colors } from "../utils";
const { black, whitish, primaryColor, primaryColorDarker, lightGray } = colors;

export const HomeContainer = styled.section`
  color: ${whitish};
  background: none;
  overflow: hidden;
  height: 97vh;
  background: url(${splash}) no-repeat center right fixed;
  background-size: cover;

  .dark_blur {
    height: 100%;
    background: rgba(0, 0, 0, 0.25);
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .hero_container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80vw;

    .hero_txt {
      color: ${lightGray};

      .title_top {
        font-size: 3rem;
        margin-bottom: 0;
        line-height: 1rem;
      }
      .title_bottom {
        font-size: 6rem;
      }
    }

    .logo {
      width: 20vw;
    }
  }

  a {
    text-decoration: none;
  }

  .moreButton {
    margin-left: 0.5rem;
    font-family: "Sanchez", serif;
    font-weight: bold;
    font-size: 12px;
    color: ${whitish};
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
