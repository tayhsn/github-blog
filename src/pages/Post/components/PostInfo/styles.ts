import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const PostInfoContainer = styled.section`
  width: 100%;
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
`

export const BackButton = styled(NavLink)`
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
