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
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-150}
          onClick={changeNavBarState}>
          Início
          <span />
        </ScroolTo>

        <ScroolTo
          activeClass="active"
          to="service"
          spy={true}
          smooth={true}
          offset={60}
          onClick={changeNavBarState}
          // onSetActive={}
        >
          Serviços
          <span />
        </ScroolTo>

        <ScroolTo
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          onClick={changeNavBarState}>
          Sobre
          <span />
        </ScroolTo>

        <ScroolTo
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          onClick={changeNavBarState}>
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
