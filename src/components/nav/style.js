import { colors } from "../utils";
import styled from "styled-components";
const { primaryColor, whitish } = colors;

export const Container = styled.header`
  padding: 0 12vw;
  position: fixed;
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ active }) => (active ? "rgba(0, 0, 0, 0.5)" : "none")};
  transition: background 0.5s ease;
  z-index: 10;

  .logo {
    font-size: 1.5rem;
    font-family: "Julius Sans One";
    color: ${whitish};
    cursor: pointer;
  }

  .menu_open,
  .menu_close {
    display: none;
  }

  .menu {
    display: flex;

    .menu_item {
      color: ${whitish};
      padding: 1rem;
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        background-color: rgba(163, 189, 49, 0.6);
        border-radius: 7px;
      }
    }
  }

  @media screen and (max-width: 900px) {
    width: 100vw;
    padding: 2rem;
    justify-content: space-between;

    .logo {
      font-size: 1.5rem;
    }

    .menu_close.active {
      display: block;
      width: 1.5rem;
      height: 1.5rem;
      position: absolute;
      top: 3vh;
      right: 12vw;
      z-index: 11;
      cursor: pointer;
    }
    .menu_open.active {
      display: block;
      width: 1.7rem;
      height: 1.7rem;
      cursor: pointer;
    }

    .menu {
      position: absolute;
      padding-top: 2rem;
      top: -100vh;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.8);
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      transition: 0.3s ease-out;

      .menu_item {
        width: 100vw;
        padding: 3rem;
        &:hover {
          background-color: ${primaryColor};
          border-radius: 0%;
        }
        &:focus {
          background-color: ${primaryColor};
          border-radius: 0%;
        }
        p {
          text-align: center;
          font-size: 1.5rem;
        }
      }
    }

    .menu.active {
      top: 0;
    }
  }
`;

export const ArrowStyle = styled.span`
  img {
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    width: 10vw;
    max-width: 50px;
    height: 10vw;
    max-height: 50px;
    display: ${({ active }) => (active ? "block" : "none")};
    cursor: pointer;
    z-index: 5;
  }
`;
