import {
  FailureViewCard,
  FailureImage,
  FailureHeading,
  FailureMessage,
  RetryButton,
} from './componentsStyle'

const FailureView = () => (
  <FailureViewCard>
    <FailureImage
      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
      alt="failure view"
    />
    <FailureHeading>Opps! Something Went Wrong</FailureHeading>
    <FailureMessage>
      We are having some trouble to complete your request.Please try again.
    </FailureMessage>
    <RetryButton>Retry</RetryButton>
  </FailureViewCard>
)

export default FailureView
