import { RegularText } from '@/common/Typography'
import { Post } from '@/contexts/BlogContext'
import { api } from '@/lib/axios'
import { ChangeEvent, useEffect, useState } from 'react'
import { PostCard } from './PostCard'
import { CardContainer, FeedContentContainer, SearchInput } from './styles'

export const FeedContent = () => {
  const [posts, setPosts] = useState([] as Post[])
  const [search, setSearch] = useState<string>('')

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    const response = await api
      .get('repos/tayhsn/github-blog/issues')
      .then((res) => res.data)

    setPosts(response)
  }

  const fetchSearchResults = async (query?: string) => {
    const response = await api.get(
      `search/issues?q=${query}%20repo:tayhsn/github-blog`
    )

    setPosts(response.data.items)
  }

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value.toString()
    setSearch(searchValue)

    // debouncedFunction()
  }

  let totalPosts = posts.length

  // const debouncedFunction = debounce(() => fetchSearchResults(search), 200)

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
