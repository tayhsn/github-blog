import { useBlog } from '@/hooks/useBlog'
import { usePosts } from '@/hooks/usePosts'
import { useUser } from '@/hooks/useUser'
import { PostContent } from '@/pages/Post/components/PostContent'
import { PostInfo } from '@/pages/Post/components/PostInfo'
import { dateDistanceFormatter } from '@/utils/formatter'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { PostPageContainer } from './styles'

export const Post = () => {
  const { fetchIssueById } = useBlog()
  const { issue } = usePosts()
  const { user } = useUser()
  const { id } = useParams()

  useEffect(() => {
    fetchIssueById(id!)
  }, [id])

  if (!issue) return <></>

  const { title, html_url, created_at, comments, body } = issue
  const { login } = user

  const formattedDate = dateDistanceFormatter(created_at)

  return (
    <PostPageContainer>
      <PostInfo issueInfo={[login, title, html_url, formattedDate, comments]} />

      <PostContent body={body} />
    </PostPageContainer>
  )
}
