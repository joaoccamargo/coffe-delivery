import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import { GlobalStyle } from "./styles"
import { ThemeProvider } from "styled-components"
import { themeDefault } from "./styles/themes/theme-default"

function App() {
  
  return (
        <ThemeProvider theme={themeDefault}>
          <BrowserRouter>
              <Router />
            </BrowserRouter>
          <GlobalStyle />
        </ThemeProvider>
  )
}

export default App
