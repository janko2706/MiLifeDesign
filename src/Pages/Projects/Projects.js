import React, { useState, useRef } from 'react';
import './styles.css';
import project1 from '../../Assets/Pictures/Projekt1/kuhinja.jpg';
import project2 from '../../Assets/Pictures/Projekt2/4.png';
import project3 from '../../Assets/Pictures/Projekt3/8.webp';
import project4 from '../../Assets/Pictures/Projekt4/4.webp';
import project5 from '../../Assets/Pictures/Projekt5/7.webp';
import project6 from '../../Assets/Pictures/Projekt6/1.webp';
import project7 from '../../Assets/Pictures/Projekt7/9.jpg';
import project8 from '../../Assets/Pictures/Projekt8/1.webp';
import project9 from '../../Assets/Pictures/Projekt9/1.webp';
import project10 from '../../Assets/Pictures/Projekt10/1.webp';
import Images from '../../Components/Images/Images';
import { motion } from 'framer-motion';

const Projects = () => {
  const slidePictures = [
    { picture: project2, title: 'Projekt Pula' },
    { picture: project3, title: 'Projekt Zadar' },
    { picture: project4, title: 'Projekt Spansko' },
    { picture: project5, title: 'Projekt Ivanec' },
    { picture: project6, title: 'Projekt Zapresic' },
    { picture: project7, title: 'Projekt Split' },
    { picture: project8, title: 'Projekt Ugljan' },
    { picture: project9, title: 'Projekt Playground' },
    { picture: project10, title: 'Projekt Brac' },
    { picture: project1, title: 'Projekt Kolarovec' },
  ];
  const track = useRef(null);
  const [mouseDownAt, setMouseDownAt] = useState(0);

  const [isClickPossible, setIsClickPossible] = useState(true);
  const [prevPercentage, setPrevPercentage] = useState(0);
  const [percentageStore, setPercentageStore] = useState(0);
  const [imageIsChoosen, setImageIsChoosen] = useState(false);
  const onMouseMove = (e) => {
    if (mouseDownAt === 0) return;
    setImageIsChoosen(false);
    const mouseDelta = mouseDownAt - e.clientX,
      maxDelta = window.innerWidth * 2;
    const percentage = (mouseDelta / maxDelta) * -100;
    let nextPercentage = prevPercentage + percentage;
    nextPercentage = Math.min(nextPercentage, 0);
    nextPercentage = Math.max(nextPercentage, -100);
    setPercentageStore(nextPercentage);
    if (track && track.current) {
      track.current.style.transition = `all 2s cubic-bezier(0, 1.02, 0.87, 0.94)`;
      const bgPictures = track.current.getElementsByClassName('bgToRemove');
      if (bgPictures.length) {
        for (let index = 0; index < bgPictures.length; index++) {
          track.current.removeChild(bgPictures[index]);
        }
      }
      track.current.style.top = `50%`;
      track.current.style.left = `50%`;
      track.current.style.height = `auto`;
      track.current.style.width = `auto`;
      track.current.style.transform = `translate(${nextPercentage}%, -50%)`;
      track.current.style.background = `none`;
    }
  };
  const onMouseUp = (e) => {
    setIsClickPossible(e.clientX === mouseDownAt);
    setMouseDownAt(0);
    setPrevPercentage(percentageStore);
  };
  const onMouseDown = (e) => {
    setMouseDownAt(e.clientX);
  };

  return (
    <motion.div
      initial={{ y: '-100%', opacity: 0 }}
      animate={{ y: '0%', opacity: 1 }}
      exit={{ y: '-100%', opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.45, 0.36, 0.22, 0.98] }}
      className='mobileHome'
    >
      <div
        className='homeStyled'
        onMouseMove={onMouseMove}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onMouseDown}
        onTouchEnd={onMouseUp}
        onTouchMove={onMouseMove}
      >
        <div ref={track} className='mobileTrack styledImageTrack'>
          {slidePictures.map((item, key) => {
            return (
              <motion.div
                key={key}
                initial={{ y: '-100%' }}
                animate={{ y: '0%' }}
                transition={{
                  duration: (slidePictures.length - key) / 3,
                  ease: [0.45, 0.36, 0.22, 0.98],
                }}
              >
                <Images
                  isClickPossible={isClickPossible}
                  track={track}
                  title={item.title}
                  setImageIsChoosen={setImageIsChoosen}
                  imageIsChoosen={imageIsChoosen}
                  key={key}
                  uniqueNumber={key}
                  objectPosition={percentageStore}
                  src={item.picture}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
