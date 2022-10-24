import { RegularText } from '@/common/Typography'
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
      <RegularText size="m" color="span">
        {text}
      </RegularText>
    </InfoWithIconContainer>
  )
}
