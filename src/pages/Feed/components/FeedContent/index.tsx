import { RegularText } from '@/common/Typography'
import { useBlog } from '@/hooks/useBlog'
import { usePosts } from '@/hooks/usePosts'
import { debounce } from 'lodash'
import { ChangeEvent, useCallback } from 'react'
import { PostCard } from './PostCard'
import { CardContainer, FeedContentContainer, SearchInput } from './styles'

export const FeedContent = () => {
  const { fetchSearchIssues } = useBlog()
  const { issues } = usePosts()

  const handlerBounceSearch = useCallback(
    debounce((value) => fetchSearchIssues(value), 1000),
    []
  )

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    handlerBounceSearch(value)
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
