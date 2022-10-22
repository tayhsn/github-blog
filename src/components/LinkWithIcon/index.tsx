import { ReactNode } from 'react'
import { LinkWithIconContainer } from './styles'

interface LinkWithIconProps {
  icon: ReactNode
  text: string | ReactNode
  path: string
  iconIsRight?: boolean
}

export const LinkWithIcon = ({
  icon,
  text,
  path,
  iconIsRight,
}: LinkWithIconProps) => {
  return (
    <LinkWithIconContainer href={path}>
      {iconIsRight ? (
        <>
          <p>{text}</p>
          {icon}
        </>
      ) : (
        <>
          {icon}
          <p>{text}</p>
        </>
      )}
    </LinkWithIconContainer>
  )
}
