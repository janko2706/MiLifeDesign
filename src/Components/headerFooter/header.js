import React, { useRef } from "react";
import "./header.scss";
import { ImagesApi } from "../ImagesApi/ImagesApi";
import { Link } from "react-router-dom";

export function Header() {
  const checkBoxRef = useRef(null);
  const closeMenu = () => {
    if (checkBoxRef) {
      checkBoxRef.current.checked = false;
    }
  };
  return (
    <>
      <input type="checkbox" id="burger-toggle" ref={checkBoxRef} />
      <label htmlFor="burger-toggle" className="burger-menu">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </label>
      <div className="menu">
        <div className="menu-inner">
          <ul className="menu-nav">
            <li className="menu-nav-item">
              <Link className="menu-nav-link" to="/" onClick={closeMenu}>
                <span>
                  <div>Početna</div>
                </span>
              </Link>
            </li>
            <li className="menu-nav-item">
              <Link
                className="menu-nav-link"
                to="/projects"
                onClick={closeMenu}
              >
                <span>
                  <div>Projekti</div>
                </span>
              </Link>
            </li>
            <li className="menu-nav-item">
              <Link className="menu-nav-link" to="/about" onClick={closeMenu}>
                <span>
                  <div>O nama</div>
                </span>
              </Link>
            </li>
            <li className="menu-nav-item">
              <Link
                className="menu-nav-link"
                to="/services"
                onClick={closeMenu}
              >
                <span>
                  <div>Usluge</div>
                </span>
              </Link>
            </li>
            <li className="menu-nav-item">
              <Link className="menu-nav-link" to="/contact" onClick={closeMenu}>
                <span>
                  <div>Kontakt</div>
                </span>
              </Link>
            </li>
            {/* TODO UNCOMMENT WHEN TEXT IS CONFIRMED */}

            {/* <li className='menu-nav-item'>
              <Link className='menu-nav-link' to='/faq' onClick={closeMenu}>
                <span>
                  <div>FAQ</div>
                </span>
              </Link>
            </li> */}
          </ul>
          <div className="gallery">
            <div className="title">
              <p>Preporuceno</p>
            </div>
            <div className="images">
              <Link
                className="image-link"
                to={`/${ImagesApi[0].name}`}
                onClick={closeMenu}
              >
                <div className="image" data-label={ImagesApi[0].name}>
                  <img src={ImagesApi[0].pictures[0]} alt="" />
                </div>
              </Link>
              <Link
                className="image-link"
                to={`/${ImagesApi[1].name}`}
                onClick={closeMenu}
              >
                <div className="image" data-label={ImagesApi[1].name}>
                  <img src={ImagesApi[1].pictures[0]} alt="" />
                </div>
              </Link>
              <Link
                className="image-link"
                to={`/${ImagesApi[2].name}`}
                onClick={closeMenu}
              >
                <div className="image" data-label={ImagesApi[2].name}>
                  <img src={ImagesApi[2].pictures[0]} alt="" />
                </div>
              </Link>
              <Link
                className="image-link"
                to={`/${ImagesApi[4].name}`}
                onClick={closeMenu}
              >
                <div className="image" data-label={ImagesApi[4].name}>
                  <img src={ImagesApi[4].pictures[0]} alt="" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
