import styled from 'styled-components'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddFill} from 'react-icons/ri'

export const SideBarCard = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavigationCard = styled.ul`
  width: 100%;
  list-style-type: none;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const NavigationItem = styled.li`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HomeIcon = styled(AiFillHome)`
  height: 15px;
  width: 15px;
`
export const TrendingIcon = styled(HiFire)`
  height: 15px;
  width: 15px;
`
export const GamingIcon = styled(SiYoutubegaming)`
  height: 15px;
  width: 15px;
`
export const SavedIcon = styled(RiMenuAddFill)`
  height: 15px;
  width: 15px;
`
export const NavigationPara = styled.p`
  font-family: 'Roboto';
  color: #f1f1f1;
  font-weight: 500;
  font-size: 16px;
`
export const ContactUsCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const ContactUsHeading = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-weight: 500;
  font-size: 20px;
`
export const LogoItem = styled.li``

export const Logo = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 10px;
`
export const ContactUsParaGraph = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-weight: 400;
  font-size: 16px;
`
