import LogoutPop from '../LogoutPop'

import {
  NavBar,
  WebImage,
  DeskViewCard,
  ThemeButton,
  DarkIcon,
  ProfileImage,
  MobileViewCard,
  BrightIcon,
} from './componentStyle'

const Header = () => (
  <NavBar>
    <WebImage
      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
      alt="nxt watch logo"
    />
    <DeskViewCard>
      <ThemeButton>
        <DarkIcon />
      </ThemeButton>
      <ProfileImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
        alt="profile"
      />
      <LogoutPop />
    </DeskViewCard>
    <MobileViewCard>
      <ThemeButton>
        <BrightIcon />
      </ThemeButton>
      <LogoutPop />
    </MobileViewCard>
  </NavBar>
)

export default Header
