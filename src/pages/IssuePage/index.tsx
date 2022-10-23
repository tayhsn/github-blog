import { IssueContent } from '@/pages/IssuePage/components/IssueContent'
import { IssueHeader } from '@/pages/IssuePage/components/IssueHeader'
import { IssuePageContainer } from './styles'

export const IssuePage = () => {
  return (
    <IssuePageContainer>
      <IssueHeader />

      <IssueContent />
    </IssuePageContainer>
  )
}
