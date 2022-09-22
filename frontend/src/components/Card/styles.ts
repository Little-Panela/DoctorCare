import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  max-width: 21.7rem;
  height: 13rem;

  background: #ffffff;

  padding: 24px;
  border: 1px solid ${(props) => props.theme['gray-400']};
  border-radius: 6px;

  p {
    font-size: 24px;
    line-height: 31px;
    font-weight: 700;
    color: ${(props) => props.theme['gray-900']};
  }
`
