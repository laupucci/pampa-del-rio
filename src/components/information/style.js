import splash from "../../media/Splash.png";
import styled from "styled-components";
import { colors } from "../utils";
const { dark, whitish, primaryColor, primaryColorDarker } = colors;

export const InformationContainer = styled.section`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
  color: ${dark};
  font-family: 'Patua One';
  font-size: 30px;
  `
