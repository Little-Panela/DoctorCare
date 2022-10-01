import { Outlet } from 'react-router-dom'

import { Footer } from '../../components/Footer'
import { Navbar } from '../../components/Navbar'

import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Navbar />
      <Outlet />
      <Footer />
    </LayoutContainer>
  )
}
