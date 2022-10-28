import { useBlog } from '@/hooks/useBlog'
import { PostContent } from '@/pages/Post/components/PostContent'
import { PostInfo } from '@/pages/Post/components/PostInfo'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { PostPageContainer } from './styles'

export const Post = () => {
  const { fetchPostById, post, user } = useBlog()
  const { id } = useParams()

  useEffect(() => {
    fetchPostById(id!)
  }, [id])

  const { title, html_url, created_at, comments, body } = post

  const { login } = user

  const info = {
    login,
    title,
    html_url,
    created_at,
    comments,
  }

  return (
    <PostPageContainer>
      <PostInfo info={info} />

      <PostContent body={body} />
    </PostPageContainer>
  )
}
