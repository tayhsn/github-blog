import { InfoWithIcon } from '@/common/components/InfoWithIcon'
import { LinkWithIcon } from '@/common/components/LinkWithIcon'
import {
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
        <LinkWithIcon
          icon={<FontAwesomeIcon icon={faChevronLeft} />}
          text={'VOLTAR'}
          path={'#'}
        />
        <LinkWithIcon
          icon={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />}
          iconIsRight
          text={'VER NO GITHUB'}
          path={'#'}
        />
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
