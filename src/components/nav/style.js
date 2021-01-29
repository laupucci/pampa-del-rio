import { colors } from "../utils";
import styled from "styled-components";
const {
  black,
} = colors;

export const Container = styled.header`
  position: fixed;
  width: 100%;
  font-family: "Lato", sans-serif;
  padding: 2em;
  background-color: ${black};
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  font-size: 0.8rem;

    .logo {
      margin-left: 1em;
      width: 90px
    }

`;