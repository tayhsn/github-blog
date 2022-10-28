import { useBlog } from '@/hooks/useBlog'
import { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'
import { PostContentContainer } from './styles'

interface PostContentProps {
  body: string
}

export const PostContent = ({ body }: PostContentProps) => {
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
