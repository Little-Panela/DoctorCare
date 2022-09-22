import styled from 'styled-components'

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 10px;
  padding: 20px;

  min-width: 400px;

  @media (max-width: 720px) {
    padding: 10px;
    min-width: 300px;
  }
`

export const Title = styled.h1`
  margin-bottom: 10px;
`
