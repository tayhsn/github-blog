import { api } from '@/lib/axios'
import { createContext, ReactNode, useEffect, useState } from 'react'

interface User {
  name: string
  followers: string
  login: string
  avatar_url: string
  html_url: string
  company: string
  bio: string
}

interface Post {
  title: string
  body: string
  created_at: string
  html_url: string
  number: string
  comments: string
  login: string
}

interface BlogContextType {
  user: User
  posts: Post[]
  post: Post
  setPosts: (data: Post[]) => void
  fetchPostById: (id: string) => Promise<void>
}

interface BlogProviderProps {
  children: ReactNode
}

export const BlogContext = createContext({} as BlogContextType)

export const BlogProvider = ({ children }: BlogProviderProps) => {
  const [user, setUser] = useState({} as User)
  const [post, setPost] = useState({} as Post)
  const [posts, setPosts] = useState([] as Post[])

  useEffect(() => {
    fetchUser()
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchUser = async () => {
    const response = await api.get(`/users/tayhsn`).then((res) => res.data)

    setUser(response)
  }

  const fetchPosts = async () => {
    const response = await api
      .get('repos/tayhsn/github-blog/issues')
      .then((res) => res.data)

    setPosts(response)
  }

  const fetchPostById = async (id: string) => {
    const response = await api
      .get(`repos/tayhsn/github-blog/issues/${id}`)
      .then((res) => res.data)

    setPost(response)
  }

  return (
    <BlogContext.Provider
      value={{ user, posts, post, setPosts, fetchPostById }}
    >
      {children}
    </BlogContext.Provider>
  )
}
