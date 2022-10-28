import { RegularText } from '@/common/Typography'
import { api } from '@/lib/axios'
import { Issue } from '@/pages/Post'
import { debounce } from 'lodash'
import { ChangeEvent, useCallback, useEffect, useState } from 'react'
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

  const handlerBounceSearch = useCallback(
    debounce((nextValue) => fetchSearchIssues(nextValue), 1000),
    []
  )

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value: nextValue } = event.target
    setSearch(nextValue)

    handlerBounceSearch(nextValue)
  }

  let totalPosts = issues.length
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
