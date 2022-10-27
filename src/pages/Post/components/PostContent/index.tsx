import { useRequestData } from '@/hooks/useRequestData'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'
import { PostContentContainer } from './styles'

const ISSUES_URL = 'https://api.github.com/repos/tayhsn/github-blog/issues'

export const PostContent = () => {
  const { id } = useParams()
  const { data, error } = useRequestData(`${ISSUES_URL}/${id}`)

  if (!data || error) {
    return <></>
  }

  const { body } = data

  return (
    <PostContentContainer>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        children={body}
      />
    </PostContentContainer>
  )
}
