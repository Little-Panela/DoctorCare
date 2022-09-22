import { useState } from 'react'
import { Element } from 'react-scroll'

import { BannerNumbers } from '../../components/BannerNumbers'
import { ServicesCard } from '../../components/ServicesCard'
import { CreateAppointmentModal } from '../../components/Modal'

import {
  Button,
  HomeContainer,
  HomeTextField,
  HomeWrapper,
  ServicesTextField,
  ServicesWrapper,
  WomenPhoto,
} from './styles'

export function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  function changeModalState() {
    setIsModalOpen((curr) => !curr)
  }

  return (
    <HomeContainer>
      <Element name="home">
        <HomeWrapper>
          <HomeTextField>
            <span>BOAS-VINDAS A DOCTORCARE 👋</span>
            <h1>Assistência médica simplificada para todos</h1>
            <p>
              Os médicos da DoctorCare vão além dos sintomas para tratar a causa
              raiz de sua doença e proporcionar uma cura a longo prazo.
            </p>
            <Button onClick={changeModalState}>Agende sua consulta</Button>
            <CreateAppointmentModal
              isModalOpen={isModalOpen}
              setIsModalOpen={changeModalState}
            />
          </HomeTextField>
          <WomenPhoto />
        </HomeWrapper>
      </Element>
      <BannerNumbers />
      <Element name="service">
        <ServicesWrapper>
          <ServicesTextField>
            <strong>SERVIÇOS</strong>
            <span>Como podemos ajudá-lo a se sentir melhor?</span>
          </ServicesTextField>
          <ServicesCard />
        </ServicesWrapper>
      </Element>
    </HomeContainer>
  )
}
