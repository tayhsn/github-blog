import logo from '../../assets/logo.svg'
import { HeaderContainer } from './styles'

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
    </HeaderContainer>
  )
}
