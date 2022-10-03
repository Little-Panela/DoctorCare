import { useEffect, useState } from 'react'
import { SchedulesList } from '../../components/TasksList'
import { api } from '../../services/api'
import { DashboardContainer } from './styles'

export function Dashboard() {
  const [agendamentos, setAgendamentos] = useState([])

  useEffect(() => {
    api('/findAllPacients').then(({ data }) => {
      setAgendamentos(data)
    })
  }, [])

  async function deleteSchedule(scheduleToDelete: string) {
    try {
      await api.delete(`/deletePacient/${scheduleToDelete}`)
      alert('Agendamento deletado com sucesso')
      api('/findAllPacients').then(({ data }) => {
        setAgendamentos(data)
      })
    } catch (err) {
      alert('erro ao deletar o agendamento!')
    }
  }

  return (
    <DashboardContainer>
      <h1>Dashboard DoctorCare</h1>
      <p>Todos os agendamentos</p>

      <SchedulesList
        Tasks={agendamentos}
        onDeleteTask={deleteSchedule}
        onDoneTask={function (taskToDelete: string): void {
          throw new Error('Function not implemented.')
        }}
      />
    </DashboardContainer>
  )
}
