import React from 'react';
import { NeonTitle, NavBarStyled } from './styles';
import NavBarButton from './NavBarButton';

const NavBar = () => {
  return (
    <NavBarStyled>
      <NeonTitle>Mi Life Design</NeonTitle>
      <NavBarButton text={'Pocetna'} />
      <NavBarButton text={'O nama'} />
      <NavBarButton text={'Projekti'} />
      <NavBarButton text={'Kontakt'} />
    </NavBarStyled>
  );
};

export default NavBar;
