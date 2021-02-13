import { colors } from "../utils";
import styled from "styled-components";
const { whitish } = colors;

export const Container = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  font-family: "'Julius Sans One";
  background-color: ${({ active }) => (active ? "rgba(0, 0, 0, 0.5)" : "none")};
  height: 10vh;
  padding: 0 12vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 5;
  transition: background 0.5s ease;

  .logo {
    font-size: 1.5rem;
    font-family: "Julius Sans One";
    color: ${whitish};
    padding: 1em;
  }
  .menu {
    display: flex;
    flex-direction: "row";
  }
  .p2 {
    color: ${whitish};
    padding: 1em;
    font-size: 16px;
    font-family: "Sanchez";
    &:hover {
      background-color: rgba(163, 189, 49, 0.6);
      border-radius: 7px;
    }
  }
  a {
    text-decoration: none;
    cursor: pointer;
  }

  .top {
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    border: 2px solid ${whitish};
    background: none;
    font-size: 3rem;
    font-weight: bold;
    display: ${({ active }) => (active ? "flex" : "none")};
    justify-content: center;
    align-items: center;
    color: ${whitish};
    cursor: pointer;
    span {
      position: relative;
      top: 0.5rem;
    }
  }
`;
