import styled from 'styled-components'

export const PostCardContainer = styled.article`
  max-width: 23rem;
  width: 100%;
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
    flex-direction: row;
    justify-content: space-between;

    h1 {
      width: 16rem;
    }

    p {
      justify-self: flex-end;
      text-align: right;
    }
  }

  main {
    max-width: 22rem;
    height: 7rem;

    white-space: pre-wrap;

    overflow: hidden;

    a {
      color: ${({ theme }) => theme.colors.blue};
    }
  }

  border: 2px solid transparent;

  &:hover {
    border: 2px solid ${(props) => props.theme.colors['base-label']};
    transition: border 0.2s;
  }
`
