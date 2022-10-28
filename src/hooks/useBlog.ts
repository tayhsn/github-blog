import { BlogContext } from '@/contexts/BlogContext'
import { useContext } from 'react'

export const useBlog = () => {
  return useContext(BlogContext)
}
