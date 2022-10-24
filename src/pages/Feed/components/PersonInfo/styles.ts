import styled from 'styled-components'

export const ProfileContainer = styled.section`
  width: 54rem;
  min-height: 13.25rem;

  padding: 2rem 2.5rem;

  display: flex;
  gap: 2rem;
  align-items: center;

  background-color: ${({ theme }) => theme.colors['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  border-radius: 10px;

  position: relative;

  span {
    position: absolute;
    right: 32px;
    top: 40px;
  }
`

export const UserThumbnail = styled.img`
  width: 9.25rem;
  height: 9.25rem;

  border-radius: 8px;
  opacity: 0.48;
`

export const InfoProfileContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.5rem;
`

export const ProfileHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
`

export const IconsContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 2rem;
`
