import { InfoWithIcon } from '@/common/components/InfoWithIcon'
import {
  IconsContainer,
  InfoProfileContainer,
  ProfileContainer,
  UserThumbnail,
} from './styles'

import { RegularText, TitleText } from '@/common/Typography'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const PersonInfo = () => {
  return (
    <ProfileContainer>
      <UserThumbnail
        src="https://avatars.githubusercontent.com/u/75539863?v=4"
        alt=""
      />

      <InfoProfileContainer>
        <header>
          <TitleText>Tayanne Novais</TitleText>
          <a href="#" target="_blank">
            GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </header>

        <main>
          <RegularText>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </RegularText>

          <IconsContainer>
            <InfoWithIcon
              icon={<FontAwesomeIcon icon={faGithub} />}
              text={'tayhsn'}
            />
            <InfoWithIcon
              icon={<FontAwesomeIcon icon={faBuilding} />}
              text={'Open to work'}
            />
            <InfoWithIcon
              icon={<FontAwesomeIcon icon={faUserGroup} />}
              text={'32 seguidores'}
            />
          </IconsContainer>
        </main>
      </InfoProfileContainer>
    </ProfileContainer>
  )
}
