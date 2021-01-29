import splash from "../../media/Splash.png";
import styled from "styled-components";
import { colors } from "../utils";
const { black, whitish, darkColor, primaryColorDarker } = colors;

export const UsContainer = styled.section`
  color: ${whitish};
  display: flex;
  margin-top: 5em;
  color: ${black};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Sanchez';

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1em;
  }
  h2{
    font-family: 'Patua One';
    font-size: 64px;
    margin-bottom: 0.5em;
  }
  img{
    width: 8em;
  }
  .imgs1 {
    width: 60%;
    display: flex;
    justify-content: space-around;
    margin: 1em;
  }
  .imgs2 {
    width: 60%;
    display: flex;
    justify-content: space-around;
    margin: 1em;
  }
  p{
    font-family: 'Sanchez';
    font-size: 18px;
    color: ${darkColor}
  }
  .p1{
    width: 10em;
    justify-content: center
  }
  .imgIns{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center
  }
`;
