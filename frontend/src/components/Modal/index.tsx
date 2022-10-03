import { Modal, Box, TextField } from '@mui/material'
import { PaperPlaneRight } from 'phosphor-react'
import { useState } from 'react'
import { ModalContainer, Title } from './styles'
import LoadingButton from '@mui/lab/LoadingButton'
import { api } from '../../services/api'
import { v4 as uuidv4 } from 'uuid'
interface ModalProps {
  isModalOpen: boolean
  setIsModalOpen: () => void
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  // width: 400,
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export function CreateAppointmentModal({
  isModalOpen,
  setIsModalOpen,
}: ModalProps) {
  const [loading, setLoading] = useState(false)

  const [userName, setUserName] = useState('')
  const [errorNameMessage, setErrorNameMessage] = useState('')

  const [userNumber, setUserNumber] = useState('')
  const [errorNumberMessage, setErrorNumberMessage] = useState('')

  const [medic, setMedic] = useState('')
  const [errorMedic, setErrorMedic] = useState('')

  const [UserMessage, setUserMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmitForm() {
    setLoading(true)

    if (userName.length === 0) {
      setErrorNameMessage('Digite alguma coisa')
      setLoading(false)

      return
    }

    if (userNumber.length === 0) {
      setErrorNumberMessage('Digite alguma coisa')
      setLoading(false)

      return
    }

    if (medic.length === 0) {
      setErrorMedic('Digite alguma coisa')
      setLoading(false)

      return
    }

    if (UserMessage.length === 0) {
      setErrorMessage('Digite alguma coisa')
      setLoading(false)

      return
    }

    try {
      await api.post(`/addPacient`, {
        id: uuidv4(),
        name: userName,
        consulta: medic,
        numero: userNumber,
        comentario: UserMessage,
      })

      alert('Agendamento enviado com sucesso')
    } catch (err) {
      alert('erro ao criar o Agendamento!')
    }

    setLoading(false)
    setUserName('')
    setErrorNameMessage('')
    setUserNumber('')
    setErrorNumberMessage('')
    setMedic('')
    setErrorMedic('')
    setUserMessage('')
    setErrorMessage('')
  }

  return (
    <Modal open={isModalOpen} onClose={setIsModalOpen}>
      <Box sx={style} component="form">
        <ModalContainer>
          <Title>Agendar Consulta</Title>
          <TextField
            fullWidth
            required
            label="Seu nome"
            variant="outlined"
            disabled={loading}
            error={errorNameMessage.length > 0}
            helperText={errorNameMessage.length > 0 ? errorNameMessage : ' '}
            value={userName}
            onChange={({ target }) => setUserName(target.value)}
          />
          <TextField
            fullWidth
            required
            label="Seu número"
            variant="outlined"
            type="number"
            disabled={loading}
            error={errorNumberMessage.length > 0}
            helperText={
              errorNumberMessage.length > 0 ? errorNumberMessage : ' '
            }
            value={userNumber}
            onChange={({ target }) => setUserNumber(target.value)}
          />
          <TextField
            fullWidth
            required
            label="Com quem você deseja ser consultado"
            variant="outlined"
            disabled={loading}
            error={errorMedic.length > 0}
            helperText={errorMedic.length > 0 ? errorMedic : ' '}
            value={medic}
            onChange={({ target }) => setMedic(target.value)}
          />
          <TextField
            fullWidth
            required
            label="Sua Mensagem"
            multiline
            rows={5}
            disabled={loading}
            error={errorMessage.length > 0}
            helperText={errorMessage.length > 0 ? errorMessage : ' '}
            value={UserMessage}
            onChange={({ target }) => setUserMessage(target.value)}
          />
          <LoadingButton
            onClick={handleSubmitForm}
            endIcon={<PaperPlaneRight />}
            loading={loading}
            loadingPosition="end"
            size="large"
            variant="contained">
            Enviar
          </LoadingButton>
        </ModalContainer>
      </Box>
    </Modal>
  )
}
