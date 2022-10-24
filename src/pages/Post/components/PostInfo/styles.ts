import styled from 'styled-components'

export const PostInfoContainer = styled.section`
  width: 54rem;
  min-height: 10.5rem;

  padding: 2rem;

  gap: 1.25rem;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  background-color: ${({ theme }) => theme.colors['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  border-radius: 10px;
`

export const LinksContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const InfosContainer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const InfoTitle = styled.h1`
  font-size: ${({ theme }) => theme.textSizes['title-l']};
  font-weight: 700;
`
export const IconsContainer = styled.footer`
  display: flex;
  align-items: center;
  gap: 2rem;
`
