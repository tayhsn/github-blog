import { IssueContent } from './components/IssueContent'
import { IssueHeader } from './components/IssueHeader'
import { IssuePageContainer } from './styles'

export const IssuePage = () => {
  return (
    <IssuePageContainer>
      <IssueHeader />

      <IssueContent />
    </IssuePageContainer>
  )
}
