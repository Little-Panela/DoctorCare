import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'

interface ModalProps {
  isModalOpen: boolean
  setIsModalOpen: () => void
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export function CreateAppointmentModal({
  isModalOpen,
  setIsModalOpen,
}: ModalProps) {
  return (
    <Modal
      open={isModalOpen}
      onClose={setIsModalOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={style}>
        <h1>aaa</h1>
      </Box>
    </Modal>
  )
}
