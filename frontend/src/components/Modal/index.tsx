import { Modal, Box, TextField } from '@mui/material'
import { PaperPlaneRight } from 'phosphor-react'
import { useState } from 'react'
import { ModalContainer, Title } from './styles'
import LoadingButton from '@mui/lab/LoadingButton'
interface ModalProps {
  isModalOpen: boolean
  setIsModalOpen: () => void
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
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

  const [UserName, setUserName] = useState('')
  const [errorNameMessage, setErrorNameMessage] = useState('')

  const [UserNumber, setUserNumber] = useState('')
  const [errorNumberMessage, setErrorNumberMessage] = useState('')

  const [UserMessage, setUserMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  function handleClick() {
    setLoading(true)
  }
  return (
    <Modal open={isModalOpen} onClose={setIsModalOpen}>
      <Box sx={style} component="form">
        {/* <Alert severity="success">Agendamento enviado com sucesso</Alert> */}
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
            value={UserName}
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
            value={UserNumber}
            onChange={({ target }) => setUserNumber(target.value)}
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
            onClick={handleClick}
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
