import styled from 'styled-components'

export const FeedContainer = styled.main`
  width: 54rem;

  margin: -90px auto 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 4.75rem;
`

export const FeedContent = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  form {
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 1rem;
  }
`

export const SearchInput = styled.input`
  width: 100%;

  padding: 0.75rem 1rem;

  border: 1px solid ${({ theme }) => theme.colors['base-border']};
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors['base-input']};
  color: ${({ theme }) => theme.colors['base-text']};

  &::placeholder {
    color: ${({ theme }) => theme.colors['base-label']};
  }
`

export const CardContainer = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`
