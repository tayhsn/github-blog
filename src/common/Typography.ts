import styled from 'styled-components'

interface TitleTextProps {
  size?: 'l' | 'm' | 's'
  color?: 'title' | 'subtitle' | 'text'
  weight?: string | number
}

interface RegularTextProps {
  size?: 'm' | 's'
  color?: 'text' | 'subtitle' | 'span'
  weight?: string | number
}

export const TitleText = styled.h1<TitleTextProps>`
  color: ${({ theme, color }) => theme.colors[`base-${color ?? 'title'}`]};
  font-size: ${({ theme, size }) => theme.textSizes[`title-${size ?? 'l'}`]};
  line-height: 130%;
  font-weight: ${({ weight }) => weight ?? 700};
`

export const RegularText = styled.p<RegularTextProps>`
  color: ${({ theme, color }) => theme.colors[`base-${color ?? 'text'}`]};
  font-size: ${({ theme, size }) => theme.textSizes[`text-${size ?? 'm'}`]};
  line-height: 160%;
  font-weight: ${({ weight }) => weight ?? 400};
`
