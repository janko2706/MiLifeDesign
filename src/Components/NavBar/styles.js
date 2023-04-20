import styled from 'styled-components';

export const NavBarStyled = styled.div`
  position: fixed;
  width: 50%;
  padding-left: 20%;
  padding-right: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NeonTitle = styled.div`
  font-family: 'Sacramento', cursive;
  font-size: 48px;
  color: white;
  transition: all 0.1s ease-in;
  text-shadow: 0 0 7px var(--grullo), 0 0 10px var(--grullo);

  :hover {
    text-shadow: 0 0 7px var(--grullo), 0 0 10px var(--grullo),
      0 0 21px var(--grullo), 0 0 42px var(--grullo), 0 0 84px var(--grullo);
  }
`;

export const StyledNavBarButton = styled.div`
  font-weight: lighter;
  font-size: 16px;
`;
