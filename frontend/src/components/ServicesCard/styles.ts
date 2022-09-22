import styled from 'styled-components'

export const ServicesCardContainer = styled.div`
  display: grid;
  width: 100%;
  gap: 2.5rem;

  justify-content: center;

  padding-left: 7.625rem;
  padding-right: 7.625rem;

  grid-template-columns: repeat(auto-fit, 347px);

  @media (max-width: 900px) {
    gap: 2rem;
  }
`
