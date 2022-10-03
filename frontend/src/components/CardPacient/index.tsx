import { Trash } from 'phosphor-react'
import styles from './styles.module.css'

export interface TaskProps {
  comentario: string
  consulta: string
  numero: string
  name: string
  id: string
  content: string
  isCompleted: boolean
}

interface cardProps {
  task: TaskProps
  onDeleteTask: (taskId: string) => void
  onDoneTask: (taskId: string) => void
}

export function CardPacient({ task, onDeleteTask, onDoneTask }: cardProps) {
  async function handleDeleteSchedules() {
    onDeleteTask(task.id)
  }

  return (
    <div className={styles.cardContainer} data-done={task.isCompleted}>
      <div className={styles.wrapper}>
        <p>
          {task.name} - {task.numero} - {task.consulta} - {task.comentario}
        </p>
      </div>
      <button onClick={handleDeleteSchedules}>
        <Trash size={24} />
      </button>
    </div>
  )
}
