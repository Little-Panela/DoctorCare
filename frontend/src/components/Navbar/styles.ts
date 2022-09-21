import styled from 'styled-components'

interface MenuProps {
  isOpen: Boolean
}

export const NavbarContainer = styled.div<MenuProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100vw;
  height: 4.6rem;
  position: sticky;
  top: 0;

  z-index: 999;
  padding-right: 5rem;
  padding-left: 5rem;
  background: ${(props) => props.theme['gray-400']};

  @media (max-width: 1000px) {
    background: ${({ isOpen }) => (isOpen ? '#00856F' : '#DCE9E2')};
  }

  @media (max-width: 720px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`

export const Logo = styled.div<MenuProps>`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 1rem;

  h1 {
    font-size: 2.25rem;
    font-weight: 400;
    color: ${(props) => props.theme['gray-900']};

    @media (max-width: 1000px) {
      color: ${({ isOpen }) => (isOpen ? '#EDEDED' : '')};
    }

    span {
      font-size: 2.25rem;
      font-weight: 700;
      color: ${(props) => props.theme['green-500']};

      @media (max-width: 1000px) {
        color: ${({ isOpen }) => (isOpen ? '#EDEDED' : '')};
      }
    }
  }
`

export const Menu = styled.div<MenuProps>`
  display: flex;
  flex-direction: row;

  gap: 2rem;
  position: relative;
  height: 100%;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;

    text-decoration: none;
    color: ${(props) => props.theme['green-500']};

    span {
      margin-top: 1.5rem;

      width: 0;
      height: 2px;
      background-color: ${(props) => props.theme['green-500']};
      transition: width 0.2s;
    }

    &:hover {
      font-weight: bold;

      span {
        width: 80%;
      }
    }

    /* .activeHome {
      color: ${(props) => props.theme.white};
      span {
        width: 100%;
      }
    }
    .activeAbout {
      color: ${(props) => props.theme.white};
      span {
        width: 100%;
      }
    } */
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    width: 100%;
    height: ${({ isOpen }) => (isOpen ? 'calc(100vh - 4.5rem)' : '0')};
    z-index: 998;

    background: ${(props) => props.theme['green-500']};

    position: absolute;
    left: 0;
    top: 72px;

    transition: height 0.3s ease-in;

    a {
      font-weight: 700;
      font-size: 1.5rem;
      color: ${(props) => props.theme['gray-100']};
    }
  }
`

export const ButtonAppointment = styled.button<MenuProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 0.6rem;
  padding: 0.7rem 1.5rem;
  border: 1px ${(props) => props.theme['green-500']} solid;

  border-radius: 40px;
  background: transparent;
  color: ${(props) => props.theme['green-500']};
  transition: all 0.2s ease-in-out;

  font-weight: bold;
  font-size: 0.87rem;
  text-transform: uppercase;

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-700']};
  }

  &:hover {
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme['green-500']};
  }

  &.mobile {
    display: none;
  }

  @media only screen and (max-width: 1000px) {
    &.desktop {
      display: none;
    }

    &.mobile {
      display: flex;
    }
  }
`

export const Hamburger = styled.span<MenuProps>`
  border-top: 2px solid;
  width: 1.5rem;
  transition: color 0.5s ease-in-out;
  color: ${({ isOpen }) => (isOpen ? '#EDEDED' : '#00856F')};

  &::after,
  &::before {
    content: '';
    display: block;
    width: 1.5rem;
    height: 0.125rem;
    background: currentColor;
    margin-top: 0.31rem;
    transition: 0.3s;
    position: relative;
  }
  border-top-color: ${({ isOpen }) =>
    isOpen ? 'transparent' : 'currentColor'};
  ${({ isOpen }) => (isOpen ? '&::before{transform: rotate(135deg);}' : '')}
  ${({ isOpen }) =>
    isOpen ? '&::after{transform: rotate(-135deg); top: -7px;}' : ''}
  @media only screen and (min-width: 1000px) {
    display: none;
  }
`
