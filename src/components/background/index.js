import React, { useEffect, useState } from "react";
import styled from "styled-components";
import background from "../../media/background.jpg";

const StyledBackground = styled.section`
  @keyframes scroll {
    from {
      transform: translateY(-30%);
    }
    to {
      transform: translateY(-25%);
    }
  }
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: -1;
  img {
    min-height: 100%;
    width: 100%;
    transition: 0.5s;
    object-fit: cover;
    /* transform: scaleX(-1); */
    /* transform: translateY(-50%); */
    animation: scroll 1s linear infinite;
    animation-play-state: paused;
    animation-delay: ${(props) => props.scrollInput * -1}s;
    animation-iteration-count: 1;
    animation-fill-mode: both;
  }

  @media (max-width: 900px) {
    img {
      min-height: 145vh;
    }
  }
    @media (max-width: 500px) {
    img {
      min-height: 142vh;
    }
  }
`;

const Background = () => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    const scrollPosition =
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
    setScroll(scrollPosition);
  };

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => window.requestAnimationFrame(handleScroll)
      // handleScroll
    );
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <StyledBackground scrollInput={scroll}>
      <img src={background} alt="Fondo" />
    </StyledBackground>
  );
};

export default Background;
