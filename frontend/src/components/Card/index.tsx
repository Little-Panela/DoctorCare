import { CheckCircle } from 'phosphor-react'
import { CardContainer } from './styles'

interface CardProps {
  title: string
  legend: string
}

export function Card({ title, legend }: CardProps) {
  return (
    <CardContainer>
      <CheckCircle size={24} color="#00856F" />
      <p>{title}</p>
      <span>{legend}</span>
    </CardContainer>
  )
}
