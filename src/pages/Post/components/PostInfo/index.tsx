import { InfoWithIcon } from '@/common/components/InfoWithIcon'
import { LinkWithIcon } from '@/common/components/LinkWithIcon'
import {
  BackButton,
  IconsContainer,
  InfosContainer,
  InfoTitle,
  LinksContainer,
  PostInfoContainer,
} from './styles'

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const PostInfo = () => {
  return (
    <PostInfoContainer>
      <LinksContainer>
        <BackButton to="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          VOLTAR
        </BackButton>

        <a href="#" target="_blank">
          VER NO GITHUB
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </LinksContainer>

      <InfosContainer>
        <InfoTitle>JavaScript data types and data structures</InfoTitle>

        <IconsContainer>
          <InfoWithIcon
            icon={<FontAwesomeIcon icon={faGithub} />}
            text={'tayhsn'}
          />
          <InfoWithIcon
            icon={<FontAwesomeIcon icon={faCalendarDay} />}
            text={'Há 1 dia atrás'}
          />
          <InfoWithIcon
            icon={<FontAwesomeIcon icon={faComment} />}
            text={'5 comentários'}
          />
        </IconsContainer>
      </InfosContainer>
    </PostInfoContainer>
  )
}
