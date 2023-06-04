import styled from 'styled-components'
import {FaMoon} from 'react-icons/fa'
import {BsBrightnessHigh} from 'react-icons/bs'

export const NavBar = styled.nav`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const WebImage = styled.img`
  width: 120px;
  height: 70%;
  margin-left: 10px;
`

export const DeskViewCard = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
`

export const ThemeButton = styled.button`
  width: 25px;
  height: 25px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`

export const DarkIcon = styled(FaMoon)`
  font-size: 25px;
`
export const ProfileImage = styled.img`
  width: 25px;
  height: 25px;
`
export const LogOutButton = styled.button`
  width: 100px;
  height: 35px;
  background-color: transparent;
  border: 1px solid #3b82f6;
  outline: none;
  cursor: pointer;
  font-family: 'Roboto';
  color: #3b82f6;
  font-weight: 500;
`
export const MobileViewCard = styled.div`
  width: 50%;
  display: none;
  align-items: center;
`
export const BrightIcon = styled(BsBrightnessHigh)`
  width: 25px;
  height: 25px;
`
