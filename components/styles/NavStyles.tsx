import styled from 'styled-components';

type MenuStylesProps = {
  open: boolean;
};
export const MenuStyles = styled.button<MenuStylesProps>`
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: end;
  font-size: 2rem;
  background: none;
  border: none;
  cursor: none;
  a,
  button {
    padding: 1rem 3rem;
    display: flex;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 1em;
    background: none;
    border: 0;
    cursor: pointer;
    color: ${props => props.theme.primary_foreground};
    font-weight: 800;
    @media (max-width: 700px) {
      flex-direction: column;
      font-size: 10px;
      padding: 0 10px;
    }
  }
  @media (max-width: 1300px) {
    position: absolute;
    top: 0;
    left: 0;
    background: ${props => props.theme.primary_foreground};
    width: 20rem;
    height: 100vh;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    z-index: 1000;
    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
    a,
    button {
      text-rendering: optimizelegibility;
      text-transform: uppercase;
      letter-spacing: 0.5rem;
      font-size: 4rem;
    }
  }
`;
type BurgerStylesProps = {
  open: boolean;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
};
export const BurgerStyles = styled.button<BurgerStylesProps>`
  position: absolute;
  top: 4rem;
  left: 2rem;
  z-index: 1001;
  border: none;
  cursor: pointer;
  display: none;
  background: transparent;
  width: 2rem;
  height: 2rem;
  outline: none;
  padding: 0;

  span {
    position: relative;
    width: 2rem;
    height: 0.25rem;
    // padding: 2px 0;
    border-radius: 10px;
    background: ${props =>
      props.open
        ? props.theme.primary_background
        : props.theme.primary_foreground};
  }

  @media (max-width: 1300px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`;
