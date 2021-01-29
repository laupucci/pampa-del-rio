import { colors } from "../utils";
import styled from "styled-components";
const {
  black,
  whitish
} = colors;

export const Container = styled.header`
 bottom: 0;
  width: 100%;
  font-family: "Lato", sans-serif;
  padding: 2em;
  background-color: ${black};
  height: 65px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  align-content: center;
  font-size: 0.8rem;

  .footer{
    width: 95%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* margin-right: */
    /* display: grid;
    grid-template-columns: repeat(2, 1fr); */
  }

    .logo {
      /* margin-left: 12.5em; */
      width: 50px;
    }
    .info{
      color: ${whitish};
      font-family: 'Patua One';
      font-size: 0.7em;
      /* margin-right: 15em */
    }

`;