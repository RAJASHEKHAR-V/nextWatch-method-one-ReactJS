import styled from 'styled-components'
import Popup from 'reactjs-popup'
import {FiLogOut} from 'react-icons/fi'

export const PopupContainer = styled(Popup)`
  &-content {
    width: 30%;
  }
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

export const MobileLogOutButton = styled.button`
  display: none;
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`

export const LogoutIcon = styled(FiLogOut)`
  width: 100%;
  height: 100%;
`
export const PopUpCard = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 20px;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const LogoutHeading = styled.h1`
  font-family: 'Roboto';
  color: #00306e;
  font-weight: 500;
`
export const ButtonsCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
export const CancelButton = styled.button`
  width: 80px;
  height: 35px;
  background-color: transparent;
  border: 1px solid #475569;
  outline: none;
  cursor: pointer;
  font-family: 'Roboto';
  color: #64748b;
  font-weight: 500;
`

export const ConfirmButton = styled.button`
  width: 80px;
  height: 35px;
  background-color: : #3b82f6;
  border: none;
  outline: none;
  cursor: pointer;
  font-family: 'Roboto';
  color: #ffffff;
  font-weight: 500;`
