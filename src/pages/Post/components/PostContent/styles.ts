import styled from 'styled-components'

export const PostContentContainer = styled.main`
  max-width: 100%;

  padding: 2.5rem 2rem;

  white-space: pre-wrap;

  a {
    color: ${({ theme }) => theme.colors.blue};
  }

  pre code {
    white-space: pre-wrap;
  }
`
