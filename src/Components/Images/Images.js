import React, { useRef, useState, useEffect } from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';
const Images = (props) => {
  const mediaMatch = window.matchMedia('(max-width: 1350px)');
  const [matches, setMatches] = useState(mediaMatch.matches);

  useEffect(() => {
    const handler = (e) => setMatches(e.matches);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  });
  const ref = useRef(null);
  function randomNumberForAnim() {
    const number = Math.random() + Math.random();
    return number;
  }
  function randomNumberForXPosition() {
    const number = props.uniqueNumber * 15;
    return number;
  }
  const navigate = useNavigate();
  return (
    <img
      style={{
        width: `${props.imageIsChoosen ? '12vmin' : '32vmin'}`,
        height: `${props.imageIsChoosen ? '6vmin' : '60vmin'}`,
        position: `${props.imageIsChoosen ? 'absolute' : 'initial'}`,
        right: `${
          !matches
            ? randomNumberForXPosition() - 200
            : randomNumberForXPosition() - 130
        }vmin`,
        animaitonName: `${props.imageIsChoosen ? 'lower-scroll' : ''}`,
        transition: `${
          props.imageIsChoosen
            ? 'none'
            : 'all 2s cubic-bezier(0, 1.02, 0.87, 0.94)'
        }`,
        animationDuration: `${
          props.imageIsChoosen
            ? `${props.imageIsChoosen ? randomNumberForAnim() : 0}s `
            : ''
        }}`,
        objectPosition: `${props.objectPosition + 100}% 50% `,
      }}
      onClick={() => {
        if (
          props.track &&
          props.track.current &&
          props.isClickPossible &&
          ref &&
          ref.current
        ) {
          const bgPictures =
            props.track.current.getElementsByClassName('bgToRemove');
          if (bgPictures.length) {
            for (let index = 0; index < bgPictures.length; index++) {
              props.track.current.removeChild(bgPictures[index]);
            }
          }
          props.setImageIsChoosen(true);
          props.track.current.style.transition = `none`;
          props.track.current.style.transform = `translate(0%, 0%)`;
          props.track.current.style.top = `0`;
          props.track.current.style.left = `0`;
          props.track.current.style.height = `100%`;
          props.track.current.style.width = `100%`;
          let bgPicture = document.createElement('img');
          let pictureText = document.createElement('div');
          let pictureTextCont = document.createElement('div');
          let bgCont = document.createElement('div');
          pictureText.innerHTML = props.title;
          bgPicture.src = props.src;
          pictureTextCont.appendChild(pictureText);
          bgCont.appendChild(pictureTextCont);
          bgCont.appendChild(bgPicture);
          pictureTextCont.classList.add('pictureTextCont');
          pictureText.classList.add('pictureText');
          bgCont.classList.add('selectedPictureCont');
          bgCont.classList.add('bgToRemove');
          bgPicture.classList.add('selectedPicture');
          pictureText.addEventListener('click', (e) => {
            navigate(`/${props.title}`);
          });
          bgCont.addEventListener('touchstart', () => {
            navigate(`/${props.title}`);
          });
          props.track.current.append(bgCont);
        }
      }}
      ref={ref}
      key={props.uniqueNumber}
      src={props.src}
      alt='some project'
      draggable='false'
      className='image imageStyled'
    />
  );
};

export default Images;
