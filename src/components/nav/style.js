import { colors } from "../utils";
import styled from "styled-components";
const { black, whitish, primaryColor } = colors;

export const Container = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  font-family: "'Julius Sans One";
  background-color: rgba(228, 228, 228, 0.15);
  height: 3.9em;
  padding: 3px;
  margin-bottom: 0.3em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;

  .logo {
    font-size: 1.5em;
    font-family: "Julius Sans One";
    margin-left: 6em;
    color: ${whitish};
    padding: 1em;
  }
  .menu {
    display: flex;
    flex-direction: "row";
    margin-right: 10.7em;
  }
  .p2 {
    color: ${whitish};
    padding: 1em;
    font-size: 1em;
    font-family: "Sanchez";
    &:hover {
      background-color: ${primaryColor};
      border-radius: 7px;
    }
  }
  a {
    text-decoration: none;
  }
  @media (max-width: 500px) {
    position: fixed;
    top: 0;
    width: 100vh;
    font-family: "'Julius Sans One";
    background-color: rgba(228, 228, 228, 0.15);
    height: 2em;
    padding: 3px;
    margin-bottom: 2px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;

    .logo {
      font-size: 1em;
      font-family: "Julius Sans One";
      margin-left: 0.7em;
      color: ${whitish};
      padding: 1em;
      width: 5em;
    }
    .menu {
      display: flex;
      flex-direction: "row";
    }
    .p2 {
      color: ${whitish};
      padding: 1em;
      font-size: 0.8em;
      font-family: "Sanchez";
      &:hover {
        background-color: ${primaryColor};
        border-radius: 7px;
      }
    }
    a {
      text-decoration: none;
    }
  }
`;
