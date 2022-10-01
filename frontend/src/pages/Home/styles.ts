import styled from 'styled-components'

import Women from '../../assets/homephoto.svg'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;

  background-color: ${(props) => props.theme['gray-300']};
`
export const HomeWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme['gray-400']};
  gap: 3.1rem;
  padding-bottom: 3.43rem;
  padding-top: 4.6rem;

  @media (max-width: 900px) {
    span {
      width: fit-content;
      overflow: hidden;

      img {
        width: 261.64px;
        height: 340px;
      }
    }
  }
`

export const HomeTextField = styled.div`
  max-width: 55ch;

  span {
    color: ${(props) => props.theme['green-500']};

    font-size: 0.875rem;
    line-height: 150%;

    margin-bottom: 1rem;
  }

  h1 {
    color: ${(props) => props.theme['gray-900']};

    font-size: 3.25rem;
    font-weight: 700;
    line-height: 130%;

    @media (max-width: 900px) {
      font-size: 2.125rem;
    }
  }

  p {
    color: ${(props) => props.theme['gray-500']};

    font-size: 1.125rem;
    font-weight: 400;
    line-height: 150%;

    margin-top: 1.5rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 900px) {
    text-align: center;

    margin: 2.5rem 1.5rem 0;
  }
`

export const WomenPhoto = styled.div`
  background-image: url(${Women});
  background-color: ${(props) => props.theme['gray-400']};
  background-size: cover;

  width: 420px;
  height: 547px;

  @media (max-width: 900px) {
    width: 261.64px;
    height: 340px;
  }
`

export const Button = styled.button`
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['green-500']};
  border: none;

  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;

  border-radius: 40px;
  padding: 1rem 2rem;

  transition: all 0.2s;

  &:hover {
    background-color: ${(props) => props.theme['green-700']};
  }
`

export const ServicesWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;

  padding: 10rem 7.625rem;

  @media (max-width: 900px) {
    gap: 3.75rem;
    padding: 10rem 1.9rem;
  }
`
export const ServicesTextField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  text-align: center;

  strong {
    font-size: 14px;

    color: ${(props) => props.theme['green-500']};
  }

  span {
    max-width: 19ch;

    font-size: 2.5rem;
    font-weight: 700;
    line-height: 3.25rem;
    color: ${(props) => props.theme['gray-900']};

    @media (max-width: 900px) {
      font-size: 1.875rem;
    }
  }
`
