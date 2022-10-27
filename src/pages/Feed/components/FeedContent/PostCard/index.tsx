import { RegularText, TitleText } from '@/common/Typography'
import { dateDistanceFormatter } from '@/utils/formatter'
import ReactMarkdown from 'react-markdown'
import { useNavigate } from 'react-router-dom'
import { PostCardContainer } from './styles'

interface PostCardProps {
  info: string[]
}

export const PostCard = ({ info }: PostCardProps) => {
  const [title, body, created_at, number] = info
  const navigate = useNavigate()

  const dateDistance = dateDistanceFormatter(created_at)

  const handleGoToPost = () => navigate(`/post/${number}`)

  return (
    <PostCardContainer onClick={handleGoToPost}>
      <header>
        <TitleText size="m">{title}</TitleText>
        <RegularText size="m" color="span">
          {dateDistance}
        </RegularText>
      </header>

      <main>
        <ReactMarkdown children={body} />
      </main>
    </PostCardContainer>
  )
}
