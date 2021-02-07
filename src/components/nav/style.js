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
  font-family: "'Julius Sans One";
  background-color: rgba(228, 228, 228, 0.15);;
  height: 60px;
  padding: 3px;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;

    .logo {
      font-size:24px;
      font-family: 'Julius Sans One';
      margin-left: 6em;
      color: ${whitish};
      padding: 1em;
    }
    .menu{
      display:flex;
      flex-direction: 'row';
      margin-right: 10.7em;
    }
    .p2{
      color: ${whitish};
      padding: 1em;
      font-size: 16px;
      font-family: 'Sanchez';
      &:hover{
        background-color: ${primaryColor};
        border-radius: 7px;
      }
    }
    a{
      text-decoration: none;
    }
`;