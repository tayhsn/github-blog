import { RegularText } from '@/common/Typography'
import { PersonInfo } from '@/pages/Feed/components/PersonInfo'
import { PostCard } from '@/pages/Feed/components/PostCard'
import {
  CardContainer,
  FeedContainer,
  FeedContent,
  SearchInput,
} from './styles'

export const Feed = () => {
  return (
    <FeedContainer>
      <PersonInfo />

      <FeedContent>
        <form>
          <label htmlFor="search">
            <RegularText size="s" color="span">
              6 publicações
            </RegularText>
          </label>
          <SearchInput id="search" placeholder="Buscar conteúdo" />
        </form>

        <CardContainer>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </CardContainer>
      </FeedContent>
    </FeedContainer>
  )
}
