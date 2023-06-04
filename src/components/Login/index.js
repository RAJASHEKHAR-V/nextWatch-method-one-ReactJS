// import {Redirect} from 'react-router-dom'
import {Component} from 'react'
import Cookies from 'js-cookie'
import {
  FormContainer,
  Form,
  NxtWatchImage,
  LabelElement,
  InputElement,
  Card,
  ButtonElement,
  ErrorParagraph,
} from './componentStyle'

class Login extends Component {
  state = {
    username: '',
    password: '',
    inputType: 'password',
    isToShowPassword: false,
    errorMsg: '',
  }

  onChangeOfUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangeOfPassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeOfShowPassword = event => {
    if (event.target.checked) {
      this.setState({inputType: 'text', isToShowPassword: true})
    } else {
      this.setState({inputType: 'password', isToShowPassword: false})
    }
  }

  onSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})

    history.replace('/')
  }

  onFailure = errorMsg => {
    this.setState({errorMsg})
  }

  onSubmitOfForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSuccess(data.jwt_token)
    } else {
      this.onFailure(data.error_msg)
    }
  }

  render() {
    const {
      username,
      password,
      inputType,
      isToShowPassword,
      errorMsg,
    } = this.state
    // const jwtToken = Cookies.get('jwt_token')
    // if (jwtToken !== undefined) {
    //   return <Redirect to="/" />
    // }

    return (
      <FormContainer>
        <Form onSubmit={this.onSubmitOfForm}>
          <NxtWatchImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <LabelElement htmlFor="user-id">USERNAME</LabelElement>
          <InputElement
            placeholder="Username"
            type="text"
            id="user-id"
            value={username}
            onChange={this.onChangeOfUserName}
          />
          <LabelElement htmlFor="password-id">PASSWORD</LabelElement>
          <InputElement
            placeholder="Password"
            type={inputType}
            id="password-id"
            value={password}
            onChange={this.onChangeOfPassword}
          />
          <Card isFlex>
            <InputElement
              type="checkbox"
              id="show-password-id"
              defaultChecked={isToShowPassword}
              onChange={this.onChangeOfShowPassword}
              isCheckbox
            />
            <LabelElement htmlFor="show-password-id" isCheckboxLabel>
              Show Password
            </LabelElement>
          </Card>
          <Card>
            <ButtonElement className="login-button" type="submit">
              Login
            </ButtonElement>
          </Card>
          {errorMsg.length > 0 ? (
            <ErrorParagraph>{errorMsg}</ErrorParagraph>
          ) : null}
        </Form>
      </FormContainer>
    )
  }
}

export default Login
