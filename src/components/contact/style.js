import styled from "styled-components";
import { colors } from "../utils";
const { secondaryDark, darkColor, whitish } = colors;

export const ContactContainer = styled.section`
  display: grid;
  height: 100vh;
  width: 80vw;
  margin: 0 auto;
  grid-template:
    ".    .  " 15vh
    "form map" 1fr
    ".    .  " 5vh/
    1fr 1fr;
  grid-gap: 0 2rem;

  .map {
    grid-area: map;
    background: #e4e4e4;
    border-radius: 10px;
    .mapElement {
      border-radius: 10px;
      height: 100%;
      width: 100%;
    }
  }

  .contact_form {
    grid-area: form;
    color: ${darkColor};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .title {
      padding: 1.5rem;
      width: 40vw;
      background-color: rgba(163, 189, 49, 0.8);
      border-radius: 10px 10px 0 0;

      h2 {
        font-family: "Nixie One", sans-serif;
        font-size: 2rem;
        color: #e4e4e4;
        font-weight: normal;
      }
    }
    .form_container {
      background-color: rgba(228, 228, 228, 0.8);
      width: 40vw;
      height: 100%;
      padding: 1.5rem;
      display: grid;
      border-radius: 0 0 10px 10px;
      grid-template:
        " _name   lastname" 2fr
        " phone   email   " 2fr
        "   msg   msg     " 4fr
        "submit   submit  " 1fr/
        1fr 1fr;
      grid-gap: 1.5rem;
    }

    .field {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
    }

    label {
      color: #272727;
      font-family: "Sanchez";
      font-size: 1.1rem;
      padding-bottom: 0.5rem;
    }
    .input {
      width: 100%;
      height: 2rem;
      padding: 1rem;
      background-color: rgba(39, 39, 39, 0.6);
      color: #e4e4e4;
      font-family: "Sanchez";
      border: 1.5px solid transparent;
      border-radius: 5px;
      transition: 0.3s;
      outline: none;

      &:focus {
        border: 1.5px solid ${whitish};
        background-color: rgba(39, 39, 39, 0.5);
      }
    }
    .error {
      height: 0;
      font-size: 0.8rem;
      color: ${secondaryDark};
    }

    .input.textarea {
      height: 100%;
    }
    .input::placeholder {
      color: rgba(228, 228, 228, 0.6);
    }
    .submit_btn {
      grid-area: submit;
      background-color: rgba(163, 189, 49, 0.8);
      color: ${whitish};
      border: none;
      border-radius: 5px;
      padding: 0.5rem;
      cursor: pointer;
      transition: 0.3s;
      font-family: "Sanchez";

      &:hover {
        background-color: rgba(117, 135, 39, 0.6);
        color: ${whitish};
      }
    }
    .name_field {
      grid-area: _name;
    }
    .lastname_field {
      grid-area: lastname;
    }
    .phone_field {
      grid-area: phone;
    }
    .email_field {
      grid-area: email;
    }
    .message_field {
      grid-area: msg;
    }
  }
`;
