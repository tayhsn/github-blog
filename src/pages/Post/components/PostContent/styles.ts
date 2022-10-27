import styled from 'styled-components'

export const PostContentContainer = styled.main`
  width: 54rem;

  padding: 2.5rem 2rem;

  white-space: pre-wrap;

  a {
    color: ${({ theme }) => theme.colors.blue};
  }
`
