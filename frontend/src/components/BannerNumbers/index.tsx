import { BannerContainer } from './styles'

export function BannerNumbers() {
  return (
    <BannerContainer>
      <div>
        <strong>+3.500</strong>
        <span>Pacientes atendidos</span>
      </div>
      <div className="divider" />
      <div>
        <strong>+15</strong>
        <span>Especialistas disponíveis</span>
      </div>
      <div className="divider" />
      <div>
        <strong>+10</strong>
        <span>Anos no mercado</span>
      </div>
    </BannerContainer>
  )
}
