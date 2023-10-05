import React, { useEffect } from "react";
import "./styles.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import project1 from "../../Assets/Pictures/Projekt1/kuhinja.jpg";
import project2 from "../../Assets/Pictures/Projekt2/4.png";
import project3 from "../../Assets/Pictures/Projekt3/8.webp";
import project4 from "../../Assets/Pictures/Projekt4/4.webp";
import project5 from "../../Assets/Pictures/Projekt5/7.webp";
import project6 from "../../Assets/Pictures/Projekt6/1.webp";
import project7 from "../../Assets/Pictures/Projekt7/9.jpg";
import project8 from "../../Assets/Pictures/Projekt8/1.webp";
import project9 from "../../Assets/Pictures/Projekt9/1.webp";
import project10 from "../../Assets/Pictures/Projekt10/1.webp";
import { EffectCoverflow, Navigation } from "swiper";
import "swiper/element/css/effect-coverflow";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";

const SwiperButtons = () => {
  const swiper = useSwiper();
  return (
    <>
      <AiOutlineLeft
        onClick={() => swiper.slidePrev()}
        onTouchEnd={() => swiper.slidePrev()}
        className="buttonPrev"
      />
      <AiOutlineRight
        onTouchEnd={() => swiper.slideNext()}
        onClick={() => swiper.slideNext()}
        className="buttonNext"
      />
    </>
  );
};
const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const slidePictures = [
    { picture: project2, title: "Projekt Pula" },
    { picture: project3, title: "Projekt Zadar" },
    { picture: project4, title: "Projekt Spansko" },
    { picture: project5, title: "Projekt Ivanec" },
    { picture: project6, title: "Projekt Zapresic" },
    { picture: project7, title: "Projekt Split" },
    { picture: project8, title: "Projekt Ugljan" },
    { picture: project9, title: "Projekt Playground" },
    { picture: project10, title: "Projekt Brac" },
    { picture: project1, title: "Projekt Kolarovec" },
  ];
  return (
    <div className="fullPageCont">
      <Swiper
        effect={"coverflow"}
        grabCursor={false}
        centeredSlides={true}
        slidesPerView={"auto"}
        modules={[EffectCoverflow, Navigation]}
        className="swiper"
      >
        {slidePictures.map((item, key) => {
          return (
            <SwiperSlide key={key} className="swiper-slide">
              <div
                style={{
                  backgroundImage: `url(${item.picture})`,
                }}
              >
                <div onClick={() => navigate(`/${item.title}`)}>
                  {item.title}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <SwiperButtons />
      </Swiper>
    </div>
  );
};

export default Projects;
