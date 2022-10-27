import { InfoWithIcon } from '@/common/components/InfoWithIcon'
import {
  BackButton,
  IconsContainer,
  InfosContainer,
  InfoTitle,
  LinksContainer,
  PostInfoContainer,
} from './styles'

import { useRequestData } from '@/hooks/useRequestData'
import { dateDistanceFormatter } from '@/utils/formatter'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useParams } from 'react-router-dom'

const ISSUES_URL = 'https://api.github.com/repos/tayhsn/github-blog/issues'

export const PostInfo = () => {
  const { id } = useParams()
  const { data, error } = useRequestData(`${ISSUES_URL}/${id}`)

  if (!data || error) {
    return <></>
  }

  const {
    html_url,
    title,
    comments,
    created_at,
    user: { login },
  } = data

  const formattedDate = dateDistanceFormatter(created_at)

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
