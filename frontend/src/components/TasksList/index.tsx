import { Clipboard } from 'phosphor-react'
import { CardPacient } from '../CardPacient'

import styles from './styles.module.css'

import { v4 as uuidv4 } from 'uuid'

export interface TaskProps {
  id: string
  content: string
  isCompleted: boolean
  comentario: string
  consulta: string
  numero: string
  name: string
}

interface NewTaskProps {
  Tasks: TaskProps[]
  onDeleteTask: (task: string) => void
  onDoneTask: (taskToDelete: string) => void
}

export function SchedulesList({
  Tasks,
  onDeleteTask,
  onDoneTask,
}: NewTaskProps) {
  const tasksCounter = Tasks.length

  return (
    <div className={styles.taskContainer}>
      <div className={styles.subtitles}>
        <p className={styles.createdTasks}>
          Agendamentos criados{' '}
          <span className={styles.counter}>{tasksCounter}</span>
        </p>
      </div>
      {Tasks.length === 0 && (
        <div className={styles.withoutTasks}>
          <Clipboard />
          <p>Ainda não tem nenhum agendamento</p>
        </div>
      )}
      {Tasks.length !== 0 &&
        Tasks.map((task: TaskProps) => {
          return (
            <CardPacient
              key={uuidv4()}
              task={task}
              onDeleteTask={onDeleteTask}
              onDoneTask={onDoneTask}
            />
          )
        })}
    </div>
  )
}
