import styled from "styled-components";
import { colors } from "../utils";
import image from "../../media/image.png";
const { black, whitish, darkColor } = colors;

export const UsContainer = styled.section`
  color: ${whitish};
  display: flex;
  color: ${black};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Sanchez';
  height: 100vh;

  .imagen {
    height: 100vh;
    width: 100%;
    position: absolute;
    z-index: -1;
    background: url(${image}) no-repeat center right;
    background-size: cover; 
  }
  .info {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: rgba(228, 228, 228, 0.8);
    width: 1011px;
    height: 299px;
  }
  .desc{
    width:60vh;
  }
  h2{
    font-family: 'Quando';
    font-size: 64px;
    margin-bottom: 0.5em;
    width: 3em;
  }
  img{
    width: 8em;
  }
  .imgs1 {
    width: 60%;
    display: flex;
      flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: rgba(161, 76, 75, 0.8);
    width: 1011px;
    height: 224px;
  }
  p{
    font-family: 'Sanchez';
    font-size: 18px;
    color: ${darkColor}
  }
  .p{
    width: 11em;
    display: flex;
    justify-content: center;
    align-items: center
  }
  .p1{
    color: #E4E4E4;
    font-size: 16px;
    font-family: 'Sanchez';
  }
  .imgIns{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1.2em;
  }
  .img1{
    width: 77.41px;
    height: 77.48px;
  }
  .img2{
    width: 77.48px;
    height: 70.29px;
  }
  .img3{
    width: 77.48px;
    height: 77.47px;
  }
  .img4{
    width: 77.48px;
    height: 77.48px;
  }
`;
