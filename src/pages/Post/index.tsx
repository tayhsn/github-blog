import { useBlog } from '@/hooks/useBlog'
import { api } from '@/lib/axios'
import { PostContent } from '@/pages/Post/components/PostContent'
import { PostInfo } from '@/pages/Post/components/PostInfo'
import { dateDistanceFormatter } from '@/utils/formatter'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PostPageContainer } from './styles'

export interface Post {
  title: string
  body: string
  created_at: string
  html_url: string
  number: string
  comments: string
  login: string
}

export const Post = () => {
  const { id } = useParams()
  const { user } = useBlog()
  const [post, setPost] = useState<Post | undefined>(undefined)

  useEffect(() => {
    fetchPostById(id!)
  }, [id])

  const fetchPostById = async (id: string) => {
    const response = await api
      .get(`repos/tayhsn/github-blog/issues/${id}`)
      .then((res) => res.data)

    setPost(response)
  }

  if (!post) return <></>

  const { title, html_url, created_at, comments, body } = post
  const { login } = user

  const formattedDate = dateDistanceFormatter(created_at)

  return (
    <PostPageContainer>
      <PostInfo info={[login, title, html_url, formattedDate, comments]} />

      <PostContent body={body} />
    </PostPageContainer>
  )
}
