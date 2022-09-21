import { Button, HomeContainer, HomeTextField, HomeWrapper } from './styles'

import HomePhoto from '../../assets/homephoto.svg'
import { BannerNumbers } from '../../components/BannerNumbers'
import { Element } from 'react-scroll'

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
          <img src={HomePhoto} loading="lazy" alt="" />
        </HomeWrapper>
      </Element>
      <BannerNumbers />
    </HomeContainer>
  )
}
