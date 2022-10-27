import { FeedContent } from '@/pages/Feed/components/FeedContent'
import { PersonInfo } from '@/pages/Feed/components/PersonInfo'
import { FeedContainer } from './styles'

export const Feed = () => {
  return (
    <FeedContainer>
      <PersonInfo />

      <FeedContent />
    </FeedContainer>
  )
}
