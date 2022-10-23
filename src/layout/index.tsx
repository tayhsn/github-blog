import { Outlet } from 'react-router-dom'
import { Header } from '@/common/components/Header'
import { LayoutContainer } from './styles'

export const Layout = () => {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}
