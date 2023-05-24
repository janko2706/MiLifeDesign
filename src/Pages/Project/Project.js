import React, { useCallback, useState } from 'react';
import './styles.css';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ImageViewer from 'react-simple-image-viewer';
import { AiOutlineLeft, AiOutlineRight, AiOutlineClose } from 'react-icons/ai';
import { RiArrowGoBackLine } from 'react-icons/ri';

const Project = (props) => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ y: '200%' }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.77, 0.16, 0.64, 0.91] }}
    >
      <div
        style={{ cursor: 'pointer' }}
        onClick={() => {
          navigate(-1);
        }}
        title='Nazad'
        className='backButton'
      >
        <RiArrowGoBackLine />
      </div>
      <div className='mobileProject projectStyled'>
        <div className='textCont'>
          <div>Location: {props.about.location}</div>
          <div>Info: {props.about.info}</div>
        </div>
      </div>
      <div
        style={{
          overflowY: 'hidden',
          overflowX: 'hidden',
          zIndex: '-1',
        }}
        className=''
      >
        <div className='titleStyledz'>{props.projectTitle}</div>
        <img
          className='imageStyledz mobileProject'
          src={props.projectPictures[4]}
          alt='some project'
        />
        <div className='titleStyledStrokedz'>{props.projectTitle}</div>
      </div>
      <div className='projectPicsStyled'>
        <div className='containerStyled'>
          {props.projectPictures.map((item, idx) => {
            return (
              <img
                key={idx}
                src={item}
                onClick={() => openImageViewer(idx)}
                alt='project grid item'
              />
            );
          })}
        </div>
      </div>
      {isViewerOpen && (
        <div
          style={{
            zIndex: '3',
          }}
        >
          <ImageViewer
            src={props.projectPictures}
            currentIndex={currentImage}
            onClose={closeImageViewer}
            closeComponent={<AiOutlineClose />}
            leftArrowComponent={<AiOutlineLeft />}
            rightArrowComponent={<AiOutlineRight />}
            backgroundStyle={{
              backgroundColor: 'rgba(0,0,0,1)',
            }}
            closeOnClickOutside={true}
          />
        </div>
      )}
    </motion.div>
  );
};

export default Project;
