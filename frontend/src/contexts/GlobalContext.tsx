import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '../styles/global'
import { defaultTheme } from '../styles/themes/default'

export function GlobalContext({ children }: any) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>{children}</BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
