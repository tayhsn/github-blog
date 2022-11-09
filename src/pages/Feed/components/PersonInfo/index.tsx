import { InfoWithIcon } from '@/common/components/InfoWithIcon'
import {
  IconsContainer,
  InfoProfileContainer,
  ProfileContainer,
  UserThumbnail,
} from './styles'

import { RegularText, TitleText } from '@/common/Typography'
import { useUser } from '@/hooks/useUser'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const PersonInfo = () => {
  const {
    user: { avatar_url, bio, company, followers, login, name, html_url },
  } = useUser()

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
