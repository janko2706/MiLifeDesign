import styled from 'styled-components';

export const ImageStyled = styled.img`
  position: absolute;
  top: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
`;
export const LogoWrapperDivStyled = styled.div`
  position: absolute;
  z-index: 999;

  top: 25%;
  left: 68%;
  background: var(--anti-flash-white);
  width: 220px;
  height: 180px;
  opacity: 0.8;
  border-radius: 20px;
`;
export const LogoStyled = styled.img`
  width: 100%;
  height: 100%;
`;
export const DarkDivStyled = styled.div`
  font-weight: 300;
  color: var(--anti-flash-white);
  position: absolute;
  font-size: 2.3em;
  left: 15%;
  top: 40%;
  padding: 5rem 10rem 1rem 1rem;
  background-color: rgba(89, 66, 80, 0.8);
  animation: rotate 1s linear infinite;
  animation-play-state: paused;
  animation-delay: calc(var(--scroll) * -1s);

  animation-iteration-count: 1;
  animation-fill-mode: both;
  z-index: 2;

  @keyframes rotate {
    20% {
      color: rgba(0, 0, 0, 0);
    }
    100% {
      color: rgba(0, 0, 0, 0);
      background-color: rgba(89, 66, 80, 1);
      transform: translate(100%, 480%) scaleX(1.2) scaleY(2.4);
    }
  }
`;
export const LightDivStyled = styled.div`
  font-weight: 300;
  color: var(--eggplant);
  position: absolute;
  font-size: 2.3em;
  left: 49%;
  top: 51%;
  padding: 1rem 4em 6rem 1rem;
  background-color: rgba(242, 242, 242, 0.8);
  animation: rotateLight 1s linear infinite;
  animation-play-state: paused;
  animation-delay: calc(var(--scroll) * -1s);

  animation-iteration-count: 1;
  animation-fill-mode: both;

  z-index: 2;
  @keyframes rotateLight {
    5% {
      color: rgba(0, 0, 0, 0);
    }
    100% {
      color: rgba(0, 0, 0, 0);
      background-color: rgba(242, 242, 242, 0.6);
      transform: translate(-170%, 260%) scaleX(3.5) scaleY(2.7);
    }
  }
`;
export const SpanStyled = styled.span``;
