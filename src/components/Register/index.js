import { Component } from 'react'
import Cookies from 'js-cookie'
import { Redirect } from 'react-router-dom'
import registerImage from '../../../src/img/registerImage.png'

import './index.css'

class RegisterForm extends Component {
  state = {
    email: '',
    password: '',
    phone: '',
    name: '',
    accountName:'',
    accountNumber:'',
    balance: 0,
    showSubmitError: false,
    errorMsg: '',
  }


  onChangePassword = event => {
    this.setState({ password: event.target.value })
  }

  onChangeEmail = event => {
    this.setState({ email: event.target.value })
  }

  onChangeName = event => {
    this.setState({ name: event.target.value })
  }

  onChangePhone = event => {
    this.setState({ phone: event.target.value })
  }

  onChangeAccountName = event => {
    this.setState({ accountName: event.target.value })
  }

  onChangeAccountNumber = event => {
    this.setState({ accountNumber: event.target.value })
  }


  onSubmitSuccess = () => {
    console.log("hi")
    const { history } = this.props

    // Cookies.set('jwt_token', jwtToken, {
    //   expires: 30,
    // })

    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    console.log("msg",errorMsg)
    this.setState({ showSubmitError: true, errorMsg })
  }

  submitForm = async event => {
    event.preventDefault()
    const { password, email, phone, name ,accountName,accountNumber,balance} = this.state
    const userDetails = { name, email, password, phone,accountName,accountNumber,balance }
  
    if (!password || !email || !phone || !name || !accountName || !accountNumber) {
      this.setState({ showSubmitError: true, errorMsg: 'All fields are required' });
      return;
    }

    const url = 'http://localhost:3001/register/'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    console.log("res", response)



    if ( response.ok === true) {
      console.log("hello")
      this.onSubmitSuccess()
    } else {
      const data = await response.json()
      this.onSubmitFailure(data.error_msg)
    }
  }


  renderAccountNameField = () => {
    const { accountName } = this.state

    return (
      <>
        <label className="input-label-register" htmlFor="AccountName">
          AccountName
        </label>
        <input
          type="text"
          id="AccountName"
          className="username-input-field-register"
          value={accountName}
          onChange={this.onChangeAccountName}
          placeholder="AccountName"
        />
      </>
    )
  }

  renderAccountNumberField = () => {
    const { accountNumber } = this.state


    return (
      <>
        <label className="input-label-register" htmlFor="AccountNumber">
          AccountNumber
        </label>
        <input
          type="text"
          id="AccountNumber"
          className="username-input-field-register"
          value={accountNumber}
          onChange={this.onChangeAccountNumber}
          placeholder="AccountNumber"
        />
      </>
    )
  }



  renderPasswordField = () => {
    const { password } = this.state

    return (
      <>
        <label className="input-label-register" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field-register"
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
        <label className="input-label-register" htmlFor="username">
          EMAIL
        </label>
        <input
          type="email"
          id="username"
          className="username-input-field-register"
          value={email}
          onChange={this.onChangeEmail}
          placeholder="Email"
        />
      </>
    )
  }


  renderPhoneField = () => {
    const { Phone } = this.state

    return (
      <>
        <label className="input-label-register" htmlFor="Phone">
          PHONE
        </label>
        <input
          type="text"
          id="Phone"
          className="username-input-field-register"
          value={Phone}
          onChange={this.onChangePhone}
          placeholder="Phone"
        />
      </>
    )
  }

  renderNameField = () => {
    const { name } = this.state

    return (
      <>
        <label className="input-label-register" htmlFor="Phone">
          NAME
        </label>
        <input
          type="text"
          id="name"
          className="username-input-field-register"
          value={name}
          onChange={this.onChangeName}
          placeholder="Name"
        />
      </>
    )
  }

  render() {
    const { showSubmitError, errorMsg } = this.state
    const jwtToken = Cookies.get('jwt_token')
    console.log("Err",errorMsg)

    // if (jwtToken !== undefined) {
    //   return <Redirect to="/" />
    // }

    return (
      <div className="register-form-container">
        <img
          src={registerImage}
          className="register-website-logo-mobile-img"
          alt="website logo"
        />
          <img
          src={registerImage}
          className="register-website-logo-desktop-img"
          alt="website logo"
        />
        {/* <img
          src={expenseTrackerLoginImage}
          className="regsiter-img"
          alt="website login"
        /> */}
        <form className="form-container-register" onSubmit={this.submitForm}>
          <div className = "userAccountDetails">
            <div className = "userDetails">
            <div className="input-container-register">{this.renderNameField()}</div>
            <div className="input-container-register">{this.renderUsernameField()}</div>
            <div className="input-container-register">{this.renderPhoneField()}</div>
            <div className="input-container-register">{this.renderPasswordField()}</div>
            </div>
            
            <div className = "userDetails">
            <div className="input-container-register">{this.renderAccountNameField()}</div>
            <div className="input-container-register">{this.renderAccountNumberField()}</div>
            </div>
          </div>

          <button type="submit" className="register-button">
            Register
          </button>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default RegisterForm