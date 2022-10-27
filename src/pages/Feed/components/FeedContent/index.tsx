import { RegularText } from '@/common/Typography'
import { api } from '@/lib/axios'
import { ChangeEvent, useEffect, useState } from 'react'
import { PostCard } from './PostCard'
import { CardContainer, FeedContentContainer, SearchInput } from './styles'

const ISSUES_URL = 'https://api.github.com/repos/tayhsn/github-blog/issues'

const SEARCH_ISSUES_URL = `https://api.github.com/search/issues`

export interface Post {
  title: string
  body: string
  created_at: string
  number: string
}

export const FeedContent = () => {
  const [search, setSearch] = useState<string>('')
  const [posts, setPosts] = useState<Post[]>([])

  const fetchPosts = async () => {
    const response = await api
      .get(`repos/tayhsn/github-blog/issues`)
      .then((res) => res.data)

    setPosts(response)
  }

  const fetchSearchResults = async (query?: string) => {
    const response = await api.get(
      `search/issues?q=${query}%20repo:tayhsn/github-blog`
    )

    setPosts(response.data.items)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchBy = event.target.value.toString()
    setSearch(searchBy)
  }

  let totalPosts = posts.length

  return (
    <FeedContentContainer>
      <form>
        <label htmlFor="search">
          <RegularText size="s" color="span">
            {totalPosts} publicações
          </RegularText>
        </label>
        <SearchInput
          onChange={handleSearchChange}
          onBlur={() => fetchSearchResults(search)}
          value={search}
          id="search"
          placeholder="Buscar conteúdo"
        />
      </form>

      <CardContainer>
        {posts ? (
          posts.map((card: any) => (
            <PostCard
              key={card.id}
              info={[card.title, card.body, card.created_at, card.number]}
            />
          ))
        ) : (
          <></>
        )}
      </CardContainer>
    </FeedContentContainer>
  )
}
