import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>

      {/* se está fora do tema, não é aplicada a cor, pois não entende o conteúdo da variável theme.primary */}
      {/* <Button /> */}
    </>
  )
}
