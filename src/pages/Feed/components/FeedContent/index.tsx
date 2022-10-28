import { RegularText } from '@/common/Typography'
import { api } from '@/lib/axios'
import { Issue } from '@/pages/Post'
import { ChangeEvent, useEffect, useState } from 'react'
import { PostCard } from './PostCard'
import { CardContainer, FeedContentContainer, SearchInput } from './styles'

export const FeedContent = () => {
  const [issues, setIssues] = useState<Issue[]>([])
  const [search, setSearch] = useState<string>('')

  useEffect(() => {
    fetchIssues()
  }, [])

  const fetchIssues = async () => {
    const response = await api
      .get('repos/tayhsn/github-blog/issues')
      .then((res) => res.data)

    setIssues(response)
  }

  const fetchSearchIssues = async (query?: string) => {
    const response = await api.get(
      `search/issues?q=${query}%20repo:tayhsn/github-blog`
    )

    setIssues(response.data.items)
  }

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value.toString()
    setSearch(searchValue)

    // handlerBounceSearch()
  }

  let totalPosts = issues.length

  // const handlerBounceSearch = useCallback(
  //   debounce(() => fetchSearchResults(search), 1000),
  //   []
  // )

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
          onBlur={() => fetchSearchIssues(search)}
          value={search}
          id="search"
          placeholder="Buscar conteúdo"
        />
      </form>

      <CardContainer>
        {issues.map((issue: any) => (
          <PostCard
            key={issue.id}
            issueInfo={[
              issue.title,
              issue.body,
              issue.created_at,
              issue.number,
            ]}
          />
        ))}
      </CardContainer>
    </FeedContentContainer>
  )
}
