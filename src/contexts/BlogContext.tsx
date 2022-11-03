import { api } from '@/lib/axios'
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'

export interface User {
  name: string
  followers: string
  login: string
  avatar_url: string
  html_url: string
  company: string
  bio: string
}

export interface Issue {
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
  issue: Issue | undefined
  issues: Issue[]
  fetchIssueById: (id: string) => Promise<void>
  fetchSearchIssues: (query: string) => Promise<void>
}

interface BlogProviderProps {
  children: ReactNode
}

export const BlogContext = createContext({} as BlogContextType)

export const BlogProvider = ({ children }: BlogProviderProps) => {
  const [user, setUser] = useState<User>({} as User)
  const [issue, setIssue] = useState<Issue | undefined>(undefined)
  const [issues, setIssues] = useState<Issue[]>([])

  useEffect(() => {
    fetchUser()
  }, [])

  useEffect(() => {
    fetchIssues()
  }, [])

  const fetchUser = useCallback(async () => {
    const response = await api
      .get(`/users/tayhsn`)
      .then((res) => res.data)
      .catch((error) => console.log(error))

    setUser(response)
  }, [])

  const fetchIssues = useCallback(async () => {
    const response = await api
      .get('repos/tayhsn/github-blog/issues')
      .then((res) => res.data)
      .catch((error) => console.log(error))

    setIssues(response)
  }, [])

  const fetchIssueById = async (id: string) => {
    const response = await api
      .get(`repos/tayhsn/github-blog/issues/${id}`)
      .then((res) => res.data)

    setIssue(response)
  }

  const fetchSearchIssues = useCallback(async (query: string) => {
    const response = await api
      .get(`search/issues?q=${query}%20repo:tayhsn/github-blog`)
      .then((res) => res.data.items)
      .catch((error) => console.log(error))

    setIssues(response)
  }, [])

  return (
    <BlogContext.Provider
      value={{ user, issue, issues, fetchIssueById, fetchSearchIssues }}
    >
      {children}
    </BlogContext.Provider>
  )
}
