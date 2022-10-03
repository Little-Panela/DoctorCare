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
  AboutUsWrapper,
  AboutUsTextField,
  DoctorSeuZupa,
  ContactWrapper,
  ContactTextField,
  ContactPic,
  NeyBoyHexa,
  ButtonContact,
} from './styles'
import { Envelope, MapPin } from 'phosphor-react'

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


      <Element name="about">
      <AboutUsWrapper>
      
        <DoctorSeuZupa />
        <AboutUsTextField>
          <strong>SOBRE NÓS</strong>
          <h1>Entenda quem somos e por que existimos</h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim. Amet minim mollit non
            deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim. Amet minim mollit non deserunt ullamco est sit
            aliqua dolor do amet sint. Velit officia consequat duis enim. Amet
            minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint.
          </p>
        </AboutUsTextField>
      </AboutUsWrapper>
      </Element>
    
       <Element name="contact">
      <ContactWrapper>
        <ContactTextField>
          <strong>CONTATO</strong>
          <h1>Entre em contato com a gente!</h1>
          <ContactPic>
            <div>
              <MapPin size={24} color="#00856F" />
              <p>Av. Alcindo Cacela, 1523</p>
            </div>
            <div>
              <Envelope size={24} color="#00856F" />
              <p>contato@doctorcare.com</p>
            </div>
          </ContactPic>
          <ButtonContact>
            <Button onClick={changeModalState}>Agende sua consulta</Button>
          </ButtonContact>
        </ContactTextField>
        <NeyBoyHexa />
      </ContactWrapper>
      </Element>
    </HomeContainer>
  )
}
