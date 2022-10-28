import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { BlogProvider } from './contexts/BlogContext'
import { Router } from './router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <BrowserRouter>
        <BlogProvider>
          <Router />
        </BlogProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
