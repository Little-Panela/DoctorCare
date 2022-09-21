import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${(props) => props.theme['gray-300']};
`
export const HomeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme['gray-400']};
  gap: 3.1rem;
  padding-bottom: 3.43rem;

  @media (max-width: 900px) {
    img {
      width: 261.64px;
      height: 342px;
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
