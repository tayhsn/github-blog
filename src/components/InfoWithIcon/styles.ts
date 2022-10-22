import styled from 'styled-components'

export const InfoWithIconContainer = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  color: ${({ theme }) => theme.colors['base-span']};
  font-size: ${({ theme }) => theme.textSizes['text-m']};
`
