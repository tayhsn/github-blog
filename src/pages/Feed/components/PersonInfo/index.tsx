import { InfoWithIcon } from '@/common/components/InfoWithIcon'
import {
  IconsContainer,
  InfoProfileContainer,
  ProfileContainer,
  UserThumbnail,
} from './styles'

import { RegularText, TitleText } from '@/common/Typography'
import { useRequestData } from '@/hooks/useRequestData'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const USER_URL = 'https://api.github.com/users/tayhsn'

export const PersonInfo = () => {
  const { data, error } = useRequestData(USER_URL)

  if (!data || error) {
    return <></>
  }

  const { avatar_url, bio, company, followers, login, name, html_url } = data

  return (
    <ProfileContainer>
      <UserThumbnail src={avatar_url} alt="" />

      <InfoProfileContainer>
        <header>
          <TitleText>{name}</TitleText>
          <a href={html_url} target="_blank">
            GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </header>

        <main>
          <RegularText>{bio}</RegularText>

          <IconsContainer>
            <InfoWithIcon
              icon={<FontAwesomeIcon icon={faGithub} />}
              text={login}
            />
            <InfoWithIcon
              icon={<FontAwesomeIcon icon={faBuilding} />}
              text={company}
            />
            <InfoWithIcon
              icon={<FontAwesomeIcon icon={faUserGroup} />}
              text={`${followers} seguidores`}
            />
          </IconsContainer>
        </main>
      </InfoProfileContainer>
    </ProfileContainer>
  )
}
