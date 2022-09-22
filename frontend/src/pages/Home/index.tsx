import { Element } from 'react-scroll'

import { BannerNumbers } from '../../components/BannerNumbers'

import {
  Button,
  HomeContainer,
  HomeTextField,
  HomeWrapper,
  ServicesTextField,
  ServicesWrapper,
  WomenPhoto,
} from './styles'
import { ServicesCard } from '../../components/ServicesCard'

export function Home() {
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
            <Button>Agende sua consulta</Button>
          </HomeTextField>
          <WomenPhoto />
        </HomeWrapper>
      </Element>
      <BannerNumbers />
      <ServicesWrapper>
        <ServicesTextField>
          <strong>SERVIÇOS</strong>
          <span>Como podemos ajudá-lo a se sentir melhor?</span>
        </ServicesTextField>
        <ServicesCard />
      </ServicesWrapper>
    </HomeContainer>
  )
}
