import styled from 'styled-components'

export const FailureViewCard = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FailureImage = styled.img`
  width: 30%;
`
export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  color: #000000;
  font-weight: 500;
  font-size: 22px;
`

export const FailureMessage = styled.p`
  font-family: 'Roboto';
  color:  : #383838;
  font-weight: 400;
  font-size: 20px;`

export const RetryButton = styled.button`
  width: 80px;
  height: 30px;
  background-color: #00306e;
  border: none;
  outline: none;
  cursor: pointer;
  font-family: 'Roboto';
  color: #ffffff;
  font-weight: 400;
  font-size: 14px;
`
