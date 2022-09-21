import styled from 'styled-components'

export const BannerContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  gap: 6.25rem;

  width: fit-content;

  background-color: ${(props) => props.theme['gray-100']};

  border: 1px solid ${(props) => props.theme['gray-400']};
  border-radius: 6px;

  padding: 3.75rem 7.5rem;
  margin: -4.8rem 7.6rem 0;

  .divider {
    content: '';
    background-color: ${(props) => props.theme['green-500']};

    height: 5.6rem;
    width: 1px;

    @media (max-width: 1000px) {
      display: none;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 4px;

    strong {
      color: ${(props) => props.theme['gray-900']};

      font-size: 48px;
      line-height: 130%;
      font-weight: 700;
    }

    span {
      color: ${(props) => props.theme['green-500']};
      font-weight: 400;

      font-size: 16px;
      line-height: 150%;
    }
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    /* margin: 2.5rem 1.5rem 0; */
  }
`
