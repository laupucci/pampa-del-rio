import image from "../../media/image.png";
import styled from "styled-components";
import { colors } from "../utils";
const { black, darkColor, whitish, primaryColor, primaryColorDarker } = colors;

export const ContactContainer = styled.section`
  color: ${darkColor};
  height: 97vh;
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Patua One';
  
  .imagen {
    height: 100vh;
    width: 100%;
    position: absolute;
    z-index: -1;
    background: url(${image}) no-repeat center right;
    background-size: cover; 
  }
  .title{
    width: 736px;
    height: 66px;
    background-color: rgba(163, 189, 49, 0.8);
  }
  h2{
    font-family: 'Quando';
    font-size: 24px;
    color: #E4E4E4;
    margin-left: 1.5em;
  }
  .container{
    background-color: rgba(228, 228, 228, 0.8);
    width: 736px; 
    height: 457px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .name{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 736px;
  }
  .contact{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 736px;
  }
  .labelIn{
    width: 312px;
  }
  .labelIn1{
    width: 312px;
    margin-right: 37px;
  }
  .labelIn2{
    width: 661px;
  }
  .btn{
    width: 661px;
    height: 30px;
    background-color: rgba(163, 189, 49, 0.8);
    color: #E8E8E8;
    border: none;
    border-radius: 5px;
    font-family: 'Sanchez';
    font-size: 16px;
    cursor: pointer;
    &:hover{
        background-color: rgba(117, 135, 39, 0.6);
        border-radius: 5px;
      }
    }
  label{
    color: #272727;
    font-family: 'Sanchez';
    font-size: 20px;
  }
  .input{
    width: 300px;
    height: 30px;
    border-radius: 5px;
    border: none;
    background-color: rgba(39, 39, 39, 0.5);
    padding-left: 15px;
  }
  
  input, textarea{
    color: #E4E4E4;
    font-family: 'Sanchez';
    font-size: 16px;
}
input::placeholder{
  color: rgba(228, 228, 228, 0.3);
  padding-left: 2px;
  font-family: 'Sanchez';
    font-size: 16px;
}
textarea::placeholder{
  color: rgba(228, 228, 228, 0.3);
  padding-left: 5px;
  padding-top: 5px;
  font-family: 'Sanchez';
    font-size: 16px;
}
  .textarea{
    width: 661px;
    height: 131px;
    border-radius: 5px;
    background-color: rgba(39, 39, 39, 0.5);
  }
  `
