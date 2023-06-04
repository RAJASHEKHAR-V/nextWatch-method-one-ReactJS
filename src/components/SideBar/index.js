import {Link} from 'react-router-dom'
import {
  SideBarCard,
  NavigationCard,
  NavigationItem,
  HomeIcon,
  TrendingIcon,
  GamingIcon,
  SavedIcon,
  NavigationPara,
  ContactUsCard,
  ContactUsHeading,
  LogosCard,
  LogoItem,
  Logo,
  ContactUsParaGraph,
} from './componentStyle'

const SideBar = () => (
  <SideBarCard>
    <NavigationCard>
      <Link to="/">
        <NavigationItem>
          <HomeIcon /> <NavigationPara>Home</NavigationPara>
        </NavigationItem>
      </Link>
      <Link to="/trending">
        <NavigationItem>
          <TrendingIcon /> <NavigationPara>Trending</NavigationPara>
        </NavigationItem>
      </Link>
      <Link to="/gaming">
        <NavigationItem>
          <GamingIcon /> <NavigationPara>Gaming</NavigationPara>
        </NavigationItem>
      </Link>
      <Link to="/saved-videos ">
        <NavigationItem>
          <SavedIcon /> <NavigationPara>Saved videos</NavigationPara>
        </NavigationItem>
      </Link>
    </NavigationCard>
    <ContactUsCard>
      <ContactUsHeading>CONTACT US</ContactUsHeading>
      <LogosCard>
        <LogoItem>
          <Logo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
            alt="facebook logo"
          />
        </LogoItem>
        <LogoItem>
          <Logo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
            alt="twitter logo"
          />
        </LogoItem>
        <LogoItem>
          <Logo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
            alt="linked in logo"
          />
        </LogoItem>
      </LogosCard>
      <ContactUsParaGraph>
        Enjoy Now to see your channels and recommendations!
      </ContactUsParaGraph>
    </ContactUsCard>
  </SideBarCard>
)

export default SideBar
