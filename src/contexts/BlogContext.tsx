import { api } from '@/lib/axios'
import { createContext, ReactNode, useEffect, useState } from 'react'

export interface User {
  name: string
  followers: string
  login: string
  avatar_url: string
  html_url: string
  company: string
  bio: string
}

interface BlogContextType {
  user: User
}

interface BlogProviderProps {
  children: ReactNode
}

export const BlogContext = createContext({} as BlogContextType)

export const BlogProvider = ({ children }: BlogProviderProps) => {
  const [user, setUser] = useState<User>({} as User)

  useEffect(() => {
    fetchUser()
  }, [])

  const fetchUser = async () => {
    const response = await api.get(`/users/tayhsn`).then((res) => res.data)

    setUser(response)
  }

  return (
    <BlogContext.Provider value={{ user }}>{children}</BlogContext.Provider>
  )
}
