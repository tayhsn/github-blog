import { RegularText, TitleText } from '@/common/Typography'
import { PostCardContainer } from './styles'

export const PostCard = () => {
  return (
    <PostCardContainer>
      <header>
        <TitleText size="m">
          JavaScript data types and data structures
        </TitleText>
        <RegularText size="m" color="span">
          Há 1 dia
        </RegularText>
      </header>

      <main>
        <RegularText>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn.
        </RegularText>
      </main>
    </PostCardContainer>
  )
}
