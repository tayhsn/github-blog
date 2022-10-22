import { ReactNode } from 'react'
import { InfoWithIconContainer } from './styles'

interface InfoWithIconProps {
  icon: ReactNode
  text: string | ReactNode
}

export const InfoWithIcon = ({ icon, text }: InfoWithIconProps) => {
  return (
    <InfoWithIconContainer>
      {icon}
      <p>{text}</p>
    </InfoWithIconContainer>
  )
}
