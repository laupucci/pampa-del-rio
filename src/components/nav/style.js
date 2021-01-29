import { colors } from "../utils";
import styled from "styled-components";
const {
  black,
  whitish,
  primaryColor
} = colors;

export const Container = styled.header`
  position: fixed;
  top: 0;
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
    .menu{
      display:flex;
      flex-direction: 'row';
      margin-right: 2.5em;
    }
    p{
      color: ${whitish};
      padding: 1em;
      font-size: 16px;
      font-family: 'Patua One';
      &:hover{
        background-color: ${primaryColor};
        border-radius: 7px;
      }
    }
    a{
      text-decoration: none;
    }
`;