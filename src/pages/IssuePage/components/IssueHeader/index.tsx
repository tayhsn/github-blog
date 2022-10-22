import {
  ArrowSquareOut,
  Calendar,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from 'phosphor-react'
import { InfoWithIcon } from '../../../../components/InfoWithIcon/InfoWithIcon'
import { LinkWithIcon } from '../../../../components/LinkWithIcon'
import {
  IconsContainer,
  InfosContainer,
  IssueHeaderContainer,
  IssueTitle,
  LinksContainer,
} from './styles'

export const IssueHeader = () => {
  return (
    <IssueHeaderContainer>
      <LinksContainer>
        <LinkWithIcon
          icon={<CaretLeft color="#3294F8" size={12} weight="bold" />}
          text={'VOLTAR'}
          path={'#'}
        />
        <LinkWithIcon
          icon={<ArrowSquareOut color="#3294F8" size={12} weight="bold" />}
          iconIsRight
          text={'VER NO GITHUB'}
          path={'#'}
        />
      </LinksContainer>

      <InfosContainer>
        <IssueTitle>JavaScript data types and data structures</IssueTitle>

        <IconsContainer>
          <InfoWithIcon
            icon={<GithubLogo color="#3A536B" size={18} />}
            text={'tayhsn'}
          />
          <InfoWithIcon
            icon={<Calendar color="#3A536B" size={18} />}
            text={'Há 1 dia atrás'}
          />
          <InfoWithIcon
            icon={<ChatCircle color="#3A536B" size={18} />}
            text={'5 comentários'}
          />
        </IconsContainer>
      </InfosContainer>
    </IssueHeaderContainer>
  )
}
