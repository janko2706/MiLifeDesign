import React from 'react';
import SofaBg from '../../Assets/Pictures/sofa-bg.jpg';
import LogoNoBg from '../../Assets/Pictures/miLifeLogo-noBg.png';
import {
  ImageStyled,
  DarkDivStyled,
  LightDivStyled,
  SpanStyled,
  LogoStyled,
  LogoWrapperDivStyled,
} from './styles';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Autoplay } from 'swiper';

// import { Link } from 'react-router-dom';

const Home = () => {
  window.addEventListener(
    'scroll',
    () => {
      document.body.style.setProperty(
        '--scroll',
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      );
    },
    false
  );
  return (
    <div style={{ overflowY: 'hidden !important' }}>
      <div
        style={{
          height: '100vh',
          width: '100vw',
        }}
      >
        <ImageStyled src={SofaBg} alt='sofa for bg' />

        <DarkDivStyled>Let us bring your dreams</DarkDivStyled>
        <LightDivStyled>
          to <SpanStyled>REALITY</SpanStyled>
        </LightDivStyled>
        <LogoWrapperDivStyled>
          <LogoStyled src={LogoNoBg} alt='mi life no bg' />
        </LogoWrapperDivStyled>
        {/* <div style={{ height: '100vh' }}></div>
      <div style={{ height: '100vh' }}></div> */}
        {/* <Link to={'/contact'} style={{ cursor: 'none' }}>
        Kontakt
    </Link> */}
      </div>
      <div
        style={{
          height: '100vh',
          backgroundColor: 'var(--grullo)',
        }}
      >
        <Swiper
          effect={'coverflow'}
          centeredSlides={true}
          slidesPerView={'3'}
          loop={true}
          coverflowEffect={{
            rotate: 20,
            stretch: 100,
            depth: 100,
            slideShadows: true,
          }}
          //   autoplay={{
          //     delay: 1000,
          //     disableOnInteraction: false,
          //   }}
          pagination={false}
          modules={[Autoplay, EffectCoverflow]}
          className='mySwiper'
        >
          <SwiperSlide>
            <img
              src='https://swiperjs.com/demos/images/nature-1.jpg'
              alt='some slider thing'
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src='https://swiperjs.com/demos/images/nature-2.jpg'
              alt='some slider thing'
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src='https://swiperjs.com/demos/images/nature-3.jpg'
              alt='some slider thing'
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src='https://swiperjs.com/demos/images/nature-3.jpg'
              alt='some slider thing'
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src='https://swiperjs.com/demos/images/nature-3.jpg'
              alt='some slider thing'
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src='https://swiperjs.com/demos/images/nature-3.jpg'
              alt='some slider thing'
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src='https://swiperjs.com/demos/images/nature-3.jpg'
              alt='some slider thing'
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
