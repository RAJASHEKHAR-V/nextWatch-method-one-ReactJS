import {
  PopupContainer,
  LogOutButton,
  MobileLogOutButton,
  LogoutIcon,
  PopUpCard,
  LogoutHeading,
  ButtonsCard,
  CancelButton,
  ConfirmButton,
} from './componentStyle'

const LogoutPop = () => (
  <>
    <PopupContainer
      modal
      trigger={
        <>
          <LogOutButton>Logout</LogOutButton>
          <MobileLogOutButton>
            <LogoutIcon />
          </MobileLogOutButton>
        </>
      }
    >
      {close => (
        <PopUpCard>
          <LogoutHeading>Are you sure you want to logout?</LogoutHeading>
          <ButtonsCard>
            <CancelButton onClick={() => close()}>Cancel</CancelButton>
            <ConfirmButton>Confirm</ConfirmButton>
          </ButtonsCard>
        </PopUpCard>
      )}
    </PopupContainer>
  </>
)

export default LogoutPop
