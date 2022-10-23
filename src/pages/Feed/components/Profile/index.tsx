import { InfoWithIcon } from '@/common/components/InfoWithIcon'
import {
  IconsContainer,
  InfoProfileContainer,
  ProfileContainer,
  ProfileHeaderContainer,
  UserThumbnail,
} from './styles'

import { LinkWithIcon } from '@/common/components/LinkWithIcon'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faComment,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Profile = () => {
  return (
    <ProfileContainer>
      <UserThumbnail
        src="https://avatars.githubusercontent.com/u/75539863?v=4"
        alt=""
      />

      <InfoProfileContainer>
        <ProfileHeaderContainer>
          <h1>Tayanne Novais</h1>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
        </ProfileHeaderContainer>

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
      </InfoProfileContainer>

      <span>
        <LinkWithIcon
          icon={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />}
          iconIsRight
          text={'GITHUB'}
          path={'#'}
        />
      </span>
    </ProfileContainer>
  )
}
