import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import SideBar from '../SideBar'
import VideoThumbNail from '../VideoThumbNail'
import FailureView from '../FailureView'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {
  HomeContainer,
  SideBarVideosBody,
  VideosContainer,
  SearchBarCard,
  SearchInput,
  SearchButton,
  SearchIcon,
  BannerCard,
  BannerContent,
  Image,
  BannerParagraph,
  GetItNowButton,
  BannerCloseButton,
  CloseIcon,
  VideoCard,
  NoVideoFoundImage,
  NoVideoHeading,
  NoVideoParaGraph,
  RetryButton,
} from './componentStyle'

const apiStatusConstant = {
  initial: 'INITIAL',
  progress: 'PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {videosList: [], apiStatus: '', searchInput: ''}

  componentDidMount() {
    this.getVideosList()
  }
  // updating list to state

  updateVideoList = videos => {
    const newVideosList = videos.map(eachVideoItem => ({
      id: eachVideoItem.id,
      title: eachVideoItem.title,
      thumbNailUrl: eachVideoItem.thumbnail_url,
      channel: {
        name: eachVideoItem.channel.name,
        profileImageUrl: eachVideoItem.channel.profile_image_url,
      },
      viewCount: eachVideoItem.view_count,
      publishedAt: eachVideoItem.published_at,
    }))
    this.setState({
      videosList: newVideosList,
      apiStatus: apiStatusConstant.success,
    })
  }

  // requesting videos list through API
  getVideosList = async () => {
    const {searchInput} = this.state
    this.setState({apiStatus: apiStatusConstant.progress})

    const jwtToken = Cookies.get('jwt_token')
    const requestUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(requestUrl, options)
    if (response.status === true) {
      const data = await response.json()
      this.updateVideoList(data.videos)
    } else {
      this.setState({apiStatus: apiStatusConstant.failure})
    }
  }

  getVideos = () => {
    const {videosList} = this.state
    const isDataAvailable = videosList.length

    if (isDataAvailable > 0) {
      return (
        <VideoCard>
          {videosList.map(eachVideoItem => (
            <VideoThumbNail
              key={eachVideoItem.id}
              eachVideoItem={eachVideoItem}
            />
          ))}
        </VideoCard>
      )
    }
    return (
      <VideoCard>
        <NoVideoFoundImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
          alt="no videos"
        />
        <NoVideoHeading>No Search Results Found</NoVideoHeading>
        <NoVideoParaGraph>
          Try different key words or remove search filter
        </NoVideoParaGraph>
        <RetryButton>Retry</RetryButton>
      </VideoCard>
    )
  }

  loadLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  banner = () => (
    <BannerCard>
      <BannerContent>
        <Image src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" />
        <BannerParagraph>
          Buy NXT Watch Premium prepaid plans with UPI
        </BannerParagraph>
        <GetItNowButton>GET IT NOW</GetItNowButton>
      </BannerContent>
      <BannerCloseButton data-testid="close">
        <CloseIcon />
      </BannerCloseButton>
    </BannerCard>
  )

  getFailureMessage = () => <FailureView />

  renderVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstant.success:
        return this.getVideos()
      case apiStatusConstant.progress:
        return this.loadLoader()
      case apiStatusConstant.failure:
        return this.getFailureMessage()
      default:
        return null
    }
  }

  render() {
    return (
      <HomeContainer>
        <Header />
        <SideBarVideosBody>
          <SideBar />
          <VideosContainer data-testid="home">
            {this.banner()}
            <SearchBarCard>
              <SearchInput placeholder="Search" type="search" />
              <SearchButton>
                <SearchIcon />
              </SearchButton>
            </SearchBarCard>
            {this.renderVideos()}
          </VideosContainer>
        </SideBarVideosBody>
      </HomeContainer>
    )
  }
}

export default Home
