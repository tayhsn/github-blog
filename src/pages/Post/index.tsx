import { PostContent } from '@/pages/Post/components/PostContent'
import { PostInfo } from '@/pages/Post/components/PostInfo'
import { PostPageContainer } from './styles'

export const IssuePage = () => {
  return (
    <PostPageContainer>
      <PostInfo />

      <PostContent />
    </PostPageContainer>
  )
}
