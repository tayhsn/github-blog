import {
  BackButton,
  IconsContainer,
  InfosContainer,
  InfoTitle,
  LinksContainer,
  PostInfoContainer,
} from './styles'

import { InfoWithIcon } from '@/common/components/InfoWithIcon'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface PostInfoProps {
  issueInfo: string[]
}

export const PostInfo = ({ issueInfo }: PostInfoProps) => {
  const [login, title, html_url, formattedDate, comments] = issueInfo

  return (
    <PostInfoContainer>
      <LinksContainer>
        <BackButton to="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          VOLTAR
        </BackButton>

        <a href={html_url} target="_blank">
          VER NO GITHUB
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </LinksContainer>

      <InfosContainer>
        <InfoTitle>{title}</InfoTitle>

        <IconsContainer>
          <InfoWithIcon
            icon={<FontAwesomeIcon icon={faGithub} />}
            text={login}
          />
          <InfoWithIcon
            icon={<FontAwesomeIcon icon={faCalendarDay} />}
            text={formattedDate}
          />
          <InfoWithIcon
            icon={<FontAwesomeIcon icon={faComment} />}
            text={`${comments} comentários`}
          />
        </IconsContainer>
      </InfosContainer>
    </PostInfoContainer>
  )
}
