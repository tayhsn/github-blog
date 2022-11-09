import styled from 'styled-components'

export const ProfileContainer = styled.section`
  width: 100%;

  min-height: 13.25rem;

  padding: 2rem 2.5rem;

  display: flex;
  gap: 2rem;
  align-items: flex-start;

  background-color: ${({ theme }) => theme.colors['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  border-radius: 10px;

  position: relative;
`

export const UserThumbnail = styled.img`
  width: 9.25rem;
  height: 9.25rem;

  border-radius: 8px;
  opacity: 0.48;
`

export const InfoProfileContainer = styled.div`
  max-width: 38.25rem;
  min-height: 8rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  gap: 0.5rem;

  header {
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;

    a {
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
    }
  }

  main {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
`

export const IconsContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
`
