import styled from 'styled-components'

export const LinkWithIconContainer = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  color: ${({ theme }) => theme.colors.blue};
  font-size: ${({ theme }) => theme.textSizes['components-link']};
  font-weight: 700;

  text-decoration: none;

  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors.blue};
  }
`
