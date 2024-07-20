import { Component } from 'react'
import Cookies from 'js-cookie'
import { Redirect } from 'react-router-dom'
import expenseTrackerLoginImage from '../../../src/img/expensetrackerLoginImage.png'
// import loginLogo1 from '../../../src/img/loginLogo1.png'
import extLoginFormLogo from '../../../src/img/extLoginFormLogo.png'

import './Login.css'

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  }


  onChangePassword = event => {
    this.setState({ password: event.target.value })
  }

  onChangeEmail = event => {
    this.setState({ email: event.target.value })
  }



  onSubmitSuccess = jwtToken => {
    const { history } = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })

    history.replace('/navigation')
  }

  onSubmitFailure = errorMsg => {
    console.log("Error")
    this.setState({ showSubmitError: true, errorMsg })
  }

  submitForm = async event => {
    event.preventDefault()
    const { password, email } = this.state
    const userDetails = { email, password }
    const url = 'http://localhost:3001/login/'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    console.log("res",response)
   
   
    if (response.ok === true) {
      console.log("s:1") 
      const data = await response.json()
      console.log("con",data)
      this.onSubmitSuccess(data.jwtToken)
    } else {
      console.log("s:2")
      console.log(response)
      const data = await response.json()
      console.log("err: ",data)
      this.onSubmitFailure(data.error_msg)
    }
  }

  navigateToRegister = () => {
    console.log("B=Navigate")
    const { history } = this.props;
    history.replace('/register');
  }

  renderPasswordField = () => {
    const { password } = this.state

    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </>
    )
  }

  renderUsernameField = () => {
    const { email } = this.state

    return (
      <>
        <label className="input-label" htmlFor="username">
          EMAIL
        </label>
        <input
          type="email"
          id="username"
          className="username-input-field"
          value={email}
          onChange={this.onChangeEmail}
          placeholder="Email"
        />
      </>
    )
  }

  render() {
    const { showSubmitError, errorMsg } = this.state
    const jwtToken = Cookies.get('jwt_token')

    // if (jwtToken !== undefined) {
    //   return <Redirect to="/" />
    // }

    return (
      <div className="login-form-container">
        {/* <img
          src={expenseTrackerLoginImage}
          className="login-website-logo-mobile-img"
          alt="website logo"
        /> */}
        <img
          src={expenseTrackerLoginImage}
          className="login-img"
          alt="website login"
        />
        <form className="form-container" onSubmit={this.submitForm}>
          <img
            src={extLoginFormLogo}
            className="login-website-logo-desktop-img"
            alt="website logo"
          />
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
          <p className="register-text">
  New user? <span className="register-link" onClick={() => this.navigateToRegister()}>Register</span>
</p>

        </form>
      </div>
    )
  }
}

export default LoginForm