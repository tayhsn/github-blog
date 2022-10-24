import styled from 'styled-components'

export const PostCardContainer = styled.article`
  width: 26rem;
  min-height: 16.25rem;

  background-color: ${({ theme }) => theme.colors['base-post']};
  border-radius: 10px;

  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  cursor: pointer;

  header {
    display: flex;
    justify-content: space-between;

    h1 {
      width: 17.6875rem;
    }
  }

  main {
    width: 22rem;
    height: 7rem;

    p {
      height: 100%;

      overflow: hidden;
      /* text-overflow: ellipsis;
      white-space: nowrap; */
    }
  }

  border: 2px solid transparent;

  &:hover {
    border: 2px solid ${(props) => props.theme.colors['base-label']};
    transition: border 0.2s;
  }
`
