import styled from 'styled-components'
import {BsSearch} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'

export const HomeContainer = styled.div`
  background-color: #f9f9f9;
  min-height: 100vh;
  background-size: cover;
`

export const SideBarVideosBody = styled.div`
  min-height: 100vh;
  display: flex;
`

export const VideosContainer = styled.div`
  width: 70%;
  background-color: #f8fafc;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

// Banner CSS

export const BannerCard = styled.div`
  width: 100%;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: 100% 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export const Image = styled.img`
  width: 120px;
  height: 40px;
`

export const BannerParagraph = styled.p`
  font-family: 'Roboto';
  color: #181818;
  font-weight: 400;
  font-size: 20px;
`

export const GetItNowButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: transparent;
  border: 1px solid #231f20;
`

export const BannerCloseButton = styled.button`
  background-color: transparent;
  border: 1px solid #231f20;
  outline: none;
  cursor: pointer;
`

export const CloseIcon = styled(IoMdClose)`
  width: 10px;
  height: 10px;
`
// SearchCard css
export const SearchBarCard = styled.div`
  width: 50%;
  height: 30px;
  border: 1px solid #64748b;
  display: flex;
`
export const SearchInput = styled.input`
  width: 70%;
  height: 100%;
  border: none;
  outline: none;
`
export const SearchButton = styled.button`
  width: 30%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const SearchIcon = styled(BsSearch)`
  width: 10px;
  height: 10px;
`

// no video card css
export const VideoCard = styled.ul`
  width: 100%;
  list-style-type: none;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
`

export const NoVideoFoundImage = styled.img`
  width: 30%;
`
export const NoVideoHeading = styled.h1`
  font-family: 'Roboto';
  color: #212121;
  font-weight: 600;
  font-size: 25px;
`

export const NoVideoParaGraph = styled.p`
  font-family: 'Roboto';
  color: #616e7c;
  font-weight: 600;
  font-size: 25px;
`
export const RetryButton = styled.button`
  width: 80px;
  height: 30px;
  background-color: #00306e;
  border: none;
  outline: none;
  cursor: pointer;
font-family: 'Roboto';
  color:  : #ffffff;
  font-weight: 400;
  font-size: 14px;
`
