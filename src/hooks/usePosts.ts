import { BlogContext } from '@/contexts/BlogContext'
import { useContext } from 'react'

export const usePosts = () => {
  const { issue, issues } = useContext(BlogContext)

  return { issue, issues }
}
