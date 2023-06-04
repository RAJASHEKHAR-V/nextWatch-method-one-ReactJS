import styled from 'styled-components'

//   FormContainer,
//   Form,
//   NxtWatchImage,
//   LabelElement,
//   InputElement,
//   Card,
//   ButtonElement,
//   ErrorParagraph,

export const FormContainer = styled.div`
   {
    background-color: #f9f9f9;
    min-height: 100vh;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const Form = styled.form`
   {
    width: 40%;
    min-height: 60vh;
    background-color: #f9f9f9;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px, 0px;
    box-shadow: 0px 4px 4px 4px #d7dfe9;
    @media (max-width: 767px) {
      width: 80%;
    }
  }
`

export const NxtWatchImage = styled.img`
   {
    width: 150px;
    height: 40px;
    margin-bottom: 40px;
  }
`

export const LabelElement = styled.label`
   {
    width: ${props => (props.isCheckboxLabel ? null : '80%')};
    font-family: 'Roboto';
    color: ${props => (props.isCheckboxLabel ? ' #1e293b' : '#94a3b8')};
    font-size: 12px;
    font-weight: 600;
    margin-bottom: ${props => (props.isCheckboxLabel ? '0px' : '10px')};
  }
`

export const InputElement = styled.input`
   {
    width: ${props => (props.isCheckbox ? '18px' : '80%')};
    height: ${props => (props.isCheckbox ? '18px' : '30px')};
    font-family: 'Roboto';
    color: #7e858e;
    font-size: 12px;
    font-weight: 400;
    border: 1px solid #cbd5e1;
    margin-bottom: ${props => (props.isCheckbox ? '0px' : '20px')};
    background-color: transparent;
    padding-left: 20px;
    outline: none;
  }
`

export const Card = styled.div`
   {
    width: 80%;
    height: 35px;
    display: ${props => (props.isFlex ? 'flex' : null)};
    align-items: ${props => (props.isFlex ? 'center' : null)};
    margin-bottom: 10px;
  }
`

export const ButtonElement = styled.button`
   {
    width: 100%;
    height: 100%;
    background-color: #3b82f6;
    border: none;
    border-radius: 8px;
    font-family: 'Roboto';
    color: #ffffff;
    font-weight: 500;
    font-size: 14px;
    outline: none;
    cursor: pointer;
  }
`

export const ErrorParagraph = styled.p`
   {
    width: 80%;
    font-family: 'Roboto';
    color: #ff0b37;
    font-size: 12px;
    font-weight: 400;
  }
`
