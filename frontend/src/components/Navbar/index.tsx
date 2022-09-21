import { useState } from 'react'

import { Link as ScroolTo } from 'react-scroll'

import {
  ButtonAppointment,
  Hamburger,
  Logo,
  Menu,
  NavbarContainer,
} from './styles'
import { CreateAppointmentModal } from '../Modal'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  function changeNavBarState() {
    setIsOpen((curr) => !curr)
  }

  function changeModalState() {
    setIsModalOpen((curr) => !curr)
  }

  return (
    <NavbarContainer isOpen={isOpen}>
      <Logo isOpen={isOpen}>
        <h1>
          Doctor<span>Care</span>
        </h1>
      </Logo>

      <Menu isOpen={isOpen} onClick={changeNavBarState}>
        <ScroolTo
          activeClass="activeHome"
          to="home"
          spy={true}
          smooth={true}
          offset={-150}>
          Início
          <span />
        </ScroolTo>

        <ScroolTo activeClass="activeAbout" to="about" spy={true} smooth={true}>
          Sobre
          <span />
        </ScroolTo>

        <ScroolTo
          activeClass="activeService"
          to="about"
          spy={true}
          smooth={true}>
          Serviços
          <span />
        </ScroolTo>

        <ScroolTo
          activeClass="activeDepositions"
          to="about"
          spy={true}
          smooth={true}>
          Depoimentos
          <span />
        </ScroolTo>

        <ButtonAppointment
          className="mobile"
          isOpen={isOpen}
          onClick={changeModalState}>
          <span>Agendar consulta</span>
        </ButtonAppointment>
      </Menu>
      <Hamburger isOpen={isOpen} onClick={changeNavBarState} />
      <ButtonAppointment
        className="desktop"
        isOpen={isOpen}
        onClick={changeModalState}>
        <span>Agendar consulta</span>
      </ButtonAppointment>
      <CreateAppointmentModal
        isModalOpen={isModalOpen}
        setIsModalOpen={changeModalState}
      />
    </NavbarContainer>
  )
}
