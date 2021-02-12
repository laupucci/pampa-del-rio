import styled from "styled-components";
import { colors } from "../utils";
const { black, whitish, darkBrown } = colors;

export const UsContainer = styled.section`
  position: relative;
  color: ${whitish};
  display: flex;
  color: ${black};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Sanchez";
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  scroll-behavior: smooth;

  .nosotros {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: rgba(228, 228, 228, 0.8);
    width: 80vw;
    height: 45vh;

    h2 {
      font-family: "Quando";
      font-size: 4rem;
      margin-bottom: 0.5em;
      width: 30%;
      font-weight: normal;
      color: ${darkBrown};
    }

    p::selection {
      background: rgba(161, 76, 75, 0.7);
      color: white;
    }

    .nosotros_txt {
      width: 40%;
    }
  }

  .caracteristicas {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    background-color: rgba(161, 76, 75, 0.8);
    width: 75vw;
    /* height: 30vh; */
    .list_item {
      width: 25%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 1.2em;

      .item_icon {
        margin-bottom: 1rem;
        height: 5rem;
        width: 5rem;
      }

      .item_txt {
        color: #e4e4e4;
        text-align: center;
      }
    }
  }

  .cta {
    position: absolute;
    bottom: 0;
    width: 100%;
    overflow: hidden;
    padding: 0.5rem 0.5rem 0 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    transition: 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
      .arrow {
        transform: scale(1.5);
        margin-top: -0.4rem;
      }
    }

    .cta_txt {
      font-size: 1rem;
      font-family: "Sanchez";
      color: #e4e4e4;
      transition: 0.3s ease-in-out;
    }
    .arrow {
      margin-top: -0.2rem;
      width: 2rem;
      height: 2rem;
      transition: 0.3s ease-in-out;
    }
  }
`;
