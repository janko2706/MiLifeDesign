import React, { useRef } from 'react';
import './header.scss';
import { ImagesApi } from '../ImagesApi/ImagesApi';
import { Link } from 'react-router-dom';

export function Header() {
  const checkBoxRef = useRef(null);
  const closeMenu = () => {
    if (checkBoxRef) {
      checkBoxRef.current.checked = false;
    }
  };
  return (
    <>
      <input type='checkbox' id='burger-toggle' ref={checkBoxRef} />
      <label for='burger-toggle' class='burger-menu'>
        <div class='line'></div>
        <div class='line'></div>
        <div class='line'></div>
      </label>
      <div class='menu'>
        <div class='menu-inner'>
          <ul class='menu-nav'>
            <li class='menu-nav-item'>
              <Link class='menu-nav-link' to='/' onClick={closeMenu}>
                <span>
                  <div>Pocetna</div>
                </span>
              </Link>
            </li>
            <li class='menu-nav-item'>
              <Link class='menu-nav-link' to='/about' onClick={closeMenu}>
                <span>
                  <div>O nama</div>
                </span>
              </Link>
            </li>
            <li class='menu-nav-item'>
              <Link class='menu-nav-link' to='/services' onClick={closeMenu}>
                <span>
                  <div>Usluge</div>
                </span>
              </Link>
            </li>
            <li class='menu-nav-item'>
              <Link class='menu-nav-link' to='/contact' onClick={closeMenu}>
                <span>
                  <div>Kontakt</div>
                </span>
              </Link>
            </li>
            <li class='menu-nav-item'>
              <Link class='menu-nav-link' to='/faq' onClick={closeMenu}>
                <span>
                  <div>FAQ</div>
                </span>
              </Link>
            </li>
          </ul>
          <div class='gallery'>
            <div class='title'>
              <p>Preporuceno</p>
            </div>
            <div class='images'>
              <Link class='image-link' to='/projects'>
                <div class='image' data-label={ImagesApi[0].name}>
                  <img src={ImagesApi[0].pictures[0]} alt='' />
                </div>
              </Link>
              <Link class='image-link' to='/projects'>
                <div class='image' data-label={ImagesApi[1].name}>
                  <img src={ImagesApi[1].pictures[0]} alt='' />
                </div>
              </Link>
              <Link class='image-link' to='/projects'>
                <div class='image' data-label={ImagesApi[2].name}>
                  <img src={ImagesApi[2].pictures[0]} alt='' />
                </div>
              </Link>
              <Link class='image-link' to='/projects'>
                <div class='image' data-label={ImagesApi[4].name}>
                  <img src={ImagesApi[4].pictures[0]} alt='' />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
