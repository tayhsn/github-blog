import { BlogContext } from '@/contexts/BlogContext'
import { useContext } from 'react'

export const useUser = () => {
  const { user } = useContext(BlogContext)

  return { user }
}
