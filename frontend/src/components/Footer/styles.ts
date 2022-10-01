import styled from 'styled-components'

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 5rem 7.6875rem;

  background-color: ${(props) => props.theme['green-500']};

  @media (max-width: 720px) {
    padding: 3.75rem 1.625rem;
    flex-direction: column;
    align-items: flex-start;

    gap: 2rem;
  }
`

export const FooterTextField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  strong {
    font-size: 2.25rem;
    font-weight: 400;
    color: ${(props) => props.theme.white};

    span {
      font-size: 2.25rem;
      font-weight: 700;
    }
  }

  > span {
    color: ${(props) => props.theme['gray-100']};

    font-weight: 400;
    font-size: 0.875rem;
  }
`

export const FooterSocialMidia = styled.div`
  display: flex;
  gap: 2rem;
`
