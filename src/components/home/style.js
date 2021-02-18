import styled from "styled-components";

export const HomeContainer = styled.section`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  scroll-behavior: smooth;
  margin: 0 auto;

  .background {
    position: fixed;
    height: 100vh;
    width: 100vw;
    z-index: -1;
  }

  .container {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .hero_txt {
    color: #3b3228;
    background-color: rgba(228, 228, 228, 0.6);
    width: 42vw;
    height: 80vh;
    padding: 0 1rem 0 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .title {
      color: #3b3228;
    }
    .subtitle {
      font-family: "Nixie One";
      font-size: 2.25rem;
      color: #3b3228;
    }
  }

  .logo {
    width: 243px;
    height: 213, 43px;
  }

  .logo_container {
    background-color: rgba(39, 39, 39, 0.59);
    width: 35vw;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .cta {
    position: absolute;
    bottom: 0;
    width: 100%;
    overflow: hidden;
    padding: 0.5rem 0.5rem 0 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    transition: 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
      .arrow {
        transform: scale(1.5);
        margin-top: -0.4rem;
      }
    }

    .cta_txt {
      font-size: 1rem;
      font-family: "Sanchez";
      color: #e4e4e4;
      transition: 0.3s ease-in-out;
    }
    .arrow {
      margin-top: -0.2rem;
      width: 2rem;
      height: 2rem;
      transition: 0.3s ease-in-out;
    }
  }

  @media (max-width: 900px) {
    .container {
      display: flex;
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
    }

    .logo_container {
      width: 75vw;
      height: 40vw;
      max-height: 250px;

      .logo {
        width: 30vw;
        max-width: 200px;
      }
    }

    .hero_txt {
      width: 75vw;
      height: 40vh;
      padding: 0 0rem 0 1rem;
      justify-content: center;
      align-items: center;

      .title {
        font-size: 7vh;
        padding: 0 2rem;
      }
      .subtitle {
        font-size: 3.8vh;
        padding: 0 2rem;
      }
    }

    .cta {
      .cta_txt {
        font-size: 2vh;
      }
    }

    @media (max-width: 500px) {
      .logo_container {
        width: 80vw;
        height: 35vh;

        .logo {
          width: 35vw;
          max-width: 500px;
        }
      }

      .hero_txt {
        width: 80vw;
        height: 40vh;

        .title {
          font-size: 8vw;
          padding: 0 1rem;
        }
        .subtitle {
          font-size: 6vw;
          padding: 0 1rem;
        }
      }
    }
  }
`;
